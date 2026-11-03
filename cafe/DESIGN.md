# Design System: บ้านกาแฟริมคลอง

<!-- impeccable:design-schema 1 -->

## Visual World: Canal-Side Editorial & Timber Craft

The visual world draws directly from an old wooden shophouse on a Bangkok canal: weathered teak wood, morning light on water, handmade printed paper menus with clean typographic rules, and earthy ceramic cups. It feels quiet, hospitable, and deeply grounded in its neighborhood.

## Color Palette

- **Base Ground (`--bg-page`)**: `#fafaf9` (clean warm river-mist stone ground; avoids generic cream/beige AI tell)
- **Panel / Surface Ground (`--bg-surface`)**: `#ffffff` (crisp white card stock)
- **Soft Muted Ground (`--bg-subtle`)**: `#f2f1ee` (neutral riverbank stone)
- **Deep Ground (`--bg-dark`)**: `#201a16` (old dark teak timber)
- **Text Main (`--text-primary`)**: `#1d1814` (deep roast espresso; contrast > 13:1 on page bg)
- **Text Secondary (`--text-secondary`)**: `#5a4f45` (weathered bark; contrast > 5.5:1 on page bg)
- **Text on Dark (`--text-light`)**: `#f4efe6` (natural linen)
- **Accent Foliage (`--accent-leaf`)**: `#33503b` (canal-side willow & river flora, contrast > 6:1)
- **Accent Terracotta (`--accent-clay`)**: `#874623` (baked canal clay tile / roast accent, contrast > 5:1)
- **Borders & Rules (`--border-rule`)**: `#ded5c6` (fine editorial divider)
- **Focus Ring (`--focus-ring`)**: `#33503b` (clear 3px accessible outline)

## Typography

- **Headlines / Display**: `Taviraj` (OFL, Thai serif with traditional loops and editorial dignity)
  - Display Hero: `clamp(2.1rem, 5vw, 3.4rem)`, line-height 1.35
  - Section Headings: `clamp(1.6rem, 3.5vw, 2.2rem)`, line-height 1.35
  - Subheadings / Menu Titles: `1.25rem`, line-height 1.4
  - No letter-spacing or text-transform on Thai text.
- **Body & UI**: `Anuphan` (OFL, humanistic Thai loopless font with exceptional legibility)
  - Body: `1rem` (16px) minimum on mobile, line-height 1.75
  - Line length: 30–45 Thai characters on mobile, 55–65 on desktop
  - Menu Items: `1.05rem` bold title, `0.9rem` description, `1.05rem` tabular price
  - Tabular numerals (`font-variant-numeric: tabular-nums`) for prices and hours

## Layout & Hierarchy

- **Hero**: Photo-led hero featuring an authentic canal-side cafe veranda with wooden deck and fresh coffee. Editorial headline with welcoming microcopy and immediate action buttons.
- **Story / Ambiance**: A quiet editorial spread introducing the canal-side spot with authentic photos of coffee preparation and canal life—not generic feature cards with icons.
- **Menu Board**: Two-column editorial print menu with clean typographic category dividers, item names, descriptive notes, and right-aligned prices with dotted leaders—resembling an authentic hand-printed physical cafe menu.
- **Opening Hours**: Clear, dignified craft sign table, with high contrast and explicit operating hours.
- **Location & Arrival**: Practical canal-side directions (ซอยริมคลอง 5 เจริญนคร), click-to-load Google Maps facade with zero third-party performance penalty on initial load, and direct LINE and Call actions.
- **Mobile Sticky Bar**: Compact, ergonomic footer bar for thumb reach (LINE + Tel) on mobile screens.

## Anti-Pattern Bans Enforced

- No gradient hero backgrounds or gradient text.
- No card grids of identical icon-top boxes.
- No kicker / eyebrow badges above headings.
- No generic AI questions ("ทำไมต้องเลือกเรา?").
- No fake SVG drawings or emojis used as iconography.
- No colored blur shadows or zero-offset glow effects.
- No external CDNs (100% self-hosted subset woff2 fonts and WebP images).
