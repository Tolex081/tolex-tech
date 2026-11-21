---
version: 1
slug: "src-pages-index-tsx"
primary_target: "src/pages/Index.tsx"
related_targets: []
---

## Scope

The single-page portfolio (`src/pages/Index.tsx` and its sections), plus the 404 and error screens that share its world. Mode: Experience. Audience: hiring teams skimming candidates. Action: contact (email, WhatsApp, form), open GitHub and résumé.

Constraints from the owner: an airy, light look in the spirit of thegreatola.com (craft bar only, never its layout, colours or copy). For this direction the owner lifted the earlier no-gradient and no-card rules. Still binding: one calm colour theme with one accent, in light and dark; a distinctive font pair (not Inter, not Arial); Motion hovers on every link and button; exactly one GSAP scroll animation; keep all content and links. No invented metrics: the owner has supplied no numbers.

## Direction contract

THESIS: The portfolio is a field guide to one sky, like the 1896 Cloud Atlas. Projects are mounted plates with italic captions, and the page comes down from high clear air in the hero to warm low haze at contact. It refuses blob-gradient hero + stat counters + identical card grid.

OWN-WORLD: The ground is pale high-sky blue (#eaf1f8), warming toward horizon haze (#f2e7dc) near the foot of the page; at night it is deep ink-blue sky (#0d1422). The sky is drawn as three soft cloud layers (far haze, mid cloud, near wisp). Plates are white mounts (#fbfcfe) with a soft, offset daylight shadow and a fine inner keyline. Bodoni Moda light for display and captions in italic; Schibsted Grotesk for body and UI. One accent, dusk violet (#4b3fb5), only on what moves or can be clicked.

STORY: In one viewport the visitor learns the name and the hook, what he ships and what he's learning now, and can reach work or contact. They study the featured plates, scan the strict index of other projects, read skill bands, then land at contact.

FIRST VIEWPORT: A rounded nav floats over the sky: the wordmark on the left, section links, a mode toggle, and a "Hire me" pill. The name is set large in Bodoni light on two lines. Under it, the tagline as an italic caption and the intro paragraph. A "Now learning" observation line. "View my work" pill (primary) and "Résumé" text link. The avatar is mounted as a small plate at right. The cloud layers sit behind; the first plate edge shows at the fold.

FORM: Cloud Atlas, position 7 of my grounded list. seed:9c9e47704550198a. Raises: three-plane sky at different rates (Multiplane Dawn); strict ruled index for the other projects (Split-flap); accent only on moving edges (Rietveld); one reading marks the current section in the nav (Deep Dive). Signature interaction: the one GSAP scroll animation scrubs the descent, with the cloud planes drifting at three rates and the sky warming toward the horizon. Motion grammar: pills lift 2px, the shadow softens and the arrow drifts; text links draw their underline in; 0.4s on (0.22, 1, 0.36, 1). Reduced motion holds the sky still.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
