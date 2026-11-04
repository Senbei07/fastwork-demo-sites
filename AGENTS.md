# Project rules: fastwork-demo-sites

Three fictional Thai small-business demo landing pages (cafe/, spa/, product/), static HTML on Cloudflare Pages. For any design work use the `impeccable` skill (Persuade mode for landing pages) and the `frontend-design` skill.

## Non-negotiables
- Keep the visible "เว็บตัวอย่าง (Demo)" label on every page and the footer demo note. Shop names are made up. Never use real brand names, logos or product photos of real brands.
- No SVG placeholder art or emoji as illustrations. Use real photos from Unsplash or Pexels only (their free licenses). Download, resize, convert to WebP, self-host in the site folder, always set width/height, `loading="lazy"` below the fold, `fetchpriority="high"` on the hero image only. Record every photo (file, source URL, photographer, license) in `<site>/CREDITS.md` and a small footer credit.
- Each site has its own palette and type pairing. Do not reuse a palette, font pairing, or section layout across sites. Avoid default AI patterns: gradient heroes, card grids of identical cards with icon tiles, "ทำไมต้อง X?" sections, pill badges everywhere, stock phrases.
- Mobile PageSpeed/Lighthouse 90+ in every category (aim for 100). No external CDNs. Self-hosted fonts only.
- Keep existing functionality: spa booking form posting to Supabase `bookings` (honeypot field `website`, required PDPA consent), LINE and tel buttons, lazy Google Map, commented Meta/TikTok pixel placeholders in product.

## Thai typography
- `<html lang="th">`. Body line-height 1.6–1.8; headings at least 1.3–1.4 so Thai vowels/tone marks are never clipped.
- No letter-spacing and no text-transform on Thai text.
- Pair a loopless Thai face for headlines with a readable face for body. Good OFL choices: IBM Plex Sans Thai, Anuphan, Noto Sans Thai / Noto Serif Thai, Sarabun, Bai Jamjuree, Chakra Petch, Trirong, Taviraj, Pridi, Charm (script accents), Chonburi (display). Avoid Kanit/Prompt-for-everything.
- Self-host subset woff2 (Thai + Latin), `font-display: swap`, preload at most the one or two fonts used above the fold.
- Body text at least 16px on mobile; keep line length about 30–45 Thai characters' worth per line on mobile for readability.
