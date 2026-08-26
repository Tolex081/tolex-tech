import ThemeControls from "@/components/ThemeControls";
import logo from "@/assets/logo.png";
import { navItems, site, whatsappLink } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Module scope keeps the reference stable across renders.
const sectionIds = navItems.map((item) => item.id);

const DesktopNav = () => {
  const scrolled = useScrolled(50);
  const active = useActiveSection(sectionIds);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
        scrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto max-w-6xl px-4" aria-label="Main">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(event) => handleClick(event, "#home")}
            className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${site.name} — home`}
          >
            <img src={logo} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          </a>

          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(event) => handleClick(event, item.href)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active === item.id
                      ? "text-primary-strong"
                      : "text-muted-foreground hover:text-primary-strong"
                  )}
                >
                  <span className="text-primary-strong font-mono text-xs mr-1">0{index + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ThemeControls />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary-strong rounded-lg text-sm font-medium transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNav;
