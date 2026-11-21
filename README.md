# Oyewole Toluwalase — Portfolio

Personal portfolio site. Full-stack developer working across web, Web3 and AI.

**Live:** https://oyetoludan.vercel.app

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

The résumé lives at `/resume` (`src/pages/Resume.tsx`), built from
`src/data/resume.ts` plus the identity, projects and skills already in the other
data files. The page prints cleanly to A4, and its **Download PDF** button
serves `public/resume.pdf`. After editing the résumé, regenerate that PDF:

```sh
npm run resume:pdf   # builds, serves dist/, prints /resume with Edge or Chrome
```

Set `CHROME_PATH` if your browser isn't in a standard location.

## Editing content

Content is separated from presentation — you shouldn't need to touch a component
to update the site:

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Name, tagline, email, socials, navigation |
| `src/data/projects.ts` | Featured and secondary projects |
| `src/data/skills.ts` | Skill groups and proficiency bands |
| `src/data/resume.ts` | Résumé summary, experience and project bullets |

### Adding a project

```ts
{
  title: "My Project",
  description: "What it does and why it exists.",
  tech: ["React", "TypeScript"],
  github: "https://github.com/Tolex081/my-project",
  live: "https://my-project.vercel.app",  // omit if not deployed
  image: myScreenshot,                     // omit until you have a real one
}
```

Two deliberate rules:

- **`live` is optional.** Leave it out and the "live demo" link is hidden
  instead of quietly pointing back at the repo.
- **`image` is optional.** The Preview button only appears once a project has
  a real screenshot (`src/assets/projects/…`) or a live URL — never a stock photo.

## Design

"Cloud Atlas": one airy sky theme (pale high air by day, ink-blue by night)
with a single dusk-violet accent, driven by CSS custom properties in
`src/index.css`. Featured projects, the About details and the contact form sit
on white "plates" with a soft daylight shadow; everything else sits straight
on the sky. The three cloud planes drift sideways on their own slow loops
(`src/components/Sky.tsx`). Fonts are Fraunces, set soft, for display and
italic captions, and Hanken Grotesk for body and UI, self-hosted via
`@fontsource-variable`.

- Every visitor starts in light mode; once they pick dark, the choice is stored
  in `localStorage` and applied by an inline script in `index.html` before
  first paint, so there's no flash.
- Every link and button uses `InkLink` / `InkButton` (text links) or
  `PillLink` / `PillButton` (`src/components/Ink.tsx`) for the shared Motion
  hover.
- The one scroll animation (GSAP ScrollTrigger) lives in
  `src/components/Sky.tsx`: three cloud layers drift past at different speeds
  as you scroll, and a warm horizon haze fades in toward the contact section.

`PRODUCT.md` and `DESIGN.md` record the product brief and design system.

## Accessibility

The site aims to stay usable for everyone: skip-to-content link, visible focus
rings, real anchors for navigation, `aria-current` on the active section, 44px
link hit areas, and `prefers-reduced-motion` respected by Motion, GSAP and the
dialog (colour feedback stays; movement stops).

Please keep it that way — don't nest interactive elements, and give every
control an accessible name.
