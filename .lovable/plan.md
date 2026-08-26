Replace all Lovable-branded metadata in `index.html` and hide the "Edit with Lovable" badge on the published site so link previews and the deployed page don't reveal the builder.

## Changes

1. **`index.html`** — replace Lovable placeholders with your brand:
   - `<title>`: "Oyewole Toluwalase — Developer Portfolio"
   - `<meta name="description">`: a short portfolio description (~150 chars)
   - `<meta name="author">`: "Oyewole Toluwalase"
   - `og:title` / `og:description`: match the above
   - `og:image` / `twitter:image`: remove the `lovable.dev/opengraph-image…` URLs (leave omitted unless you want me to generate a branded preview image)
   - `twitter:site`: remove `@Lovable` (or replace with your handle if you have one)
   - Add `<link rel="canonical" href="https://tolex-tech.lovable.app/" />`

2. **Published badge** — call `publish_settings--set_badge_visibility` with `hide_badge: true` to remove the floating "Edit with Lovable" badge from the deployed site. (Requires Pro plan or higher.)

## Notes
- Your domain currently shows `tolex-tech.lovable.app`. To fully remove "lovable" from the URL itself, a custom domain (e.g. `tolex.dev`) would be needed — let me know if you want guidance on that.
- Want me to generate a branded `og:image` (1200×630) so link previews look polished?