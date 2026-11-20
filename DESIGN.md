---
name: Tolex Tech
description: A developer portfolio set as the back sleeve of a quiet record, in hairlines, wide type and one cobalt accent.
colors:
  cobalt: "hsl(230 63% 50%)"
  sleeve-board: "hsl(80 8% 92%)"
  graphite-ink: "hsl(210 7% 11%)"
  second-ink: "hsl(213 5% 36%)"
  third-ink: "hsl(213 4% 39%)"
  hairline: "hsl(120 2% 78%)"
  ruled-line: "hsl(120 2% 62%)"
  cobalt-on: "hsl(80 8% 95%)"
  error-red: "hsl(4 76% 40%)"
  cobalt-lifted: "hsl(230 100% 81%)"
  vinyl: "hsl(210 5% 8%)"
  vinyl-ink: "hsl(75 7% 89%)"
  vinyl-second-ink: "hsl(210 3% 64%)"
  vinyl-third-ink: "hsl(210 3% 56%)"
  vinyl-hairline: "hsl(210 4% 19%)"
  vinyl-ruled-line: "hsl(210 3% 34%)"
  vinyl-error-red: "hsl(4 100% 75%)"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 0.5rem + 9.4vw, 8.75rem)"
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 2vw, 2.75rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  record-title:
    fontFamily: "'Brygada 1918 Variable', 'Brygada 1918', Georgia, serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2.375rem)"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "'Brygada 1918 Variable', 'Brygada 1918', Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-lead:
    fontFamily: "'Brygada 1918 Variable', 'Brygada 1918', Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  meta:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.375
rounded:
  none: "0px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  column-gap: "32px"
  section-top: "56px"
  section-bottom: "144px"
  page-max: "78rem"
  measure: "62ch"
components:
  ink-link-quiet:
    textColor: "{colors.second-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "11px 0"
  ink-link-quiet-hover:
    textColor: "{colors.graphite-ink}"
  ink-link-accent:
    textColor: "{colors.cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "11px 0"
  input-ruled:
    textColor: "{colors.graphite-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "8px 0"
    height: "44px"
---

# Design System: Tolex Tech

## Overview

**Creative North Star: "The Back Sleeve"**

The page is the back of a quiet record sleeve. Projects are the tracklist, skills the personnel, contact the credits. Everything is printed straight onto uncoated grey board in graphite ink; in dark mode the board turns over and becomes the vinyl, near-black with grey-white ink. Structure comes from hairline rules and from type alone, never from panels, fills, radii or shadows.

Density is liner-note density: generous vertical air between sections (up to 144px), tight ruled rows inside them, a wide 12-column page held to 78rem. Display type is Archivo pushed to its expanded width and kept light; prose is Brygada 1918, with its italic doing the work other systems hand to colour or weight. There is exactly one accent, a cobalt taken from the suit in the avatar, and it appears only on things you can act on and on the single active edge.

Motion is small and tactile. Every link and button shares one hover grammar driven by Motion: the ink steps up a shade, a hairline underline draws in from the left, an arrow leans toward its destination. The page has exactly one scroll animation, the cobalt playhead in the tracklist. Under reduced motion nothing moves, but colour still reports state.

**Key Characteristics:**
- Grey sleeve board and graphite ink in light; vinyl near-black and grey-white ink in dark. One theme, two lights.
- Hairlines (1px, hairline colour) are the only structure.
- One cobalt accent, reserved for actions and the active edge.
- Archivo at 125% width, light, for display and section names; Archivo at normal width for labels; Brygada 1918 for prose and italics.
- Square corners everywhere, flat surfaces, no gradients.
- One hover grammar on every interactive element; one GSAP scroll animation on the page.

## Colors

A near-neutral, slightly warm grey world with one saturated blue, mirrored for dark mode. Tokens live as HSL channel triples on `:root` / `.dark` in `src/index.css` and are consumed as `hsl(var(--token))`.

### Primary
- **Suit Cobalt** (`cobalt`, light; `cobalt-lifted`, dark): text links that act (Hire me, View my work, Code, Live, Preview, Send message, email and WhatsApp), the active-nav underline, the tracklist playhead and lit track number, the input focus line, focus rings, text selection and the caret. Lifted to a pale periwinkle on the vinyl so it holds contrast.

