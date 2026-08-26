/**
 * Proficiency is expressed as a small set of honest bands rather than
 * self-assigned percentages, which read as arbitrary to anyone reviewing.
 *
 * These are exactly the skills that were listed before, just regrouped —
 * add anything that is genuinely yours, don't pad it.
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
      { name: "HTML & CSS", level: "core" },
      { name: "React", level: "core" },
      { name: "Tailwind CSS", level: "core" },
      { name: "TypeScript", level: "comfortable" },
    ],
  },
  {
    title: "Backend & Data",
    blurb: "Where I'm actively growing.",
    skills: [
      { name: "REST APIs", level: "comfortable" },
      { name: "Node.js", level: "learning" },
      { name: "Express", level: "learning" },
      { name: "MongoDB", level: "learning" },
      { name: "PostgreSQL", level: "learning" },
    ],
  },
  {
    title: "Tooling",
    blurb: "Everything around the code that keeps it shippable.",
    skills: [
      { name: "Git & GitHub", level: "core" },
      { name: "Vercel", level: "comfortable" },
      { name: "Figma", level: "comfortable" },
    ],
  },
];
