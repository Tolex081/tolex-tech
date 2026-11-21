---
name: Tolex Tech
description: A developer portfolio set as a field guide to one sky through a whole day, with projects mounted as hand-tinted plates over drifting cloud, five sky pigments for the hours and one dusk-violet accent for everything clickable.
colors:
  dusk-violet: "hsl(246 48% 48%)"
  dusk-violet-night: "hsl(248 92% 81%)"
  high-sky: "hsl(210 52% 94%)"
  zenith: "hsl(208 72% 85%)"
  horizon-haze: "hsl(34 92% 80%)"
  dawn-rose-light: "hsl(336 78% 86%)"
  dawn-peach-light: "hsl(24 95% 86%)"
  rose: "hsl(342 62% 42%)"
  rose-wash: "hsl(345 80% 94%)"
  cobalt: "hsl(214 78% 38%)"
  cobalt-wash: "hsl(212 85% 93%)"
  teal: "hsl(180 80% 24%)"
  teal-wash: "hsl(176 55% 90%)"
  coral: "hsl(10 72% 42%)"
  coral-wash: "hsl(14 90% 93%)"
  amber: "hsl(28 90% 32%)"
  amber-wash: "hsl(38 95% 89%)"
  plate-mount: "hsl(220 50% 99%)"
  cloud-white: "hsl(0 0% 100%)"
  sky-tint: "hsl(212 48% 90%)"
  ink: "hsl(214 32% 13%)"
  ink-muted: "hsl(214 16% 33%)"
  ink-faint: "hsl(214 12% 39%)"
  keyline: "hsl(213 32% 85%)"
  field-stroke: "hsl(213 16% 58%)"
  shadow-blue: "hsl(216 45% 28%)"
  signal-red: "hsl(356 66% 42%)"
  night-sky: "hsl(222 45% 9%)"
  night-zenith: "hsl(224 50% 6%)"
  afterglow: "hsl(300 42% 20%)"
  aurora-violet: "hsl(266 70% 42%)"
  aurora-teal: "hsl(174 70% 30%)"
  rose-night: "hsl(342 90% 78%)"
  rose-wash-night: "hsl(342 35% 19%)"
  cobalt-night: "hsl(212 95% 76%)"
  cobalt-wash-night: "hsl(214 45% 19%)"
  teal-night: "hsl(172 62% 60%)"
  teal-wash-night: "hsl(178 40% 15%)"
  coral-night: "hsl(12 95% 74%)"
  coral-wash-night: "hsl(12 38% 18%)"
  amber-night: "hsl(38 92% 64%)"
  amber-wash-night: "hsl(34 42% 16%)"
  night-plate: "hsl(222 34% 13%)"
  moonlit-cloud: "hsl(220 35% 78%)"
  night-tint: "hsl(222 30% 17%)"
  starlight: "hsl(216 30% 92%)"
  starlight-muted: "hsl(216 16% 72%)"
  starlight-faint: "hsl(216 12% 64%)"
  night-keyline: "hsl(222 24% 22%)"
  night-field-stroke: "hsl(220 14% 44%)"
  night-shadow: "hsl(225 60% 2%)"
  signal-red-night: "hsl(356 90% 76%)"
typography:
  display:
    fontFamily: "'Fraunces Variable', 'Fraunces', Georgia, serif"
    fontSize: "clamp(3rem, 1.2rem + 6.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.025em"
    fontVariation: "opsz auto"
  headline:
    fontFamily: "'Fraunces Variable', 'Fraunces', Georgia, serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.2vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Fraunces Variable', 'Fraunces', Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.25
  caption:
    fontFamily: "'Fraunces Variable', 'Fraunces', Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1
  meta:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  plate: "1.25rem"
  inner-keyline: "0.875rem"
  field: "1rem"
  nav: "1.75rem"
  pill: "9999px"
spacing:
  mount: "10px"
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "40px"
  plate-pad: "32px"
  plate-pad-lead: "40px"
  section: "96px"
  section-md: "144px"
  page-max: "76rem"
  measure: "65ch"
