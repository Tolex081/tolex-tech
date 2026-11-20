import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InkButton, InkLink } from "@/components/Ink";
import ProjectPreviewModal from "@/components/ProjectPreviewModal";
import Section from "@/components/Section";
import { featuredProjects, otherProjects, type Project } from "@/data/projects";
import { prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TrackProps {
  project: Project;
  number: string;
  featured: boolean;
  onPreview: (project: Project) => void;
}

/**
 * One track: the promise large, the stack and links in a small ruled line
 * beneath. A preview only appears once a project has a screenshot or a live
 * deployment to show — until then it would only repeat this row.
 */
const Track = ({ project, number, featured, onPreview }: TrackProps) => (
  <li className={cn("track grid grid-cols-[2.75rem_1fr] gap-x-4 border-t border-border sm:grid-cols-[4rem_1fr]", featured ? "py-8 md:py-10" : "py-6 md:py-7")}>
    <span className="track-no tnum pl-3 pt-[0.3em] font-sans text-[0.875rem] text-faint" aria-hidden="true">
      {number}
    </span>
    <article>
      <h4
        className={cn(
          "font-normal leading-[1.05] tracking-[-0.015em] stretch-wide",
          featured ? "text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-light" : "text-[1.375rem]"
        )}
      >
        {project.title}
      </h4>
      <p className={cn("mt-3 max-w-measure", featured ? "text-[1.125rem] leading-[1.65]" : "text-muted-foreground")}>
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap items-baseline gap-x-8 gap-y-3 font-sans text-[0.875rem]">
        <p className="text-muted-foreground">
          <span className="sr-only">Built with: </span>
          {project.tech.join(" / ")}
        </p>
        <div className="flex flex-wrap items-baseline gap-x-6">
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
      </div>
    </article>
  </li>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLSpanElement>(null);

  /*
   * The page's one scroll animation: a short cobalt playhead sits in the
   * number column and glides, scrubbed to the scroll, to each track as it
   * reaches the reading line; that track's number lights. Timeline time is
   * measured in list pixels, so the head arrives exactly where the reader is.
   * Reduced motion skips it entirely; the list reads the same without it.
   */
  useLayoutEffect(() => {
    const list = listRef.current;
    const head = headRef.current;
    if (!list || !head || prefersReducedMotion()) return;

    let ctx: gsap.Context | undefined;

    const build = () => {
      ctx?.revert();
      ctx = gsap.context(() => {
        const tracks = gsap.utils.toArray<HTMLElement>(".track", list);
        const markY = (track: HTMLElement) => {
          const no = track.querySelector<HTMLElement>(".track-no");
          if (!no) return track.offsetTop;
          return no.offsetTop + parseFloat(getComputedStyle(no).paddingTop);
        };

        gsap.set(head, { y: markY(tracks[0]), autoAlpha: 1 });

        const tl = gsap.timeline({
          scrollTrigger: { trigger: list, start: "top 55%", end: "bottom 55%", scrub: 0.5 },
        });
        tracks.forEach((track, index) => {
          if (index === 0) return;
          const travel = Math.min(140, track.offsetTop - tracks[index - 1].offsetTop);
          tl.to(head, { y: markY(track), duration: travel, ease: "power2.inOut" }, track.offsetTop - travel);
        });
        tl.to({}, { duration: 0 }, list.offsetHeight);

        tracks.forEach((track) => {
          ScrollTrigger.create({
            trigger: track,
            start: "top 55%",
            end: "bottom 55%",
            toggleClass: { targets: track, className: "is-playing" },
          });
        });
      }, list);
    };

    build();

    /*
     * Track positions shift whenever the layout does (width, web fonts
     * arriving, content above reflowing), so the stops are re-measured and
     * every trigger refreshed after any size change.
     */
    let timer = 0;
    let lastSize = `${list.offsetWidth}x${list.offsetHeight}x${document.body.offsetHeight}`;
    const rebuild = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        build();
        ScrollTrigger.refresh();
      }, 120);
    };
    const observer = new ResizeObserver(() => {
      const size = `${list.offsetWidth}x${list.offsetHeight}x${document.body.offsetHeight}`;
      if (size === lastSize) return;
      lastSize = size;
      rebuild();
    });
    observer.observe(list);
    observer.observe(document.body);
    document.fonts?.ready.then(rebuild);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    <Section id="projects" title="Projects">
      <div ref={listRef} className="relative">
        <span
          ref={headRef}
          aria-hidden="true"
          className="pointer-events-none invisible absolute left-0 top-0 h-[1.125rem] w-[2px] bg-primary opacity-0"
        />

        <h3 className="mb-2 font-sans text-[1rem] text-muted-foreground stretch-semi">Side A · Featured</h3>
        <ol>
          {featuredProjects.map((project, index) => (
            <Track
              key={project.title}
              project={project}
              number={`A${index + 1}`}
              featured
              onPreview={setSelected}
            />
          ))}
        </ol>

        <h3 className="mb-2 mt-20 font-sans text-[1rem] text-muted-foreground stretch-semi md:mt-28">
          Side B · Other Noteworthy Projects
        </h3>
        <ol>
          {otherProjects.map((project, index) => (
            <Track
              key={project.title}
              project={project}
              number={`B${index + 1}`}
              featured={false}
              onPreview={setSelected}
            />
          ))}
        </ol>
      </div>

      <ProjectPreviewModal
        project={selected}
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </Section>
  );
};

export default ProjectsSection;
