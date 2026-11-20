import * as React from "react";

import { cn } from "@/lib/utils";

/* A ruled line to write on, not a box. */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full border-0 border-b border-input bg-transparent px-0 py-2 font-serif text-[1.0625rem] text-foreground transition-[border-color,box-shadow] duration-300 placeholder:text-faint placeholder:italic hover:border-muted-foreground focus-visible:border-primary focus-visible:shadow-[inset_0_-1px_0_hsl(var(--primary))] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
