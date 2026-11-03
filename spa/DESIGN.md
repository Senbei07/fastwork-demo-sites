# Design System — ณิชา เวลเนส (Nicha Wellness)

<!-- impeccable:design-schema 1 -->

## Design Intent & Point of View

An earthen, quiet sanctuary aesthetic that rejects the saturated "sage green + fake gold foil + cream card grid" cliché. Built on rich terracotta clay, crisp unbleached linen white, and deep charcoal stone ink, conveying deep relaxation, unhurried craft, and authentic Thai botanical therapies.

## Palette

- `--bg`: `#ffffff` (Crisp pure ground)
- `--bg-subtle`: `#f8f6f4` (Subtle stone wash for grouped zones)
- `--bg-card`: `#ffffff` (Pure crisp sheet surface)
- `--text`: `#18181b` (Deep charcoal stone ink, 16.5:1 contrast on white)
- `--text-muted`: `#44403c` (Warm slate gray, 9.8:1 contrast on white)
- `--text-subtle`: `#57534e` (Stone neutral for micro-details, 6.8:1 contrast on white)
- `--primary`: `#9c4320` (Warm terracotta clay, 5.6:1 contrast on white, WCAG AA compliant)
- `--primary-dark`: `#7e3416` (Deep terracotta for active states / focus)
- `--primary-light`: `#f7ece7` (Soft clay blush tint)
- `--earth`: `#5c4735` (Warm teak / herbal earth, 8.2:1 contrast on white)
- `--border`: `#e7e2dc` (Soft sand hairline boundary)
- `--border-subtle`: `#f0ebe5` (Light partition)
- `--success`: `#1e5631` (Forest leaf green, 7.5:1 contrast on white)
- `--error`: `#b91c1c` (Clear scarlet, 5.7:1 contrast on white)

## Typography

- **Headings & Display**: `Pridi` (OFL Thai serif / loopless-hybrid with editorial dignity, self-hosted woff2)
  - Display / Hero Title: 2.65rem, line-height 1.34
  - Heading 2: 2.15rem – 2.25rem, line-height 1.38
  - Heading 3: 1.25rem – 1.45rem, line-height 1.4
- **Body & UI**: `IBM Plex Sans Thai` (OFL humanist sans, clean, readable, self-hosted woff2)
  - Body: 1.0625rem (17px), line-height 1.7
  - Small / Footnotes: 0.88rem – 0.95rem, line-height 1.6
- **Thai Typography Rules**:
  - `letter-spacing: normal;` (never track out Thai text)
  - `text-transform: none;` (never uppercase Thai text)
  - Adequate line-height on headings (1.34+) so tone marks (`ไม้เอก`, `ไม้โท`, `การันต์`) are never clipped.
  - Optimal mobile line length (35–45 characters per line).

## Space & Layout

- Fluid rhythm based on 8px baseline: 8px, 16px, 24px, 32px, 48px, 64px, 96px.
- Container: max-width 1120px with generous lateral padding (1.5rem mobile, 2.5rem desktop).
- Asymmetric editorial balance: Hero pairs a calming atmosphere photo with refined typography.
- Price List: Editorial ledger layout rather than a grid of 6 identical boxed tiles with icons.
- Booking Form: Clean, focused, high-contrast, trustworthy form layout with clear visual hierarchy, accessible touch targets (min 48px), and immediate inline feedback.

## Craft & Interaction Details

- Subtle single-pixel dividers using natural stone tones.
- No glowing halos, no gratuitous drop-shadows, no pseudo-element side color bars.
- Clear, purposeful focus rings (`outline: 2px solid var(--primary); outline-offset: 3px`).
- Real Unsplash and Pexels photography capturing authentic spa elements (herbal compress, skilled hands, warm treatment suite, aromatic botanicals).
