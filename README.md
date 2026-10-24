# lyrics_translation

A responsive Traditional Chinese translation journal for Hannah, built with dependency-free HTML, CSS and JavaScript.

## Preview

Serve this directory with any static HTTP server. For example, with Python already installed:

```sh
python -m http.server 8000
```

Open http://localhost:8000. ES modules require HTTP; do not open index.html directly using a file URL.

## Content

Edit `js/posts.js` to add articles and categories. Each article has a unique URL-safe `id`, `category`, `title`, `subtitle`, `excerpt`, ISO `date`, numeric `minutes`, local `cover` path, and a `body` array of paragraphs. Keep category names synchronized with `categories`. The newest article contains user-supplied bilingual lyrics; the six original samples remain explicitly labeled demonstration content.

Place new covers in `assets/`. The six SVG collage covers and the decorative SVG assets were created for V2. `assets/hero.jpg` is retained from V1 but is not displayed in V2. The V2 banner uses selectable HTML lettering and original SVG decorations.

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

## Design versions

- `v1` preserves commit `4048db0`, the original sage and cream design.
- `v2` is the production Burn Book inspired redesign on `main`.
- `styles.css` provides the shared layout; `burn-book.css` provides the V2 visual overrides.
- No runtime version selector is included. Git tags preserve both complete versions.

## Changelog

### v0.2.0 — 2026-10-09
**Changed:** Production appearance to pink paper, cutout typography, doodles, lipstick decoration, taped article cards, and paper-tab navigation. Banner reads Hann's translation.

**Fixed:** None.

**Added:** Original vector covers, paper texture and doodles, responsive collage banner, V1 archive tag, and V2 release tag.

**Removed:** The V1 painting banner from the active design.

**Breaking Changes:** None. Article data, URLs, category filtering, search, and reading behavior are preserved.

**Validation:** Desktop and mobile browser review; six cards, category/search results, article links and reload, empty and missing-article states, no mobile overflow, and no JavaScript errors.

### v0.2.1 — 2026-10-25
**Changed:** Homepage notice now distinguishes published content from samples.

**Fixed:** None.

**Added:** User-supplied Temper City Reverse Psychology article, original typographic cover, and optional bilingual sections preserving all 17 supplied pairs. Rendering is O(l) in lyric lines.

**Removed:** None.

**Breaking Changes:** None; paragraph-only articles remain supported.
