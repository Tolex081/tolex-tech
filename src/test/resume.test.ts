import { describe, expect, it } from "vitest";
import { featuredProjects, otherProjects } from "@/data/projects";
import { bareUrl, moreProjects, selectedProjects } from "@/data/resume";

describe("résumé data", () => {
  const onResume = [...selectedProjects, ...moreProjects].map((entry) => entry.project.title);

  it("lists every portfolio project exactly once", () => {
    const portfolio = [...featuredProjects, ...otherProjects].map((p) => p.title);
    expect(new Set(onResume).size).toBe(onResume.length);
    expect([...onResume].sort()).toEqual([...portfolio].sort());
  });

  it("strips scheme, www and trailing slash for print", () => {
    expect(bareUrl("https://www.github.com/Tolex081/")).toBe("github.com/Tolex081");
    expect(bareUrl("mailto:a@b.co")).toBe("a@b.co");
  });
});
