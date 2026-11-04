# Design System — ณิชา เวลเนส

<!-- impeccable:design-schema 1 -->

## Direction

Persuade mode: a calm day-spa page built around choosing a treatment and sending a booking request. A shallow photo and concise introduction lead directly to a treatment list with duration, price and an individual booking action; the form follows immediately. The page avoids testimonial proof, numbered pillars and sales copy about credentials.

## Visual language

- Ink `#202d39`, deep blue `#26384a`, pale blue-grey `#e5edf0`, and near-white `#fbfcfb` form a cool, quiet palette distinct from the other sites.
- Self-hosted IBM Plex Sans Thai regular and semibold provide loopless headings and readable body text. Text is at least 16px, body line-height is 1.7, and headings use 1.35. Thai text is never tracked or transformed.
- Wide photographic bands and a flat, ruled service list replace split heroes and raised cards. Booking fields are grouped by their task on a pale surface; the footer is light.
- The demo banner and navigation share a sticky wrapper. Each treatment button names its service for assistive technology and moves focus to the selected service in the form.
- Form borders, focus rings, reduced-motion behavior, local fonts, and a lazy supporting photo are part of the design.

## Booking details

Dates and 30-minute start slots use Bangkok time. The page shows only slots that fit the selected duration within weekday or weekend hours; a selected slot is a request, not a confirmed vacancy. Public holidays require confirmation. Phone numbers are normalized before submission, and the existing Supabase booking payload, consent and honeypot remain in place.
