import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { m as motion, type Transition, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Every link and button on the sleeve shares one hover grammar, driven by
 * Motion: ink steps up a shade (CSS colour), a hairline underline draws in
 * from the left, and an optional arrow leans toward where it goes.
 * MotionConfig reducedMotion="user" (App.tsx) keeps it still for anyone who
 * asked for less motion; the colour change still shows the state.
 */

type Tone = "quiet" | "accent" | "plain";
type Arrow = "right" | "out" | "none";

const ease: Transition = { duration: 0.38, ease: [0.22, 1, 0.36, 1] };

const lineVariants = (tone: Tone, active: boolean): Variants => ({
  rest: { scaleX: tone === "accent" || active ? 1 : 0, opacity: tone === "accent" && !active ? 0.45 : 1 },
  hover: { scaleX: 1, opacity: 1 },
  tap: { scaleX: 1, opacity: 1 },
});

const arrowVariants = (arrow: Arrow): Variants => ({
  rest: { x: 0, y: 0 },
  hover: arrow === "out" ? { x: 2.5, y: -2.5 } : { x: 4, y: 0 },
  tap: { x: 1, y: 0 },
});

const toneClass: Record<Tone, string> = {
  quiet: "text-muted-foreground hover:text-foreground focus-visible:text-foreground",
  accent: "text-primary",
  plain: "text-foreground",
};

interface InkProps {
  tone?: Tone;
  arrow?: Arrow;
  /** Marks the current section in navigation: the one active edge. */
  active?: boolean;
  children: ReactNode;
  className?: string;
}

const Inner = ({ tone = "quiet", arrow = "none", active = false, children }: InkProps) => {
  const Icon = arrow === "out" ? ArrowUpRight : ArrowRight;
  return (
    <>
      <span className="relative">
        {children}
        <motion.span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 -bottom-[3px] h-px origin-left",
            active ? "bg-primary" : "bg-current"
          )}
          variants={lineVariants(tone, active)}
          transition={ease}
        />
      </span>
      {arrow !== "none" && (
        <motion.span aria-hidden="true" className="inline-flex" variants={arrowVariants(arrow)} transition={ease}>
          <Icon className="h-[0.95em] w-[0.95em]" strokeWidth={1.5} />
        </motion.span>
      )}
    </>
  );
};

const base =
  "inline-flex items-baseline gap-1.5 py-[11px] -my-[11px] transition-colors duration-300 ease-out focus-visible:outline-offset-0";

type LinkProps = InkProps & Omit<ComponentPropsWithoutRef<typeof motion.a>, keyof InkProps>;

export const InkLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ tone = "quiet", arrow = "none", active = false, children, className, ...props }, ref) => (
    <motion.a
      ref={ref}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      className={cn(base, toneClass[tone], active && "text-foreground", className)}
      {...props}
    >
      <Inner tone={tone} arrow={arrow} active={active}>
        {children}
      </Inner>
    </motion.a>
  )
);
InkLink.displayName = "InkLink";

type ButtonProps = InkProps & Omit<ComponentPropsWithoutRef<typeof motion.button>, keyof InkProps>;

export const InkButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ tone = "quiet", arrow = "none", children, className, type = "button", ...props }, ref) => (
    <motion.button
      ref={ref}
      type={type}
      initial="rest"
      animate="rest"
      whileHover={props.disabled ? undefined : "hover"}
      whileFocus="hover"
      whileTap="tap"
      className={cn(
        base,
        toneClass[tone],
        "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <Inner tone={tone} arrow={arrow}>
        {children}
      </Inner>
    </motion.button>
  )
);
InkButton.displayName = "InkButton";
