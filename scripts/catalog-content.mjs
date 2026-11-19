// Generate content/projects/*.md and their images from the project catalog (github.com/zzxzzk115/featured-projects).
//
//   node scripts/catalog-content.mjs <catalog-dir>      # e.g. ../featured-projects locally, catalog in CI
//
// Every catalog project with a `homepage` section becomes content/projects/<id>.md: front matter in the template's
// project schema (English text), body from body.en.md. Its images are copied to public/assets/img/catalog/<id>/.
// Both outputs are generated and git-ignored: edit projects in the catalog, not here. No dependencies.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

if (!process.argv[2]) {
  console.error('usage: node scripts/catalog-content.mjs <catalog-dir>');
  process.exit(1);
}
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(process.argv[2]);
const out = join(root, 'content', 'projects');
const img = join(root, 'public', 'assets', 'img', 'catalog');
const imgUrl = '/assets/img/catalog';
const catalog = JSON.parse(readFileSync(join(src, 'catalog.json'), 'utf8'));
if (catalog.schemaVersion !== 1) throw new Error(`unsupported catalog schemaVersion ${catalog.schemaVersion}`);

for (const dir of [out, img]) {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
}

// English value of a {en, zh} text or href
const en = (v) => (v && typeof v === 'object' ? v.en : v);

let count = 0;
for (const p of catalog.projects) {
  const hp = p.homepage;
  if (!hp) continue;
  const id = p.id;
  const prefix = `projects/${id}/images/`;
  const url = `${imgUrl}/${id}/`;
  const images = join(src, 'projects', id, 'images');
  if (existsSync(images)) cpSync(images, join(img, id), { recursive: true });

  const fm = { home: hp.home ?? false, id, title: en(p.title), description: en(p.description), legacyPath: hp.path };
  if (p.image) {
    fm.image = p.image.src.replace(prefix, url);
    if (p.image.alt) fm.imageAlt = en(p.image.alt);
    if (p.image.fit && p.image.fit !== 'cover') fm.imageFit = p.image.fit;
  }
  Object.assign(fm, { category: p.category, tags: p.tags ?? [], modes: hp.modes ?? ['academic', 'casual'], order: p.order });
  if (p.status) fm.status = en(p.status);
  if (hp.comments) fm.comments = true;
  const links = (p.links ?? []).map((l) => ({ label: en(l.label), href: en(l.href), ...(l.icon ? { icon: l.icon } : {}) }));
  if (links.length) fm.links = links;
  if (p.overview) fm.overview = p.overview.en;
  const body = (p.body?.en ?? '').split(prefix).join(url);
  // JSON is valid YAML, so the front matter needs no YAML library
  writeFileSync(join(out, `${id}.md`), `---\n${JSON.stringify(fm, null, 2)}\n---\n${body}`);
  count++;
}
console.log(`catalog ${src}: ${count} homepage projects -> content/projects/, images -> public${imgUrl}/`);
