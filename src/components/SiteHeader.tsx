import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m as motion, type Transition } from "motion/react";
import { InkButton, InkLink, PillLink } from "@/components/Ink";
import { useTheme } from "@/contexts/ThemeContext";
import { navItems, site, whatsappLink } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Module scope keeps the reference stable across renders.
const sectionIds = navItems.map((item) => item.id);
const links = navItems.filter((item) => item.id !== "home");

const ease: Transition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

const goTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  event.preventDefault();
  scrollToSection(href);
  history.replaceState(null, "", href);
};

/** Two fine bars that fold into a cross while the menu is open. */
const MenuButton = ({
  open,
  controls,
  onToggle,
  buttonRef,
}: {
  open: boolean;
  controls: string;
  onToggle: () => void;
  buttonRef: React.Ref<HTMLButtonElement>;
}) => (
  <motion.button
    ref={buttonRef}
    type="button"
    aria-expanded={open}
    aria-controls={controls}
    aria-label={open ? "Close menu" : "Open menu"}
    onClick={onToggle}
    initial={false}
    animate={open ? "open" : "closed"}
    whileHover={open ? undefined : "hover"}
    whileFocus={open ? undefined : "hover"}
    whileTap="tap"
    variants={{ closed: { scale: 1 }, open: { scale: 1 }, hover: { scale: 1 }, tap: { scale: 0.94 } }}
    transition={ease}
    className="relative grid h-11 w-11 cursor-pointer place-items-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted focus-visible:bg-muted md:hidden"
  >
    <span aria-hidden="true" className="relative block h-3 w-5">
      <motion.span
        className="absolute inset-x-0 h-[1.5px] rounded-full bg-current"
        variants={{
          closed: { top: "0%", y: "0%", rotate: 0, x: 0 },
          open: { top: "50%", y: "-50%", rotate: 45, x: 0 },
          hover: { x: 2 },
        }}
        transition={ease}
      />
      <motion.span
        className="absolute inset-x-0 h-[1.5px] rounded-full bg-current"
        variants={{
          closed: { top: "100%", y: "-100%", rotate: 0, x: 0 },
          open: { top: "50%", y: "-50%", rotate: -45, x: 0 },
          hover: { x: -2 },
        }}
        transition={ease}
      />
    </span>
  </motion.button>
);

/**
 * A white plate floating over the sky. On wide screens it carries the
 * section nav inline, with the section you are reading marked by a soft
 * sky-tinted pill. Below md the plate holds only the wordmark and a menu
 * button; the sections, the theme switch and "Hire me" unfold inside it.
 */
const SiteHeader = () => {
  const active = useActiveSection(sectionIds);
  const { mode, toggleMode } = useTheme();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape (focus back to the button), on a tap outside the plate,
  // and when the viewport grows into the desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const themeLabel = `Switch to ${mode === "dark" ? "light" : "dark"} mode`;
  const themeText = mode === "dark" ? "Light" : "Dark";

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-3 z-50 px-2 font-sans text-[0.9375rem] sm:top-4 sm:px-6 lg:px-10"
    >
      <div
        className={cn(
          "mx-auto max-w-page rounded-[1.75rem] bg-plate/95 shadow-plate ring-1 ring-inset ring-border transition-[background-color,box-shadow] duration-300",
          open && "bg-plate shadow-lift"
        )}
      >
        <div className="flex min-h-[3.75rem] items-center justify-between gap-x-2 py-2 pl-4 pr-2 sm:gap-x-4 sm:pl-5">
          <InkLink
            href="#home"
            tone="plain"
            onClick={(event) => {
              setOpen(false);
              goTo(event, "#home");
            }}
            className="min-w-0 font-serif text-[1.5rem] italic leading-none"
            aria-label={`${site.name}, back to top`}
          >
            {site.handle}
          </InkLink>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {links.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <InkLink
                      href={item.href}
                      onClick={(event) => goTo(event, item.href)}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "rounded-full px-3 transition-[background-color,color] duration-300",
                        isActive && "bg-muted text-foreground"
                      )}
                    >
                      {item.label}
                    </InkLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-x-2 md:flex">
            <InkButton onClick={toggleMode} className="px-2.5" aria-label={themeLabel}>
              {themeText}
            </InkButton>
            <PillLink href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-4">
              Hire me
            </PillLink>
          </div>

          <MenuButton open={open} controls={panelId} onToggle={() => setOpen((o) => !o)} buttonRef={buttonRef} />
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              key="menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-[calc(100dvh-6.5rem)] overflow-y-auto border-t border-border px-3 pb-4 pt-2 md:hidden"
            >
              <nav aria-label="Sections">
                <ul>
                  {links.map((item) => {
                    const isActive = active === item.id;
                    return (
                      <li key={item.id}>
                        <InkLink
                          href={item.href}
                          tone="plain"
                          onClick={(event) => {
                            setOpen(false);
                            goTo(event, item.href);
                          }}
                          aria-current={isActive ? "location" : undefined}
                          className={cn(
                            "my-0 flex w-full rounded-2xl px-3 font-serif text-[1.625rem] leading-tight transition-[background-color] duration-300",
                            isActive && "bg-muted italic"
                          )}
                        >
                          {item.label}
                        </InkLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border px-3 pt-4">
                <InkButton onClick={toggleMode} className="my-0" aria-label={themeLabel}>
                  {themeText} mode
                </InkButton>
                <PillLink href={whatsappLink} target="_blank" rel="noopener noreferrer" arrow="out">
                  Hire me
                </PillLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default SiteHeader;
