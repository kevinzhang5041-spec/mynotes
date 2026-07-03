# Kevin and Mahith's garden

A digital garden built from an Obsidian vault of physics and math notes. The
site is fully static (no server-side code) and lives in [`garden/`](garden);
the source notes live in [`physics/`](physics).

## How it fits together

- **`physics/physics/`** — the Obsidian vault. `Physics/` and `Math/` hold the
  actual notes; `Diagrams/` and `Excalidraw/` hold hand-drawn canvases;
  `.obsidian/` is Obsidian's local app state and is git-ignored (large and
  irrelevant to the site).
- **`garden/build.py`** — reads the vault, resolves `[[wikilinks]]`, and
  writes `garden/data.js`. It never modifies anything under `physics/`.
- **`garden/index.html` / `style.css` / `app.js`** — the static site itself.
  It reads `window.GARDEN_DATA` from `data.js` and renders everything
  client-side (routing, markdown, KaTeX math, the note graph). Marked,
  KaTeX, and D3 are loaded from CDN, so the page needs internet access to
  render — but no build step to *serve*.

## Editing notes

Edit `.md` files in `physics/physics/...` as usual (in Obsidian or any text
editor), then regenerate the site data:

```
python garden/build.py
```

Commit the changes (including the updated `garden/data.js`) and push. If you
use the included GitHub Actions workflow, it also rebuilds `data.js` on every
push automatically, so committing it yourself is a nice-to-have, not
required.

## Previewing locally

Any static file server works, e.g.:

```
python -m http.server 8080 --directory garden
```

then open `http://localhost:8080`.

## Publishing to GitHub Pages

1. Create a new **public** (or private, Pages works for both on paid plans)
   GitHub repo, then from this folder:

   ```
   git remote add origin https://github.com/<you>/<repo>.git
   git branch -M main
   git push -u origin main
   ```

2. In the repo on GitHub: **Settings → Pages → Source → GitHub Actions**.
   The included workflow (`.github/workflows/deploy.yml`) will build and
   deploy automatically on every push to `main`. You can also trigger it
   manually from the **Actions** tab (`Run workflow`).

3. After the first successful run, your site is live at
   `https://<you>.github.io/<repo>/`.

No GitHub Actions minutes concerns here — the build is a few seconds of
Python with no dependencies.

## What's intentionally excluded

`physics/physics/Physics/Handouts/` and a stray `chapter 11.pdf` contain
course PDFs, including a copyrighted textbook. They're git-ignored (see
`.gitignore`) and were never used by the site (the build only reads `.md`
files) — just make sure you don't `git add -f` them later.