components:
  pill-primary:
    backgroundColor: "{colors.dusk-violet}"
    textColor: "{colors.plate-mount}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  pill-plate:
    backgroundColor: "{colors.plate-mount}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  ink-link-quiet:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  ink-link-quiet-hover:
    textColor: "{colors.ink}"
  ink-link-accent:
    textColor: "{colors.dusk-violet}"
    typography: "{typography.label}"
  plate:
    backgroundColor: "{colors.plate-mount}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "{spacing.mount}"
  inner-keyline:
    textColor: "{colors.ink}"
    rounded: "{rounded.inner-keyline}"
    padding: "{spacing.plate-pad}"
  field:
    backgroundColor: "{colors.high-sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "8px 16px"
    height: "48px"
  field-focus:
    backgroundColor: "{colors.plate-mount}"
  nav-bar:
    backgroundColor: "{colors.plate-mount}"
    rounded: "{rounded.nav}"
    height: "60px"
  nav-item-current:
    backgroundColor: "{colors.sky-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
---

# Design System: Tolex Tech

## Overview

**Creative North Star: "The Cloud Atlas"**

The page is a field guide to one sky through a whole day, after the 1896 International Cloud Atlas and its hand-tinted plates. A fixed sky sits behind everything: three planes of cumulus and wisp roughened by fractal noise, rose dawn light at the top that burns off into clear blue morning, and a golden dusk haze that rises in as the visitor reads down toward contact. Content either sits straight on that sky or is mounted on white plates, the way specimens were mounted in an atlas, with an italic Fraunces caption beneath.

Density is low and the pace is slow. Sections are separated by space, never by rules or bands. Hierarchy comes from the contrast between a high-contrast Didone display set large and a plain, sturdy grotesque for everything you read or press. Colour has two jobs that never swap: dusk violet marks only what moves or can be clicked, and five sky pigments (rose, cobalt, teal, coral, amber) are the light of each hour, carried by headings, captions and mounts.

The world exists in two lights from the same tokens. By day: rose and peach dawn, clear blue noon, golden dusk. By night: a violet and teal aurora at the top, deep ink-blue sky with moonlit cloud at low opacity, and a magenta afterglow at the horizon.

**Key Characteristics:**
- One fixed, layered sky behind every screen, including 404 and error.
- White plate mounts with a fine inner keyline and a long daylight shadow.
- Fraunces, set soft (SOFT 100, WONK 0), for display, headings and italic captions; Hanken Grotesk for body and UI.
- Dusk violet only on interactive or moving things; sky pigments only on static things.
- Each section, skill band and project plate takes one sky pigment, in time-of-day order down the page.
- One shared hover grammar: 0.4s on cubic-bezier(0.22, 1, 0.36, 1).
- Exactly one scroll-driven animation: the sky descent. Separately, the cloud planes drift sideways on their own slow loops.

## Colors

A sky palette that passes through a day: rose and peach dawn light, clear blue noon, a golden dusk haze, five sky pigments for the hours, and one saturated violet accent for interaction, all mirrored into a night palette under `.dark`.

### Primary
- **Dusk Violet** (`dusk-violet`; `dusk-violet-night` in dark mode): primary pill fill, accent text links (project Code / Live / Preview, email, WhatsApp), focus ring, text caret, selection highlight, and the focus glow on fields. Nothing static wears it.

### Neutral
- **High Sky** (`high-sky` / `night-sky`): page ground and the base field fill (at 60% alpha).
- **Zenith** (`zenith` / `night-zenith`): top stop of the sky gradient, fading to High Sky by 60% of the viewport.
- **Horizon Haze** (`horizon-haze` / `afterglow`): the haze layer that fades in from the foot of the viewport as the page scrolls; golden dusk by day, magenta afterglow by night.
- **Dawn Light** (`dawn-rose-light` + `dawn-peach-light` / `aurora-violet` + `aurora-teal`): a gradient laid over the clouds at the top of the page (70% then 50% alpha by day, 38% then 22% by night), so cloud and sky both catch it. It fades out as About arrives.
- **Plate Mount** (`plate-mount` / `night-plate`): every plate, the nav bar, the dialog, toasts, and the focused field. Also the text colour on violet pills in light mode.
- **Cloud White** (`cloud-white` / `moonlit-cloud`): fill of the SVG cloud planes only.
- **Sky Tint** (`sky-tint` / `night-tint`): the field fill and the default wash when no pigment is set.
- **Ink** (`ink` / `starlight`): headings, primary text, active nav item.
- **Ink Muted** (`ink-muted` / `starlight-muted`): secondary paragraphs, italic captions, quiet links at rest, field labels.
- **Ink Faint** (`ink-faint` / `starlight-faint`): metadata (tech lists in the index, contact term labels), placeholders, the "learning" skill band.
- **Keyline** (`keyline` / `night-keyline`): inner ring on plates and panels, index rules, nav divider.
- **Field Stroke** (`field-stroke` / `night-field-stroke`): input borders (70% at rest, full on hover) and the scrollbar thumb.
- **Shadow Blue** (`shadow-blue` / `night-shadow`): the tint inside every shadow; shadows are never neutral grey.
- **Signal Red** (`signal-red` / `signal-red-night`): form validation borders and messages only.