### Neutral
- **Sleeve Board** (`sleeve-board`): the page in light mode, also the header and dialog surface so nothing reads as a raised card.
- **Graphite Ink** (`graphite-ink`): primary text and display type.
- **Second Ink** (`second-ink`): supporting prose, quiet links at rest, form labels, "comfortable" skill rank.
- **Third Ink** (`third-ink`): meta only (track numbers, dt labels, placeholders, "learning" rank). Held at 4.5:1 or better.
- **Hairline** (`hairline`): every rule: section tops, track rows, skill rows, credit lines, the header once scrolled.
- **Ruled Line** (`ruled-line`): the writing line under form fields and the scrollbar thumb; one step darker than a hairline because it must be found.
- **Cobalt On** (`cobalt-on`): text on a cobalt ground, used only for text selection.
- **Vinyl / Vinyl Ink / Vinyl Second Ink / Vinyl Third Ink / Vinyl Hairline / Vinyl Ruled Line**: the dark-mode counterparts, role for role.

### Status
- **Error Red** (`error-red`, dark `vinyl-error-red`): field error text and the field line when invalid. Never decorative, never an accent.

### Named Rules
**The One Cobalt Rule.** Cobalt marks only what can be clicked or acted on, plus the one active edge (current nav item, playing track). Headings, rules, numbers at rest and decoration never take it.

**The Ink Depth Rule.** Rank and importance are expressed by ink depth (graphite, second, third), not by size jumps, badges or colour. Skill proficiency prints darker the more it is used.

## Typography

**Display Font:** Archivo Variable, width axis (with Archivo, system-ui, sans-serif)
**Body Font:** Brygada 1918 Variable, roman and italic (with Georgia, serif)

**Character:** A wide, light grotesque set like a sleeve's title band, against a bookish 1918 serif that carries the voice. Italic Brygada is the record title and the quiet aside; expanded Archivo is the label printer.

### Hierarchy
- **Display** (300, clamp 2.6rem to 8.75rem, line-height 0.92, -0.03em, width 125%): the name only, as one band across the first viewport, one word per line.
- **Headline** (300, clamp 1.75rem to 2.75rem, line-height 1.05, -0.015em, width 125%): featured track titles; dialog titles at a fixed 1.75rem; 404 and error headings in the same voice.
- **Title** (300, 1.375rem, line-height 1, -0.01em, width 125%): section names pinned in the left margin. Group titles and other-track titles use the same size at weight 400 and width 112% or 125%.
- **Record Title** (Brygada italic, clamp 1.5rem to 2.375rem, line-height 1.25): the tagline under the name; the contact opener uses the roman at clamp 1.375rem to 1.875rem.
- **Body** (Brygada 400, 1.0625rem, line-height 1.6): default prose. **Body Lead** (1.125rem, line-height 1.65 to 1.7) for featured descriptions, About and liner notes. Prose is held to a 62ch measure.
- **Label** (Archivo 400, 0.875rem, normal width): nav, credits, stack lines, social words, side headings ("Side A · Featured") at 1rem and width 112%.
- **Meta** (Archivo 400, 0.8125rem): form labels, dt labels, field errors.

### Named Rules
**The Width Not Weight Rule.** Display hierarchy comes from Archivo's width axis (`font-stretch` 125% or 112%) and size, at weights 300 to 400. Bold display weights are not part of this world.

**The Sentence Case Rule.** Labels are sentence case at normal tracking. No uppercase, letter-spaced eyebrows or kickers.

## Layout

A single centred page, max 78rem, with side gutters of 16px, 24px (sm) and 40px (lg). From md up, every section is a 12-column grid with a 32px column gap: the section name sits sticky in the first 3 columns (top 96px), content takes the remaining 9. Below md the name stacks above the content with 40px beneath it.

Each section opens with a full-width hairline, then 40px (56px at md) of air above content and 96px (144px at md) below. Inside, content is a run of ruled rows: tracks (number column 2.75rem, 4rem from sm), skill groups (4/5 split of 9), definition rows (11rem term column). Rows are separated by hairlines, never by cards or gaps alone.

The header is fixed, 56px tall, on the page colour; its bottom hairline appears only after 24px of scroll. Below md the section links drop to a second 40px row. Anchored sections offset for it (104px mobile, 64px md). The first viewport fills `100svh` minus the header and ends on a credit rule (role, location, socials) at the fold.

## Elevation & Depth

Completely flat. There are no shadows, no tonal layers and no raised surfaces: the header, dialog and toasts sit on the same board colour as the page and are separated only by a hairline. The dialog overlay is the page colour at 90% opacity, a dimming of the sleeve rather than a dark scrim.

### Named Rules
**The Printed Flat Rule.** Nothing floats. Depth is never implied by shadow, blur or a fill behind content; separation is a 1px rule. The one inset `box-shadow` in the system (input focus) is a second line drawn under the field, not elevation.

## Shapes

