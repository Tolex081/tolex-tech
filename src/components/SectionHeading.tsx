import { cn } from "@/lib/utils";

interface Props {
  /** The "01." style index shown before the title. */
  index: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ index, title, align = "left", className }: Props) => {
  if (align === "center") {
    return (
      <div className={cn("flex items-center justify-center gap-4 mb-8", className)}>
        <span className="h-px bg-border flex-grow max-w-[100px]" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          <span className="text-primary-strong font-mono">{index}</span> {title}
        </h2>
        <span className="h-px bg-border flex-grow max-w-[100px]" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4 mb-12", className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
        <span className="text-primary-strong font-mono">{index}</span> {title}
      </h2>
      <span className="h-px bg-border flex-grow max-w-xs" aria-hidden="true" />
    </div>
  );
};

export default SectionHeading;
