import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  /** One line under the heading, set as the plate's italic caption. */
  caption?: string;
  children: ReactNode;
  /** A plate that hangs beside the heading, starting level with it. */
  aside?: ReactNode;
  className?: string;
}

/**
 * Sections sit straight on the sky: a large serif heading, an optional
 * italic caption, then the content. Space separates them, not rules.
 */
const Section = ({ id, title, caption, children, aside, className }: Props) => {
  const head = (
    <header className="mb-12 md:mb-16">
      <h2
        id={`${id}-heading`}
        className="text-[clamp(2.5rem,1.6rem+3.2vw,4.25rem)] leading-[1.02] tracking-[-0.02em]"
      >
        {title}
      </h2>
      {caption && (
        <p className="mt-3 max-w-[48ch] font-serif text-[1.25rem] italic leading-snug text-muted-foreground">
          {caption}
        </p>
      )}
    </header>
  );

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("px-4 sm:px-6 lg:px-10", className)}>
      {aside ? (
        <div className="mx-auto grid max-w-page gap-x-12 gap-y-14 pb-24 pt-16 md:grid-cols-12 md:pb-36 md:pt-20">
          <div className="md:col-span-7">
            {head}
            {children}
          </div>
          <div className="md:col-span-5">{aside}</div>
        </div>
      ) : (
        <div className="mx-auto max-w-page py-24 md:py-36">
          {head}
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
