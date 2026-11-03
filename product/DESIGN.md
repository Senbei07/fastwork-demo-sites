# Design System: ลูน่า เฮิร์บ (Luna Herb)

<!-- impeccable:design-schema 1 -->

## Direction & Aesthetic

A modern clinical-botanical sales landing page designed for Thai consumers. Strips away cliché e-commerce tropes (gradient hero blobs, cookie-cutter card grids with identical icon squares, gold foil gradients, pill badges) in favor of tactile photography, high-contrast typography, and generous negative space.

### Mode
Persuade (direct-response single product page). Every section builds rational and sensory confidence toward ordering via LINE.

## Color Palette

- `--bg-canvas`: `#f6faf9` (Porcelain mist — clean clinical white with microscopic cool teal undertone)
- `--bg-card`: `#ffffff` (Pure white for raised content surfaces)
- `--bg-dark`: `#0a1a18` (Obsidian teal — deep, grounded botanical dark for hero and footer)
- `--bg-dark-surface`: `#112724` (Elevated dark teal surface)
- `--border-subtle`: `#d2e3e0` (Crisp cool border on light surfaces)
- `--border-dark`: `#1b3b36` (Border on dark surfaces)
- `--text-main`: `#0c211f` (Deepest forest ink; contrast >14:1 on porcelain)
- `--text-muted`: `#395551` (Mid-tone slate teal; contrast >5.5:1 on porcelain)
- `--text-light`: `#f0f7f5` (Porcelain text on dark surfaces; contrast >15:1)
- `--text-light-muted`: `#9ab8b3` (Secondary text on dark surfaces; contrast >6:1)
- `--accent-botanical`: `#065942` (Herbal emerald accent for labels and highlights, contrast >6.5:1 on porcelain)
- `--accent-glow`: `#2ce89b` (Luminous mint for dark surface accents, contrast >11:1 on obsidian teal)
- `--cta-line`: `#06c755` (LINE official brand green)
- `--cta-line-hover`: `#05b34c` (Hover state)
- `--cta-line-text`: `#052613` (Deep forest ink on LINE green, contrast >7.1:1, easily passing AAA)

## Typography

- **Headings & Display**: `Anuphan`, sans-serif (subset woff2, weights 600, 700). Modern Thai loopless geometry, confident, clinical yet organic. Line-height 1.35 to 1.4 to ensure Thai tone marks (ไม้เอก, ไม้โท) and upper/lower vowels are never clipped.
- **Body & Captions**: `Noto Sans Thai`, sans-serif (subset woff2, weights 400, 600). Open, highly legible glyphs engineered for long-form reading on digital displays. Line-height 1.7 to 1.75.
- **Thai Typography Rules**:
  - `letter-spacing: normal` (never tracked or tightened on Thai script).
  - `text-transform: none` (strictly forbidden on Thai script).
  - Minimum font-size 16px on mobile.
  - Mobile line length budgeted at 32–44 Thai characters per line for optimal eye saccade.

## Photography

100% real high-resolution photography under Pexels License, optimized into WebP format:
- `img/hero-serum-1200.webp` & `img/hero-serum-640.webp` (Alesia Kozik): Real amber glass dropper bottle.
- `img/centella-leaf.webp` (vishnuvardhan J S): Macro Centella Asiatica leaf with natural morning sunlight.
- `img/serum-pipette.webp` (Alesia Kozik): Pipette dropper texture with clear botanical viscous fluid.
- `img/skin-texture.webp` (Angela Roma): Real human skin texture highlighting natural moisture and barrier integrity.
- `img/routine-flatlay.webp` (Alesia Kozik): Skincare routine layout with dropper and botanical textures.

## Spacing & Components

- Spacing scale: `0.25rem`, `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4.5rem`, `6rem`.
- Section rhythm: Generous vertical padding (`4rem` mobile, `6rem` desktop) to create a relaxed, premium clinical atmosphere.
- Interactive controls: Minimum touch target 48px on mobile, clear focus rings (`:focus-visible` with 3px offset in emerald).
- Sticky conversion: Fixed bottom bar on viewports <900px displaying current promo price (590 บาท), crossed-out retail price (790 บาท), and 1-tap LINE order CTA.
