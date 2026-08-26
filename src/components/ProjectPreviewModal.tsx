import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import ProjectCover from "@/components/ProjectCover";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectPreviewModal = ({ project, open, onOpenChange }: Props) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto glass">
        <DialogHeader>
          <DialogTitle className="text-foreground text-xl">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border bg-secondary/40">
          {project.live ? (
            <iframe
              src={project.live}
              title={`${project.title} live preview`}
              className="w-full h-full"
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
              className="w-full h-full object-cover"
            />
          ) : (
            <ProjectCover title={project.title} tech={project.tech} />
          )}
        </div>

        <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
          {project.tech.map((tech) => (
            <li key={tech} className="px-2 py-1 rounded-md bg-secondary/60">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-strong"
          >
            <Github size={18} aria-hidden="true" /> View code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-strong"
            >
              <ExternalLink size={18} aria-hidden="true" /> Open live demo
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPreviewModal;
