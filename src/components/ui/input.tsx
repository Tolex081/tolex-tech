import * as React from "react";

import { cn } from "@/lib/utils";

/* A soft field set into the plate; violet ring on focus. */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-input/70 bg-background/60 px-4 py-2 font-sans text-[1rem] text-foreground transition-[border-color,box-shadow,background-color] duration-300 placeholder:text-faint hover:border-input focus-visible:border-primary focus-visible:bg-plate focus-visible:shadow-[0_0_0_3px_hsl(var(--primary)/0.18)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
