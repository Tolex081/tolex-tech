import { Folder } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  tech: string[];
  className?: string;
}

/**
 * Rendered when a project has no real screenshot yet.
 * It is deliberately an abstract branded card rather than a stock photo —
 * a generic Unsplash image pretending to be a product shot reads as dishonest.
 * It also follows the active color theme for free, which an image cannot.
 */
const ProjectCover = ({ title, tech, className }: Props) => (
  <div
    className={cn(
      "relative w-full h-full overflow-hidden bg-gradient-card flex flex-col items-center justify-center gap-3 px-6 text-center",
      className
    )}
    aria-hidden="true"
  >
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    />
    {/* Corner glow */}
    <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/20 blur-3xl" />

    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25">
      <Folder className="w-7 h-7 text-primary-strong" />
    </div>
    <p className="relative font-mono text-lg md:text-xl font-semibold text-foreground">{title}</p>
    <p className="relative font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      {tech.join(" · ")}
    </p>
  </div>
);

export default ProjectCover;
