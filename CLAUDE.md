# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is David Rubio's personal portfolio site, hosted via GitHub Pages at `david-rubio-cab.github.io`. It is a static, vanilla HTML/CSS/JS site — no build step, no package manager, no framework.

## Running locally

There is no build/lint/test tooling. To preview changes, serve the directory with any static file server (fetch() for the HTML partials requires HTTP, not `file://`), e.g.:

```
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Architecture

`index.html` is a shell containing empty `<div>` placeholders (`#header`, `#init`, `#aboutme`, `#skills`, `#curriculum`, `#portfolio`, `#contact`, `#footer`). `js/script.js` fetches the corresponding fragment from `html/*.html` on `window.onload` and injects it via `innerHTML` into each placeholder, in this order:

| Placeholder id | Fragment file          |
|-----------------|-------------------------|
| header          | html/header.html        |
| init            | html/init.html          |
| aboutme         | html/aboutme.html       |
| skills          | html/skills.html        |
| curriculum      | html/curriculum.html    |
| portfolio       | html/portfolio.html     |
| contact         | html/contact.html       |
| footer          | html/footer.html        |

Implications for edits:
- Each section lives entirely in its own file under `html/`; there's no shared templating, so cross-section changes (e.g. nav links in `header.html` pointing to `#section-id`) must be kept in sync with the `id` of the `<section>` in the corresponding fragment.
- All fragments share a single stylesheet, `css/style.css`.
- Adding a new section requires: a new placeholder `<div>` in `index.html`, a `loadHTML(...)` call in `js/script.js`, a new fragment file in `html/`, and a nav link in `html/header.html`.
- The `html/portfolio.html` gallery is a hand-maintained list of `.project-card` blocks (image + title + description + link to the project's own GitHub repo under the `david-rubio-cab` account). Adding a project means duplicating this block structure.
- Images referenced by fragments live in `img/`; the CV lives in `docs/`.

## Deployment

Pushing to `main` publishes directly via GitHub Pages — there is no CI/build pipeline.
