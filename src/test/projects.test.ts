import { describe, it, expect } from "vitest";
import { featuredProjects, otherProjects } from "@/data/projects";

const allProjects = [...featuredProjects, ...otherProjects];

describe("project data", () => {
  it("never advertises a GitHub repo as a live demo", () => {
    // The original bug: `live` mirrored `github`, so the "view live project"
    // link sent people to source code.
    const offenders = allProjects.filter((p) => p.live?.includes("github.com"));
    expect(offenders.map((p) => p.title)).toEqual([]);
  });

  it("has a distinct live URL when one is set", () => {
    const offenders = allProjects.filter((p) => p.live && p.live === p.github);
    expect(offenders.map((p) => p.title)).toEqual([]);
  });

  it("gives every project a repo, description and tech list", () => {
    for (const project of allProjects) {
      expect(project.github, project.title).toMatch(/^https:\/\/github\.com\//);
      expect(project.description.length, project.title).toBeGreaterThan(10);
      expect(project.tech.length, project.title).toBeGreaterThan(0);
    }
  });

  it("uses no remote stock imagery", () => {
    const remote = allProjects.filter((p) => p.image?.startsWith("http"));
    expect(remote.map((p) => p.title)).toEqual([]);
  });

  it("has unique titles", () => {
    const titles = allProjects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
