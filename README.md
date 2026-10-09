# lyrics_translation

A responsive Traditional Chinese translation journal for Hannah, built with dependency-free HTML, CSS and JavaScript.

## Preview

Serve this directory with any static HTTP server. For example, with Python already installed:

```sh
python -m http.server 8000
```

Open http://localhost:8000. ES modules require HTTP; do not open index.html directly using a file URL.

## Content

Edit `js/posts.js` to add articles and categories. Each article has a unique URL-safe `id`, `category`, `title`, `subtitle`, `excerpt`, ISO `date`, numeric `minutes`, local `cover` path, and a `body` array of paragraphs. Keep category names synchronized with `categories`. All current articles are explicitly marked original demonstration content, not real translations.

Place new covers in `assets/`. The six SVG covers were created for this design. `assets/hero.jpg` is cropped from the reference screenshot supplied by the site owner; replace it with the final authorized cover before public launch.

## Behavior and complexity

- Category and title/summary search run in O(n) time and O(n) output space.
- Article lookup uses an O(n) map with expected O(1) lookup.
- Hash links support direct article URLs on static hosting without rewrite rules.
- Unknown article IDs display a recovery link; empty filters display an empty state.
- All scripts, fonts (system fallback), and images work without external services.
- No sign-in, analytics, database, or backend is required.

## GitHub Pages

In repository Settings > Pages, select Deploy from a branch, `main`, and `/ (root)` if public hosting is wanted. This repository does not automatically enable hosting.

## Changelog

### v0.1.0 — 2026-10-09
**Changed:** Initial site design based on image-cover article cards.

**Fixed:** Not applicable for the initial release.

**Added:** Responsive sidebar, reference-image banner, six sample cards, category filters, search, accessible article navigation, empty and missing-article states, and local assets.

**Removed:** Nothing.

**Breaking Changes:** None.

### v0.1.1 — 2026-10-09
**Changed:** Use the Traditional Chinese owner name in visible branding, page titles, metadata, card labels, and footer.

**Fixed:** None.

**Added:** None.

**Removed:** None.

**Breaking Changes:** None.