### Sky Pigments
The light of each hour. Each has an **ink** (passes 4.5:1 on sky, plate and its own wash in both modes) and a pale **wash**. An element picks one with `.tint-<name>` (`src/index.css`, names in `src/lib/tints.ts`) and everything inside uses `text-tint`, `bg-tint-wash`, `border-tint`, `ring-tint`.
- **Rose** (`rose` / `rose-night`): dawn. The hero: tagline, "Now learning" dot, the avatar's mount and caption.
- **Cobalt** (`cobalt` / `cobalt-night`): morning. About: heading, the plate's caption, rules and highlight titles.
- **Teal** (`teal` / `teal-night`): noon. The Skills heading.
- **Coral** (`coral` / `coral-night`): afternoon. The Projects heading.
- **Amber** (`amber` / `amber-night`): dusk. Contact: heading, the opening line, the plate's edge and the term labels.
- Skill bands take coral, teal, amber, rose and cobalt in order; featured plates and index rows take turns through cobalt, rose, teal, amber, coral.
- The nav's current-section pill is set in that section's wash and ink, so it changes colour on the way down.

### Named Rules
**The Hour Rule.** Every section takes the light of its hour, in order down the page: rose, cobalt, teal, coral, amber. Pigments sit only on static things (headings, captions, labels, rules, mounts); they never mark a link or button.

**The Moving Edge Rule.** Dusk violet appears only on something that can be clicked, focused, typed into or selected. If an element is static, it is ink or a sky pigment, never violet.

**The Two Lights Rule.** Every colour is a token with a day and a night value; nothing is hard-coded per mode. Clouds drop to 12-20% opacity at night so the sky reads as dark air, not grey fog.

## Typography

**Display Font:** Fraunces Variable (opsz, wght, SOFT and WONK axes, set at SOFT 100 and WONK 0; with Fraunces, Georgia)
**Body Font:** Hanken Grotesk Variable (with system-ui)

**Character:** A soft old-style serif with optical sizing, its terminals and bowls rounded by the SOFT axis so the letters billow like the cumulus behind them; set at regular weight it keeps the atlas's plate-caption voice without Didone hairlines. The grotesque underneath is open, friendly and plain, so reading and UI never compete with it.

### Hierarchy
- **Display** (400, clamp 3rem to 6rem, 0.94, -0.025em): the hero name only, two lines, the second in italic.
- **Headline** (400, clamp 2.5rem to 4.25rem, 1.02, -0.02em): section headings (About, Skills, Projects, Contact). The lead featured plate title uses a slightly smaller clamp (2.25rem to 4rem).
- **Title** (400, 1.5 to 1.75rem, tight): skill group titles, index row titles (1.5rem), dialog title (2rem).
- **Caption** (400 italic, 1.0625 to 1.25rem, snug): section captions, plate captions (the tech a project was built with), the hero tagline at a larger clamp (1.625rem to 2.25rem), status lines in the form, the "Other noteworthy projects" subheading.
- **Body** (400, 1.0625rem, 1.6): running text, capped at 65ch. Lede paragraphs step up to 1.125-1.3125rem.
- **Label** (500, 0.9375rem, 1): pills, nav links, project action links, field labels (0.875rem).
- **Meta** (400, 0.8125rem): tech lists in the index, contact term labels, validation messages.

### Named Rules
**The Caption Is Italic Rule.** Anything that annotates a specimen (what it is, what it was built with, where the person is) is Fraunces italic, in its section's pigment or in muted ink. Labels for controls stay in the grotesque.

**The Regular Weight Rule.** Fraunces is set at 400 everywhere, with `font-optical-sizing: auto` and `font-variation-settings: "SOFT" 100, "WONK" 0` (applied to h1–h4 and `.font-serif` in `src/index.css`). Emphasis in display comes from italic, never from bold.

## Layout

A centred page of at most 76rem with side gutters of 16px, 24px from `sm`, and 40px from `lg`. Sections are open bands of 96px vertical padding (144px from `md`), with a heading block that holds 48-64px above its content. Sections with an `aside` switch to a 12-column grid from `md`: story in 7 columns on the open sky, one plate in 5 columns starting level with the heading.

