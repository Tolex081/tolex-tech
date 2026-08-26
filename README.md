# Oyewole Toluwalase — Portfolio

Personal portfolio site. Frontend developer working across web and Web3.

**Live:** https://tolex-tech.lovable.app

## Stack

Vite · React 18 · TypeScript · Tailwind CSS · shadcn/ui (Radix) · Vitest

## Getting started

```sh
npm install
npm run dev        # http://localhost:8080
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Typecheck, then production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm test` | Vitest run |

## Configuration

### Contact form

Messages are delivered through [Web3Forms](https://web3forms.com) (free, no backend).

```sh
cp .env.example .env
# paste your access key into VITE_WEB3FORMS_KEY
```

Without a key the form falls back to opening the visitor's mail client, so it
still works — it just doesn't land in your inbox automatically.

### Résumé

Drop your CV at `public/resume.pdf`. The **Résumé** button in the hero already
points there.

## Editing content

Content is separated from presentation — you shouldn't need to touch a component
to update the site:

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Name, tagline, email, socials, navigation |
| `src/data/projects.ts` | Featured and secondary projects |
| `src/data/skills.ts` | Skill groups and proficiency bands |

### Adding a project

```ts
{
  title: "My Project",
  description: "What it does and why it exists.",
  tech: ["React", "TypeScript"],
  github: "https://github.com/Tolex081/my-project",
  live: "https://my-project.vercel.app",  // omit if not deployed
  image: myScreenshot,                     // omit for a themed cover
}
```

Two deliberate rules:

- **`live` is optional.** Leave it out and the "live demo" link is hidden
  instead of quietly pointing back at the repo.
- **`image` is optional.** Without it a theme-aware cover renders. Add a real
  screenshot (`src/assets/projects/…`) when you have one — never a stock photo.

## Theming

Three color themes (teal, purple, amber) × light/dark, all driven by CSS custom
properties in `src/index.css`. The visitor's choice is stored in `localStorage`
and applied by a small inline script in `index.html` *before* first paint, so
there's no theme flash.

To add a theme: define `.dark.theme-<name>` and `.light.theme-<name>` blocks in
`src/index.css`, then add the name to `COLOR_THEMES` and `colorThemeOptions` in
`src/lib/theme.ts`.

## Accessibility

The site aims to stay usable for everyone: skip-to-content link, visible focus
rings, real anchors for navigation, `aria-current` on the active section, and a
global `prefers-reduced-motion` override that disables every animation.

Please keep it that way — don't nest interactive elements, and give every
control an accessible name.
