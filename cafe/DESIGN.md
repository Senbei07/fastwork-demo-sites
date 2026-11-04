# Design System: บ้านกาแฟริมคลอง

<!-- impeccable:design-schema 1 -->

## Direction

Persuade mode: a neighbourhood cafe page organised around choosing a drink and planning a visit. A full-width riverside photograph introduces the fictional shop; the unboxed price list leads into hours and directions, followed by one short story and photograph. The visual reference is a practical printed menu and a shop chalkboard, with square image edges and no raised panels.

## Color

- Paper `#f5f7f3` and ink `#202c25` carry the menu and footer.
- Chalkboard green `#263e33` anchors the demo banner and map control.
- Pale canal foliage `#e7ebdf` groups visit information.
- Rules `#9a9f8e` organise the menu; blue focus outlines are distinct from the surrounding surfaces.

## Typography

Sarabun, self-hosted in regular and semibold weights, serves both the loopless Thai headings and readable body. Headings use a 1.35 line-height; substantive copy is at least 16px with 1.7 line-height. Thai text has no letter-spacing or text-transform. Menu prices and hours use tabular numerals.

## Layout and behaviour

- A single sticky wrapper contains the demo banner and task navigation, including mobile anchors for menu, hours and directions.
- Hero text sits over a darkened, full-width photograph, with LINE and directions actions and a schedule-based status. The visible hours table is the source for the status; holiday hours are explicitly qualified because the page does not identify public holidays.
- Menu categories are simple typographic lists. The visit block combines a semantic hours table, address, telephone, LINE and a click-loaded map.
- The story is one paragraph and one unrounded photograph; the footer is light and carries the demo disclosure and photo credits.
- Visible focus, a skip link, reduced-motion handling, local WOFF2 fonts and lazy below-fold images are part of the design.