Featured projects sit in a two-column grid (24px gap, 32px from `md`); the lead plate spans both columns and splits internally 7/5. Other projects are a strict ruled index: fixed columns (title up to 15rem, description, actions) with a hairline between rows. Skills are three ruled columns. Contact is one wide plate split 5/7 between copy and form.

The nav floats 12-16px below the top edge, inside the same max width; on mobile its links drop to a second row inside the same plate. Anchored sections offset by 7.5rem (5.5rem from `md`) so headings land below it. Running text never exceeds 65ch.

## Elevation & Depth

Depth is atmospheric and physical at once. The sky gives distance: three cloud planes at 60%, 90% and 50% opacity drift past at different rates. Plates give object depth: a daylight shadow from above, tinted with the sky's own blue, made of a tight contact shadow and a long soft fall. There are only two shadow levels, and the higher one is reached only by interaction or by a dialog.

### Shadow Vocabulary
- **Plate** (`box-shadow: 0 1px 2px hsl(var(--shadow) / 0.06), 0 18px 40px -18px hsl(var(--shadow) / 0.28)`): every plate, the nav bar, pills at rest, toasts.
- **Lift** (`box-shadow: 0 2px 4px hsl(var(--shadow) / 0.08), 0 24px 48px -16px hsl(var(--shadow) / 0.36)`): pills on hover and focus, and the open dialog.
- **Field Focus Glow** (`box-shadow: 0 0 0 3px hsl(var(--primary) / 0.18)`): inputs and textareas on focus.

### Named Rules
**The Daylight Rule.** Shadows always fall downward with a negative spread and are tinted with Shadow Blue. No hard offsets, no grey, no glow on static surfaces.

**The One Descent Rule.** The page has exactly one scroll-driven animation: the GSAP timeline that moves the far plane by 18%, the mid plane by 55% and the near wisps by 125% of the viewport height across the whole scroll, fades the dawn light from 1 to 0 over the first 18% of the scroll, and fades the horizon haze from 0 to 1. Nothing else animates on scroll. Under reduced motion the sky holds still with the dawn light and the haze both at half.

**The Weather Rule.** Independent of scroll, each cloud plane drifts left on a seamless linear loop: far haze one tile per 210s, mid cloud per 135s, near wisps per 80s, each started at a different phase. Each plane is a baked WebP strip of three identical tiles (rendered by `scripts/render-sky.mjs`), sliding a third of its width per loop, so the loop has no seam. The drift is a CSS transform (`.sky-drift`), runs on the compositor, and stops under reduced motion. Never draw the clouds as live SVG filters again: on phones they froze the page.

## Shapes

Generously rounded, nested corners. Plates are 1.25rem; an inner keyline or image mounted inside a plate's 10px margin is 0.875rem, so the curves stay concentric. Fields are 1rem, the nav bar 1.75rem, pills and the current-nav marker fully round. Plates carry a 1px inset keyline instead of an outer border. Rules (1px Keyline) appear only inside index lists and the tech list on the About plate; sections are never divided by lines.

## Components

### Buttons (Pills)
Soft, tactile, physical: a pill that lifts off the page.
- **Shape:** fully round, minimum height 44px (48px for hero and form calls to action), 20px side padding (24px for the large size).
- **Primary:** Dusk Violet fill, Plate Mount text, Plate shadow. Used once per context: "View my work", "Hire me", "Send message", "Back to home", "Reload page".
- **Plate tone:** Plate Mount fill, Ink text, inset Keyline ring.
- **Hover / Focus:** rises 2px and the shadow moves from Plate to Lift; an optional arrow drifts 4px right (or 2.5px up-right for external links). Press settles to 0 and scales to 0.98. All on 0.4s, cubic-bezier(0.22, 1, 0.36, 1).

### Text Links (Ink)
Quiet words with an underline that draws itself in.
- **Quiet:** Ink Muted, stepping to Ink on hover and focus. Nav, socials, mode toggle.
- **Accent:** Dusk Violet. Project actions and contact details.
- **Plain:** Ink. Wordmark and "Résumé".
- **Hover / Focus:** a 1px underline in the current colour scales in from the left; an optional arrow drifts. Each link carries an 11px vertical hit-area extension so it meets a 44px target without changing layout.

