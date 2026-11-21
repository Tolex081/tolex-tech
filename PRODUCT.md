# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring teams: recruiters and engineering leads screening a full-stack developer who builds for the web, Web3 and AI. They arrive from a CV, a LinkedIn message or a GitHub profile, usually skimming between other candidates, and want to know within a minute what Toluwalase builds, how well, and how to reach him.

## Product Purpose

Personal portfolio of Oyewole Toluwalase ("Tolex"), a full-stack developer in Nigeria. It exists to get him hired: show shipped work, an honest picture of his skills, and make contacting him effortless. Success is a hiring team reaching out by email, WhatsApp or the contact form, or opening his GitHub and résumé.

## Positioning

A developer who learned to ship inside Web3 communities (trivia games, badge generators and small interactive tools that thousands of people actually use, built fast for people who won't read instructions) and now ships complete products end to end: a Sui wallet budget backed by Walrus Memory, NFT memberships and credentials on NEAR, and AI tools on the Claude and Gemini APIs, mostly built for hackathons with tests and honest notes on what is live.

## Operating Context

Visitors read on desktop between other applications and on phones from a LinkedIn or WhatsApp link. Projects link out to GitHub repositories and, where deployed, to their live Vercel apps (hackathon builds run on testnet or with fictional demo data, and say so). The contact form posts to Web3Forms when `VITE_WEB3FORMS_KEY` is set and falls back to the visitor's mail client otherwise.

## Capabilities and Constraints

- Single page: Home, About, Skills, Projects (three featured, six others), Contact, footer. A 404 route exists.
- Content lives in `src/data/site.ts`, `src/data/projects.ts`, `src/data/skills.ts`; all copy and links there are the owner's and must be kept.
- Skills use honest proficiency bands (Core, Comfortable, Learning), never percentages.
- Projects without a real screenshot or deployment must not pretend to have one; the live-demo link only appears when `live` is set.
- Light and dark mode both supported, following the OS until the visitor chooses.
- Stack: Vite, React 18, TypeScript, Tailwind CSS, Radix dialog, Vitest; deployed on Vercel.

## Brand Commitments

- Name and handle: Oyewole Toluwalase, "Tolex". Logo at `src/assets/logo.png`; illustrated avatar (character in a blue suit and bow tie) at `src/assets/avatar.{jpg,webp}`.
- Tagline: "I build things for the web."
- Owner's binding constraints for the site (2026-11-20): one calm colour theme with exactly one accent colour; a distinctive font pair (not Inter, not Arial); Motion hovers on every link and button; exactly one GSAP scroll animation; keep all content and links. The owner later asked for an airy look (the craft level of thegreatola.com, not its design), which lifted the earlier no-gradient and no-card rules.

## Evidence on Hand

- Nine real projects with GitHub repos (see `src/data/projects.ts`). No screenshots, no live URLs, no usage numbers recorded: do not invent metrics, testimonials, employers or clients.
- `public/resume.pdf` is referenced by the Résumé link but not yet in the repo; the owner will add it.
- Social: GitHub, LinkedIn, Twitter, WhatsApp, email (see `src/data/site.ts`).

## Product Principles

1. The work is the evidence: lead with what he has built, linked to real code.
2. Honest over impressive: no inflated skill bars, fake screenshots or invented claims.
3. One minute to a decision: a skimming recruiter should get role, proof and contact without hunting.
4. Contact is never more than one action away.

## Accessibility & Inclusion

WCAG AA contrast in both modes, full keyboard access, visible focus, and reduced-motion respected for every animation.
