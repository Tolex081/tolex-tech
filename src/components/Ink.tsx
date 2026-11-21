import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { m as motion, type Transition, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Every link and button shares one hover grammar, driven by Motion.
 *   Text links: ink steps up, a fine underline draws in from the left, an
 *   optional arrow drifts toward where it goes.
 *   Pills: the pill rises 2px into a longer, softer shadow and the arrow
 *   drifts; pressing settles it back.
 * MotionConfig reducedMotion="user" (App.tsx) keeps it still for anyone who
 * asked for less motion; the colour and shadow change still show the state.
 */

type Tone = "quiet" | "accent" | "plain";
type Arrow = "right" | "out" | "none";

const ease: Transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

const lineVariants = (tone: Tone, active: boolean): Variants => ({
  rest: { scaleX: active ? 1 : 0, opacity: 1 },
  hover: { scaleX: 1, opacity: 1 },
  tap: { scaleX: 1, opacity: 1 },
});

const arrowVariants = (arrow: Arrow): Variants => ({
  rest: { x: 0, y: 0 },
  hover: arrow === "out" ? { x: 2.5, y: -2.5 } : { x: 4, y: 0 },
  tap: { x: 1, y: 0 },
});

const ArrowMark = ({ arrow }: { arrow: Arrow }) => {
  if (arrow === "none") return null;
  const Icon = arrow === "out" ? ArrowUpRight : ArrowRight;
  return (
    <motion.span aria-hidden="true" className="inline-flex self-center" variants={arrowVariants(arrow)} transition={ease}>
      <Icon className="h-[1em] w-[1em]" strokeWidth={1.75} />
    </motion.span>
  );
};

const toneClass: Record<Tone, string> = {
  quiet: "text-muted-foreground hover:text-foreground focus-visible:text-foreground",
  accent: "text-primary",
  plain: "text-foreground",
};

interface InkProps {
  tone?: Tone;
  arrow?: Arrow;
  /** Marks the current section in navigation. */
  active?: boolean;
  children: ReactNode;
  className?: string;
}

const Inner = ({ tone = "quiet", arrow = "none", active = false, children }: InkProps) => (
  <>
    <span className="relative">
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[2px] h-px origin-left bg-current"
        variants={lineVariants(tone, active)}
        transition={ease}
      />
    </span>
    <ArrowMark arrow={arrow} />
  </>
);

const base =
  "inline-flex items-baseline gap-1.5 py-[11px] -my-[11px] transition-colors duration-300 ease-out";

const states = {
  initial: "rest",
  animate: "rest",
  whileHover: "hover",
  whileFocus: "hover",
  whileTap: "tap",
} as const;

type LinkProps = InkProps & Omit<ComponentPropsWithoutRef<typeof motion.a>, keyof InkProps>;

export const InkLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ tone = "quiet", arrow = "none", active = false, children, className, ...props }, ref) => (
    <motion.a
      ref={ref}
      {...states}
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
      {...states}
      whileHover={props.disabled ? undefined : "hover"}
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

/* ------------------------------------------------------------------ pills */

type PillTone = "primary" | "plate";

const pillVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -2, scale: 1 },
  tap: { y: 0, scale: 0.98 },
};

const pillTone: Record<PillTone, string> = {
  primary: "bg-primary text-primary-foreground shadow-plate hover:shadow-lift focus-visible:shadow-lift",
  plate:
    "bg-plate text-foreground shadow-plate ring-1 ring-inset ring-border hover:shadow-lift focus-visible:shadow-lift",
};

const pillBase =
  "inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full px-5 py-2 text-center font-sans text-[0.9375rem] font-medium leading-none transition-shadow duration-300 ease-out";

interface PillProps {
  tone?: PillTone;
  arrow?: Arrow;
  children: ReactNode;
  className?: string;
}

type PillLinkProps = PillProps & Omit<ComponentPropsWithoutRef<typeof motion.a>, keyof PillProps>;

export const PillLink = forwardRef<HTMLAnchorElement, PillLinkProps>(
  ({ tone = "primary", arrow = "none", children, className, ...props }, ref) => (
    <motion.a
      ref={ref}
      {...states}
      variants={pillVariants}
      transition={ease}
      className={cn(pillBase, pillTone[tone], className)}
      {...props}
    >
      <span>{children}</span>
      <ArrowMark arrow={arrow} />
    </motion.a>
  )
);
PillLink.displayName = "PillLink";

type PillButtonProps = PillProps & Omit<ComponentPropsWithoutRef<typeof motion.button>, keyof PillProps>;

export const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ tone = "primary", arrow = "none", children, className, type = "button", ...props }, ref) => (
    <motion.button
      ref={ref}
      type={type}
      {...states}
      whileHover={props.disabled ? undefined : "hover"}
      variants={pillVariants}
      transition={ease}
      className={cn(
        pillBase,
        pillTone[tone],
        "cursor-pointer disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ArrowMark arrow={arrow} />
    </motion.button>
  )
);
PillButton.displayName = "PillButton";