Square corners everywhere (`--radius: 0px`, mapped to every Tailwind radius step). The recurring geometry is the horizontal hairline, the 1px underline under links, and the 2px by 18px cobalt playhead. Images (the avatar, project previews) are square-cut, with a hairline border only where a preview sits inside the dialog. Icons are thin Lucide line icons at stroke 1.5, sized to the text (0.95em arrows), never in tiles or circles.

## Components

### Ink Links and Ink Buttons
The only interactive control. Text, an underline and an optional arrow; no fills, no borders, no pill shapes.
- **Shape:** none; inline text with an 11px vertical hit-area extension (44px touch target) that does not change layout.
- **Quiet (default):** second ink, underline hidden at rest. Hover or focus: ink steps to graphite, the 1px underline scales in from the left.
- **Accent:** cobalt text with the underline at rest at 45% opacity; hover brings it to full. Used for every action.
- **Plain:** graphite, for the handle in the header.
- **Active:** current nav item takes graphite ink and a full cobalt underline, the one active edge.
- **Arrow:** `right` for in-page moves and submit (leans 4px right), `out` for external links (leans 2.5px up-right).
- **Motion:** 0.38s, ease (0.22, 1, 0.36, 1); colour transitions at 300ms ease-out. Under reduced motion the underline and arrow stay still and only colour changes.
- **Disabled:** 50% opacity, not-allowed cursor.

### Inputs / Fields
A ruled line to write on, not a box.
- **Style:** no border except a 1px bottom line in ruled-line colour, transparent background, zero horizontal padding, 44px tall, Brygada at 1.0625rem. Placeholders in third ink, italic. Textarea is the same line with a 7.5rem minimum height.
- **Hover:** line darkens to second ink.
- **Focus:** line turns cobalt and doubles (inset 1px cobalt line below it); no outline box, cobalt caret.
- **Error:** line and message in error red; message in Meta size below the field.
- **Labels:** Meta size, second ink, above the field.

### Navigation
Archivo label size (0.875rem) in the fixed header: handle at the left in expanded width, section links in the centre, "Hire me" (accent) and the light/dark word toggle at the right. Links are quiet ink links; the section in view becomes active. Below md the section links move to a second row. The theme toggle is a word ("Dark" / "Light"), not an icon.

### Tracklist (signature)
Projects as a numbered tracklist in two sides ("Side A · Featured", "Side B"). Each track is a ruled row: a tabular number (A1, B2) in third ink in the left column; the title in Headline (featured) or Title (other); the description at measure; then a small label line with the stack joined by slashes and accent actions (Code, Live, Preview). A 2px cobalt playhead in the number column is scrubbed by GSAP ScrollTrigger to the track crossing 55% of the viewport, and that track's number turns cobalt (0.35s colour transition). Reduced motion removes the playhead entirely; the list reads the same without it.

### Ruled Lists
Skill groups, the tech stack, About highlights and contact details are all ruled lists: label at left, value or rank at right, a hairline between rows. Skill rank is shown as a word in ink depth (core in graphite, comfortable in second ink, learning in third ink italic serif), with a one-line key above.

### Dialog (project preview)
Board-coloured panel with a 1px hairline border, square corners, 24px to 32px padding, max 56rem. Title in expanded Archivo light, description in Brygada. The close control is a thin X that rotates 90 degrees on hover or focus. Opens with a short fade and slight zoom.

## Do's and Don'ts

### Do:
- **Do** build structure from 1px hairlines and space; separate rows with a rule.
- **Do** keep cobalt to actions and the single active edge (nav underline, playing track).
- **Do** use the Ink Link / Ink Button grammar for every link and button: ink steps up, underline draws in from the left, arrow leans; 0.38s on (0.22, 1, 0.36, 1).
- **Do** set display and section names in Archivo light at 125% width; set prose in Brygada 1918 and use its italic for titles and asides.
- **Do** express rank and importance through ink depth (graphite, second, third).
- **Do** design both lights together: sleeve board by day, vinyl by night, same roles.
- **Do** keep everything still under reduced motion while colour still reports state.

### Don't:
- **Don't** use gradients anywhere.
- **Don't** put boxes, cards, card grids, tiles or fills behind content.
- **Don't** round corners or add shadows; the system radius is 0 and depth is flat.
- **Don't** introduce a second accent colour or use cobalt on headings, numbers at rest or decoration.
- **Don't** use Inter, Arial or a system display face; the pair is Archivo and Brygada 1918.
- **Don't** add a second scroll-driven animation; the tracklist playhead is the only one.
- **Don't** use uppercase letter-spaced eyebrows or kickers above headings.
- **Don't** put icons in tiles or circles, or replace words with icon-only social buttons.
