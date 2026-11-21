import { useState } from "react";
import { InkButton, InkLink } from "@/components/Ink";
import ProjectPreviewModal from "@/components/ProjectPreviewModal";
import Section from "@/components/Section";
import { featuredProjects, otherProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface LinksProps {
  project: Project;
  onPreview: (project: Project) => void;
}

/**
 * Code always; Live only when deployed; Preview only once there is a
 * screenshot or deployment to show, since until then it would only repeat
 * the plate.
 */
const ProjectLinks = ({ project, onPreview }: LinksProps) => (
  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[0.9375rem] font-medium">
    <InkLink
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      tone="accent"
      arrow="out"
      aria-label={`${project.title} source on GitHub`}
    >
      Code
    </InkLink>
    {project.live && (
      <InkLink
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        tone="accent"
        arrow="out"
        aria-label={`${project.title} live demo`}
      >
        Live
      </InkLink>
    )}
    {(project.live || project.image) && (
      <InkButton tone="accent" onClick={() => onPreview(project)} aria-label={`Preview ${project.title}`}>
        Preview
      </InkButton>
    )}
  </div>
);

interface PlateProps extends LinksProps {
  lead?: boolean;
}

/**
 * A featured project mounted like an atlas plate: an outer white mount and a
 * fine inner keyline that hugs the work itself (title, italic caption of
 * what it was built with, description, links). No empty specimen field: once
 * a project has a real screenshot it can be mounted here. The lead plate
 * runs the full width; the next two hang as a pair.
 */
const FeaturedPlate = ({ project, onPreview, lead = false }: PlateProps) => (
  <li className={cn(lead && "md:col-span-2")}>
    <article className="h-full rounded-plate bg-plate p-2.5 shadow-plate ring-1 ring-inset ring-border">
      <div
        className={cn(
          "h-full rounded-[0.875rem] p-6 ring-1 ring-inset ring-border sm:p-8",
          lead && "md:grid md:grid-cols-12 md:items-end md:gap-x-10 md:p-10"
        )}
      >
        <div className={cn(lead && "md:col-span-6")}>
          <h4
            className={cn(
              "break-words leading-[1.02] tracking-[-0.02em]",
              lead ? "text-[clamp(2.25rem,1.4rem+3vw,4rem)]" : "text-[clamp(2rem,1.5rem+1.6vw,2.75rem)]"
            )}
          >
            {project.title}
          </h4>
          <p className="mt-3 font-serif text-[1.125rem] italic leading-snug text-muted-foreground">
            <span className="sr-only">Built with: </span>
            {project.tech.join(", ")}
          </p>
        </div>
        <div className={cn("mt-6", lead && "md:col-span-6 md:mt-0")}>
          <p className="max-w-measure text-[1rem] leading-[1.65]">{project.description}</p>
          <div className="mt-5">
            <ProjectLinks project={project} onPreview={onPreview} />
          </div>
        </div>
      </div>
    </article>
  </li>
);

/** The rest of the work as a strict index: fixed columns, one row each. */
const IndexRow = ({ project, onPreview }: LinksProps) => (
  <li className="grid grid-cols-[minmax(0,1fr)] gap-x-10 gap-y-2 border-b border-border py-6 md:grid-cols-[minmax(0,15rem)_1fr_auto] md:items-baseline">
    <h4 className="text-[1.5rem] leading-tight">{project.title}</h4>
    <div>
      <p className="max-w-measure text-[0.9375rem] text-muted-foreground">{project.description}</p>
      <p className="mt-1.5 text-[0.8125rem] text-faint">
        <span className="sr-only">Built with: </span>
        {project.tech.join(" · ")}
      </p>
    </div>
    <div className="mt-2 md:mt-0">
      <ProjectLinks project={project} onPreview={onPreview} />
    </div>
  </li>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Projects">
      <h3 className="sr-only">Featured projects</h3>
      <ol className="grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2 md:gap-8">
        {featuredProjects.map((project, index) => (
          <FeaturedPlate key={project.title} project={project} onPreview={setSelected} lead={index === 0} />
        ))}
      </ol>

      <h3 className="mb-4 mt-24 font-serif text-[1.625rem] italic leading-tight text-muted-foreground md:mt-32">
        Other noteworthy projects
      </h3>
      <ol className="border-t border-border">
        {otherProjects.map((project) => (
          <IndexRow key={project.title} project={project} onPreview={setSelected} />
        ))}
      </ol>

      <ProjectPreviewModal
        project={selected}
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </Section>
  );
};

export default ProjectsSection;
