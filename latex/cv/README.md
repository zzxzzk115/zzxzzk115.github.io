# CV source

Edit `resume-en.tex` and `resume-zh.tex` to maintain the English and Chinese PDF CVs. `site.config.yaml` maps these sources to `/assets/pdf/CV.pdf` and `/assets/pdf/CV-zh.pdf`. CI recompiles them before the homepage build. The checked-in PDFs are generated preview snapshots for local website development without TeX; CI always replaces them from source and does not commit generated files back.

The class is adapted from the owner's Overleaf project, `zzxzzk115/KexuanZhang_CV` at `c4c740d09e5780809fe4ceb2b6318643fa67bf2a`, based on [billryan/resume](https://github.com/billryan/resume). Its MIT license is retained in `LICENSE`. Published sources and PDFs omit telephone contact fields. Neither proprietary Adobe fonts nor the original phone fields are included. TeX Live supplies TeX Gyre Termes, Fandol and Font Awesome; no extra font downloads are needed.

From the template checkout with TeX Live and `latexmk` installed:

```sh
pnpm latex --content ../zzxzzk115.github.io
pnpm site build --content ../zzxzzk115.github.io --out ../zzxzzk115.github.io/dist
```

Build intermediates stay in `.latex-build/` beside each source. Update both language versions together. Experience dates follow the homepage's separate internship and full-time records. Project summaries focus on VRI, LPV, libvultra, Cells of Division and OmniLyrics; planned GPU-driven/streaming experiments are not represented as completed framework features.
