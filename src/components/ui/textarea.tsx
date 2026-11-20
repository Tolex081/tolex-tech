import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/* Same ruled line as Input, given room to write. */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[7.5rem] w-full resize-y border-0 border-b border-input bg-transparent px-0 py-2 font-serif text-[1.0625rem] leading-relaxed text-foreground transition-[border-color,box-shadow] duration-300 placeholder:text-faint placeholder:italic hover:border-muted-foreground focus-visible:border-primary focus-visible:shadow-[inset_0_-1px_0_hsl(var(--primary))] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
