import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCover from "@/components/ProjectCover";
import ProjectPreviewModal from "@/components/ProjectPreviewModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { featuredProjects, otherProjects, type Project } from "@/data/projects";

const iconLink =
  "text-muted-foreground transition-colors hover:text-primary-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-32 px-4 relative">
      <div className="absolute left-0 top-1/3 w-96 h-96 max-w-full bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

      <div
        ref={ref}
        className={`container mx-auto max-w-6xl relative z-10 motion-safe:transition-all motion-safe:duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading index="03." title="Projects" />

        {/* Featured */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => {
            const flipped = index % 2 === 1;

            return (
              <article
                key={project.title}
                className={`grid lg:grid-cols-12 gap-8 items-center ${flipped ? "lg:text-right" : ""}`}
              >
                <div className={`lg:col-span-7 relative group ${flipped ? "lg:order-2" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="block w-full text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <div className="relative overflow-hidden rounded-xl border border-border aspect-video">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`Screenshot of ${project.title}`}
                          width={800}
                          height={450}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <ProjectCover title={project.title} tech={project.tech} />
                      )}
                      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-strong text-primary-foreground text-sm font-medium">
                          <Eye size={16} aria-hidden="true" /> Preview {project.title}
                        </span>
                      </span>
                    </div>
                  </button>
                </div>

                {/* Text sits alongside the cover in its own column — no overlap. */}
                <div className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
                  <p className="text-primary-strong font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <div className="glass rounded-xl p-5 mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-3 mb-4 font-mono text-xs text-muted-foreground ${flipped ? "lg:justify-end" : ""}`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex gap-4 items-center ${flipped ? "lg:justify-end" : ""}`}>
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className={iconLink}
                      aria-label={`Preview ${project.title}`}
                    >
                      <Eye size={20} aria-hidden="true" />
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={iconLink}
                      aria-label={`${project.title} source on GitHub`}
                    >
                      <Github size={20} aria-hidden="true" />
                    </a>
                    {/* Only shown when a real deployment exists. */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={iconLink}
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={20} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <h3 className="text-xl font-semibold text-foreground text-center mb-12">
          Other Noteworthy Projects
        </h3>

        {/*
          Cards are plain containers with their own buttons/links rather than a
          clickable div wrapping anchors — nesting interactive elements is invalid
          and confuses screen readers.
        */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <li
              key={project.title}
              className="glass rounded-xl p-6 flex flex-col motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-1 hover:border-primary/30 group"
            >
              <div className="flex justify-between items-start mb-6">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className={iconLink}
                  aria-label={`Preview ${project.title}`}
                >
                  <Eye size={22} aria-hidden="true" />
                </button>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={iconLink}
                    aria-label={`${project.title} source on GitHub`}
                  >
                    <Github size={18} aria-hidden="true" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={iconLink}
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-foreground font-semibold mb-2 transition-colors group-hover:text-primary-strong">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <ProjectPreviewModal
        project={selected}
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </section>
  );
};

export default ProjectsSection;
