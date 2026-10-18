# Kexuan Zhang's homepage

Personal content and deployment configuration for [zzxzzk115.github.io](https://zzxzzk115.github.io/).

- Academic: `/`
- Casual: `/casual/`
- Independent VuePress blog: `/blog/`

The Astro + Vue presentation lives in the separate public [academic-casual-template](https://github.com/zzxzzk115/academic-casual-template) repository. `template.lock.json` pins the exact template commit used by CI. Personal content updates do not require copying or editing template components.

`externalLinks` in `site.config.yaml` adds independently hosted destinations to desktop and mobile navigation. Blog points to `https://zzxzzk115.github.io/blog/`, with a book icon and an external-site indicator in both modes. The template also supports optional per-link mode visibility. The blog remains a separate VuePress site and keeps its existing article URLs and comments.

The current pin includes the template's optional profile/contact fields, portrait credits and content-aware section labels. Its separate Albert Einstein example and historical photograph are used only by the template demo; this site continues to load its own configuration, content and assets.

## Edit content

Update `site.config.yaml` for identity, contact, section layout, navigation, colors, or integrations. `site.favicon: /favicon.svg` restores the original 👾 SVG favicon from the previous site. Homepage content is selected in each record’s `home` field. Use `content/` for Markdown projects/posts/news, biography, profile, CV, repositories, BibTeX, and the blog feed snapshot. Put images and documents in `public/`; these retain their public paths. Academic uses **sc23kz@leeds.ac.uk**; Casual overrides it with **zzxzzk115@gmail.com** through `modes.casual.email`. Both homepages show contact details in the introduction, without a separate Contact section. LinkedIn is scoped to Academic. Casual sets `modes.casual.address: ""` to hide the office address.

The full biography (on the CV page), 7 original project pages, 2 homepage posts, news item, publication, and CV have been migrated from the previous Jekyll site. The catalog now contains 28 curated projects, including CHIP-8, vrendergraph, NW-Unity, the Academic/Casual template and Portfolio-98, with current public GitHub descriptions and a preview for every project (real application captures or Mermaid diagrams). Vultra documents the active `dev-VRI` branch and distinguishes the earlier `dev-next` experiment. Existing underscores in project slugs, article URLs, heading anchors, Giscus pathname mappings, PDF paths, and the root feed are retained. The English CV keeps its existing `/assets/pdf/CV.pdf` URL, with a Chinese edition at `/assets/pdf/CV-zh.pdf`. Both are rebuilt from `latex/cv/` in CI, with no phone numbers. The checked-in PDFs are generated preview snapshots.

Platform and toolchain preferences live in `content/profile.yaml` under `toolkit`. Social links accept a `modes` list; itch.io, Bilibili, QQ and WeChat appear only in Casual. Bilibili and QQ reuse the Blog's account details; QQ opens its installed client and is labelled simply QQ. WeChat copies the configured ID on click, with the Blog About page as a fallback when clipboard access is unavailable. Steam links belong to the game project pages. Project frontmatter supports `status` and `links` for source, demo, or store links. `migration-audit.json` records the comparison against the original site, including 148 assets, CV data, publication fields, repository links, and the reasons for refreshed project text.

Markdown headings and homepage section titles reveal a left-side `#` and underline on hover or keyboard focus. Click the title or marker to copy its direct link, preserving the current mode and existing anchors. Touch devices keep the marker visible.

Current work, learning topics and tentative next steps live in `content/now.yaml`. Update its `updated` date when editing the content. Items can be scoped to Academic/Casual and refer to existing projects by `projectId`; empty groups are hidden. The homepage labels this section **Current focus** in Academic and **On my workbench** in Casual. The Casual introduction is consolidated in `profile.casualSummary`, without a separate About section; the full biography remains on the CV page.

Projects, local posts, news and papers all use one `home` field. It defaults to false. Use `home: true` to collect a Markdown record onto the homepage, or `home: false` to keep it in its archive/detail page only. A mode-specific object controls selection and card order, for example `home: {academic: {order: 1}, casual: {order: 8}}`. Set `home.casual.hero: true` on one project to select its Casual opening image. Existing card selections and order have been moved into the corresponding project Markdown; there are no separate project-selection lists in site configuration.

Casual labels its project selection **Featured Projects**. **All featured** resets the eight selected cards; the separate **All projects · 28** link opens the full catalog with Casual context preserved. Both counts come from content rather than fixed display values.

BibTeX records use the same field: `home = {true}` or `home = {false}`, with optional JSON for mode-specific settings. The current paper is explicitly false. The Publications section and navigation appear automatically when at least one eligible paper exists. Detail pages, archives, RSS, search and the full bibliography retain their content. The Giscus setup note remains at its original URL with `home: false`. Imported blog articles remain controlled by the independent blog feed.

The homepage fetches the English JSON Feed at build time from `/blog/feed.json` and uses `content/blog-feed.json` when it is unavailable. Rebuilding the homepage refreshes its article summaries; the checked-in snapshot is a compact copy of the generated English feed, retaining original publication dates. The Blog publishes RSS, Atom and JSON Feed in English under `/blog/` and Chinese under `/blog/zh/`. The homepage's `/feed.xml` remains the feed for its own local posts. The blog's articles, Chinese locale, comments, repository, and deployment remain independent.

The root RSS now includes `/feed.xsl` for a readable browser preview with
article dates, summaries and a selectable subscription address. It uses the
configured site metadata and accent, supports narrow screens and system dark
mode, and keeps the existing `/feed.xml` subscription URL and post permalinks.

## Local development

Clone the template into a sibling directory, check out the revision in `template.lock.json`, and run:

```sh
cd ../academic-casual-template
pnpm install --frozen-lockfile
pnpm site dev --content ../zzxzzk115.github.io
pnpm site build --content ../zzxzzk115.github.io --out ../zzxzzk115.github.io/dist
pnpm site preview --content ../zzxzzk115.github.io --out ../zzxzzk115.github.io/dist
node scripts/verify.mjs ../zzxzzk115.github.io/dist ../zzxzzk115.github.io
node scripts/audit-migration.mjs ../zzxzzk115.github.io
```

Node 24 and pnpm 10.34.5 are used in CI. Production builds generate the local search index; search is not generated by the dev server.

## Publish and rollback

Pull requests build and upload a preview artifact without publishing. Pushes to `main` deploy through GitHub's native Pages artifact deployment using the built-in token. Set the Pages publishing source to **GitHub Actions** and allow `main` in the `github-pages` environment. The template is public and available to CI.

The deployment workflow does not write to the existing `gh-pages` output branch, preserving the old site for rollback. Its last pre-migration output commit is `49512f47f4c8b2e7b3344303a9cc41573cae916b`. The root build does not produce a `/blog/` directory, so the separately hosted project site remains independent.

The pre-migration source is preserved by the remote tag `pre-astro-migration` (commit `878a9749b81018c2c45a376911ab4ce6fcc8ea97`). The current branch contains only site content, public resources, migration records and the configuration/scripts used by the Astro template. Retired Jekyll layouts, Ruby/Sass/Docker tooling, al-folio example documentation and inactive workflows have been removed. The CodeQL configuration is retained for the JavaScript used here.

Images, PDFs and other resources live only in `public/assets/`. The duplicate root `assets/` directory has been removed. Some public resources are retained for existing external URLs even when they are no longer linked from the homepage; the migration audit checks all 148 original resource paths. Do not remove these based solely on a search of current Markdown references.

To restore the previous live site, switch Pages back to **Deploy from a branch**, selecting `gh-pages` and `/ (root)`. That branch retains the pre-migration output. To rebuild the legacy site, use a separate checkout of the tag, run its documented Jekyll build, and deploy that `_site` output to `gh-pages` with branch publishing enabled. To roll back an Astro version, restore the corresponding content commit and template pin, then rerun the homepage workflow on `main`.

The existing MIT license and legacy theme attribution are preserved. The new template is independently MIT licensed.

The Academic introduction uses the short `profile.academicBackground`; the full biography and tool list remain on the CV. Its homepage places Research interests first, followed by Current focus and featured projects, with announcements labeled **Milestones** and writing labeled **Featured writing**. `modes.academic.showToolkit: false` keeps the research section focused on research questions.

The optional top-level `banner` configuration can show a publication or project feature image above the homepage columns; it is currently omitted. See the template content guide for image dimensions, caption, target link and mode visibility.

Both modes enable `sidebar: true`: at 1280px and wider, the portrait, name/handle and contact links appear in a left sidebar, with “About me” above the main introduction; narrower screens keep the name/handle as the opening heading. Top navigation stays visible while scrolling. The Academic homepage uses `identity.photo`; Casual overrides it with the GitHub-hosted avatar through `modes.casual.photo`, using the same introduction position and responsive size as Academic. Update either image independently in `site.config.yaml`.

`content/projects/lazy_100.md` uses `home.casual: {order: 1, hero: true}` to select the preferred project preview independently of card order when no Casual photo override is configured. The explicit `modes.casual.photo` currently takes priority and displays the GitHub avatar in the introduction. The ten projects selected across both homepages provide `overview` frontmatter (`purpose`, `contribution`, `outcome`) summarizing the goal, my contribution and current result before the detailed write-up. Image-free project cards retain their natural height.

## Source-managed CV PDFs

Edit the selected English and Chinese sources in `latex/cv/`. `identity.cv` lists the two labelled download links; `latex.documents` maps sources to public PDF paths. CI calls the pinned template's `compile-latex` action before the homepage build, using XeLaTeX and TeX Live fonts. No private repository credentials or Overleaf synchronization are required. Compilation failures stop publication. See the source directory README for provenance and local build commands.
