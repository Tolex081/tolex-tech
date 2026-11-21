/**
 * Proficiency is expressed as a small set of honest bands rather than
 * self-assigned percentages, which read as arbitrary to anyone reviewing.
 *
 * Every skill here is backed by a shipped repository on GitHub. Add only
 * what is genuinely yours; don't pad it.
 */
export type Proficiency = "core" | "comfortable" | "learning";

export const proficiencyLabels: Record<Proficiency, string> = {
  core: "Core",
  comfortable: "Comfortable",
  learning: "Learning",
};

export const proficiencyOrder: Proficiency[] = ["core", "comfortable", "learning"];

export interface Skill {
  name: string;
  level: Proficiency;
}

export interface SkillGroup {
  title: string;
  blurb: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "What I reach for to build the thing.",
    skills: [
      { name: "JavaScript (ES6+)", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "React", level: "core" },
      { name: "HTML & CSS", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "Next.js", level: "comfortable" },
    ],
  },
  {
    title: "Backend & Data",
    blurb: "The servers and stores behind it.",
    skills: [
      { name: "Node.js", level: "comfortable" },
      { name: "REST APIs", level: "comfortable" },
      { name: "Express & Hono", level: "comfortable" },
      { name: "PostgreSQL", level: "comfortable" },
      { name: "Supabase", level: "comfortable" },
      { name: "MongoDB", level: "learning" },
    ],
  },
  {
    title: "Web3",
    blurb: "Where I learned to ship.",
    skills: [
      { name: "Sui & Walrus", level: "comfortable" },
      { name: "NEAR", level: "comfortable" },
      { name: "Rust (smart contracts)", level: "learning" },
      { name: "Solidity & Foundry", level: "learning" },
      { name: "Sui Move", level: "learning" },
    ],
  },
  {
    title: "AI",
    blurb: "Models put to work inside the product.",
    skills: [
      { name: "Claude API", level: "comfortable" },
      { name: "Gemini API", level: "comfortable" },
      { name: "Prompt design", level: "comfortable" },
      { name: "Agent memory", level: "comfortable" },
    ],
  },
  {
    title: "Tooling",
    blurb: "Everything around the code that keeps it shippable.",
    skills: [
      { name: "Git & GitHub", level: "core" },
      { name: "Vercel", level: "core" },
      { name: "Vitest & Playwright", level: "comfortable" },
      { name: "Figma", level: "comfortable" },
    ],
  },
];
