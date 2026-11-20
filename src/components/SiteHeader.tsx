import { InkButton, InkLink } from "@/components/Ink";
import { useTheme } from "@/contexts/ThemeContext";
import { navItems, site, whatsappLink } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
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
 * The top edge of the sleeve: name at the left, the running order and the
 * light switch at the right. A hairline appears under it once the page moves.
 */
const SiteHeader = () => {
  const scrolled = useScrolled(24);
  const active = useActiveSection(sectionIds);
  const { mode, toggleMode } = useTheme();

  const nav = (
    <ul className="flex items-baseline gap-5 sm:gap-7">
      {links.map((item) => (
        <li key={item.id}>
          <InkLink
            href={item.href}
            onClick={(event) => onAnchor(event, item.href)}
            active={active === item.id}
            aria-current={active === item.id ? "location" : undefined}
          >
            {item.label}
          </InkLink>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background px-4 font-sans text-[0.875rem] sm:px-6 lg:px-10",
        "border-b transition-colors duration-300",
        scrolled ? "border-border" : "border-transparent"
      )}
    >
      <div className="mx-auto max-w-[78rem]">
        <div className="flex h-14 items-center justify-between gap-6">
          <InkLink
            href="#home"
            tone="plain"
            onClick={(event) => onAnchor(event, "#home")}
            className="stretch-wide text-[0.9375rem] font-normal"
            aria-label={`${site.name} — back to top`}
          >
            {site.handle}
          </InkLink>

          <nav aria-label="Main" className="hidden md:block">
            {nav}
          </nav>

          <div className="flex items-baseline gap-5 sm:gap-7">
            <InkLink href={whatsappLink} target="_blank" rel="noopener noreferrer" tone="accent">
              Hire me
            </InkLink>
            <InkButton onClick={toggleMode} aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
              {mode === "dark" ? "Light" : "Dark"}
            </InkButton>
          </div>
        </div>

        <nav aria-label="Sections" className="flex h-10 items-start md:hidden">
          {nav}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
