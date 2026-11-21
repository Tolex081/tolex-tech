import { InkButton, InkLink, PillLink } from "@/components/Ink";
import { useTheme } from "@/contexts/ThemeContext";
import { navItems, site, whatsappLink } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Module scope keeps the reference stable across renders.
const sectionIds = navItems.map((item) => item.id);
const links = navItems.filter((item) => item.id !== "home");

const onAnchor = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  event.preventDefault();
  scrollToSection(href);
  history.replaceState(null, "", href);
};

/**
 * A white plate floating over the sky. The section you are reading is marked
 * with a soft sky-tinted pill, so the nav always shows where you are on the
 * way down the page.
 */
const SiteHeader = () => {
  const active = useActiveSection(sectionIds);
  const { mode, toggleMode } = useTheme();

  const nav = (
    <ul className="flex items-center gap-0.5">
      {links.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <InkLink
              href={item.href}
              onClick={(event) => onAnchor(event, item.href)}
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
  );

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 font-sans text-[0.9375rem] sm:top-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-page rounded-[1.75rem] bg-plate/95 shadow-plate ring-1 ring-inset ring-border">
        <div className="flex h-[3.75rem] items-center justify-between gap-4 pl-5 pr-2">
          <InkLink
            href="#home"
            tone="plain"
            onClick={(event) => onAnchor(event, "#home")}
            className="font-serif text-[1.5rem] italic leading-none"
            aria-label={`${site.name}, back to top`}
          >
            {site.handle}
          </InkLink>

          <nav aria-label="Main" className="hidden md:block">
            {nav}
          </nav>

          <div className="flex items-center gap-4">
            <InkButton onClick={toggleMode} aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
              {mode === "dark" ? "Light" : "Dark"}
            </InkButton>
            <PillLink href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-4">
              Hire me
            </PillLink>
          </div>
        </div>

        <nav aria-label="Sections" className="flex h-12 items-center justify-center border-t border-border md:hidden">
          {nav}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
