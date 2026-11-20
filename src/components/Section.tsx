import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * The sleeve's one layout: a hairline across the page, the section's name
 * pinned in the left margin like a liner-note heading, the content in the
 * wide column beside it. No panels, no fills.
 */
const Section = ({ id, title, children, className }: Props) => (
  <section id={id} aria-labelledby={`${id}-heading`} className={cn("px-4 sm:px-6 lg:px-10", className)}>
    <div className="mx-auto max-w-[78rem] border-t border-border pt-10 pb-24 md:pt-14 md:pb-36 md:grid md:grid-cols-12 md:gap-x-8">
      <h2
        id={`${id}-heading`}
        className="mb-10 text-[1.375rem] font-light leading-none tracking-[-0.01em] stretch-wide md:col-span-3 md:mb-0 md:sticky md:top-24 md:self-start"
      >
        {title}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </div>
  </section>
);

export default Section;
