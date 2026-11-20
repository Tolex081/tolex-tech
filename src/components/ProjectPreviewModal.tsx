import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { InkLink } from "@/components/Ink";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Only opened for projects with a real screenshot or deployment to show. */
const ProjectPreviewModal = ({ project, open, onOpenChange }: Props) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] w-[95vw] max-w-4xl overflow-y-auto border-border bg-background p-6 sm:p-8">
        <DialogHeader className="text-left">
          <DialogTitle className="text-[1.75rem] font-light stretch-wide">{project.title}</DialogTitle>
          <DialogDescription className="font-serif text-[1.0625rem] text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="relative aspect-video w-full border border-border">
          {project.live ? (
            <iframe
              src={project.live}
              title={`${project.title} live preview`}
              className="h-full w-full"
              loading="lazy"
              /* No allow-same-origin: combined with allow-scripts it would let the
                 framed page escape the sandbox entirely. */
              sandbox="allow-scripts allow-forms allow-popups"
              referrerPolicy="no-referrer"
            />
          ) : project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={800}
              height={450}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          ) : null}
        </div>

        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 font-sans text-[0.875rem]">
          <p className="text-muted-foreground">{project.tech.join(" / ")}</p>
          <InkLink href={project.github} target="_blank" rel="noopener noreferrer" tone="accent" arrow="out">
            View code
          </InkLink>
          {project.live && (
            <InkLink href={project.live} target="_blank" rel="noopener noreferrer" tone="accent" arrow="out">
              Open live demo
            </InkLink>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPreviewModal;
