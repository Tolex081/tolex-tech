import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/* Same field as Input, given room to write. */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[8.5rem] w-full resize-y rounded-2xl border border-input/70 bg-background/60 px-4 py-3 leading-relaxed font-sans text-[1rem] text-foreground transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-faint hover:border-input focus-visible:border-primary focus-visible:bg-plate focus-visible:shadow-[0_0_0_3px_hsl(var(--primary)/0.18)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