### Cards / Containers (Plates)
- **Corner Style:** 1.25rem.
- **Background:** Plate Mount.
- **Shadow Strategy:** Plate level at rest; plates themselves do not lift on hover.
- **Border:** 1px inset Keyline ring.
- **Internal Padding:** 10px mount around an image (portrait, washed in Rose) or an inner keyline on bare plate (featured projects, mount washed in the project's pigment), whose own padding is 24px, 32px from `sm` and 40px on the lead plate from `md`; 24-48px when the plate holds text directly (About aside, Contact).

### Featured Plate (signature)
A hand-tinted atlas specimen: the outer mount washed in the project's sky pigment (1.25rem, 10px margin, Plate shadow, inset ring in the pigment at 20%), then an inner keyline on bare Plate Mount (0.875rem radius, 1px inset ring in the pigment at 40%) that hugs the work itself. Inside it: the project title in Fraunces in the pigment's ink, the italic caption of what it was built with, then a description at 65ch and accent links. The lead plate runs full width and, from `md`, its inner keyline becomes two 6-column halves aligned to the bottom edge, with title and caption on the left and description and links on the right. The pair below stacks the same content vertically. The keyline frames real content only; it is never an empty panel standing in for an image.

### Ruled Index
The other projects and skills: rows separated by 1px Keyline, top-ruled at the start. Index rows: Fraunces title at 1.5rem in the row's pigment, muted description, faint meta line, accent actions. Skill bands: title and italic blurb in the band's pigment over a 2px pigment rule, rows ruled in the pigment at 20%; name left, proficiency right, with rank shown by setting (pigment semibold for core, Ink Muted for comfortable, Ink Faint italic Fraunces for learning).

### Inputs / Fields
- **Style:** 48px high, 1rem radius, High Sky fill at 60%, 1px Field Stroke at 70%, 16px side padding; textarea at least 8.5rem and resizable.
- **Focus:** border turns Dusk Violet, fill becomes Plate Mount, a 3px violet glow at 18%.
- **Error:** Signal Red border and a 0.8125rem message below.
- **Label:** 0.875rem, 500, Ink Muted, above the field.

### Navigation
A Plate Mount bar at 95% opacity, 1.75rem radius, 60px tall, Plate shadow and Keyline ring, floating over the sky. Wordmark in Fraunces italic at 1.5rem on the left; quiet text links in the middle; a text mode toggle and the "Hire me" primary pill on the right. The section in view is marked with a pill in that section's pigment wash, its label in the pigment's ink, and `aria-current="location"`. Below `md`, the links, mode toggle and "Hire me" fold into a menu button and unfold inside the same plate.

### Dialog
A plate at Lift level, 1.25rem radius, over a High Sky scrim at 80%. The close control is a muted X that rotates 90° on hover.

### The Sky (signature)
A fixed, pointer-transparent layer behind all content: a Zenith-to-High-Sky gradient, three cloud planes (cumulus built from overlapping circles on a flattened base, wisps as long thin ellipses, roughened by fractal noise and softly blurred, baked to WebP strips per theme by `scripts/render-sky.mjs`), the Dawn Light over the clouds at the top, and a Horizon Haze gradient rising from the bottom. Every full-screen surface, including 404, mounts it; the error screen uses its gradient alone.

## Do's and Don'ts

### Do:
- **Do** mount featured work and grouped specifics on plates: Plate Mount, 1.25rem radius, inset Keyline, Plate shadow.
- **Do** caption every specimen in Fraunces italic, in its pigment or muted ink.
- **Do** give every section, band and plate the light of its hour (The Hour Rule), and check each new pigment use passes 4.5:1.
- **Do** keep Dusk Violet on interactive elements only (The Moving Edge Rule).
- **Do** use the shared Motion hover on every link and button: 0.4s, cubic-bezier(0.22, 1, 0.36, 1); pills lift 2px into the Lift shadow, text links draw their underline in.
- **Do** keep nested radii concentric: 1.25rem plate, 10px mount, 0.875rem inner.
- **Do** separate sections with space (96px, 144px from `md`), not rules.
- **Do** keep the sky visible behind every full-screen state, and hold it still under reduced motion.

### Don't:
- **Don't** add a second scroll-driven animation; the sky descent is the only one.
- **Don't** set Fraunces bold, turn WONK on, or use a system display face; emphasis in display is italic.
- **Don't** use neutral grey or hard offset shadows; shadows are Shadow Blue and fall softly downward.
- **Don't** lift plates on hover; only pills lift.
- **Don't** fill the inner keyline or leave it as an empty panel; it frames real content (title, caption, description, links) on bare plate.
- **Don't** build a grid of identical project cards; lead with mounted plates and put the rest in the ruled index.
- **Don't** add stat counters or invented metrics.
- **Don't** put a sky pigment on a link or button, or dusk violet on anything static; the two colour jobs never swap.
- **Don't** add a sixth pigment or spend pigment as confetti: one pigment per section, band or plate.
