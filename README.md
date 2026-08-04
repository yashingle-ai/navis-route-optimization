# Internship portfolio page — NAVIS route optimization

Single-page site documenting the ElasticRun internship (May–Jul 2026): the auto-planning
and auto-assignment workflow, the route optimization solver, workflow diagrams, the Figma
console design, and code snapshots.

## Publish on GitHub Pages

**Option A — as `<username>.github.io` (site lives at the root domain)**

```bash
cd D:\workspace\internship-site
git init -b main
git add .
git commit -m "Internship portfolio page"
git remote add origin https://github.com/<u>/<username>.github.io.git
git push -u origin main
```

Live at `https://<username>.github.io` within a minute or two.

**Option B — as a project repo (site lives under a path)**

```bash
git remote add origin https://github.com/<username>/navis-internship.git
git push -u origin main
```

Then: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
Live at `https://<username>.github.io/navis-internship/`.

Everything uses relative paths, so both options work with no edits.

## Preview locally

```bash
cd D:\workspace\internship-site
python -m http.server 8080
```

Then open <http://localhost:8080>. Open the file directly with `file://` and the Figma
embed will be blocked — use the local server.

## Assets

No placeholders remain — the certificate is the real scan, and the console UI is covered by the
Figma embed in the `#design` section.

## Figma embed

The embed only renders if the file's sharing is set to **"Anyone with the link → can view"**.
If it stays blank, that permission is the reason — the direct-link fallback below the frame
still works either way.

## Structure

```
index.html                 all content
assets/css/style.css       styling (dark theme, responsive)
assets/js/main.js          diagram lightbox + nav highlighting
assets/img/                diagrams and placeholders
.nojekyll                  serve files as-is, skip Jekyll processing
```
