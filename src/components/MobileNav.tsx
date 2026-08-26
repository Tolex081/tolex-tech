import { Home, User, Code, Briefcase, Mail, type LucideIcon } from "lucide-react";
import { navItems } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  home: Home,
  about: User,
  skills: Code,
  projects: Briefcase,
  contact: Mail,
};

const sectionIds = navItems.map((item) => item.id);

const MobileNav = () => {
  const active = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <ul className="glass-strong rounded-full px-4 py-3 flex items-center gap-2">
        {navItems.map((item) => {
          const Icon = icons[item.id] ?? Home;
          const isActive = active === item.id;

          return (
            <li key={item.id}>
              {/* A real anchor, so it works with keyboard, middle-click and no JS. */}
              <a
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.href);
                }}
                aria-current={isActive ? "true" : undefined}
                className="flex flex-col items-center gap-1 group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300",
                    isActive ? "bg-primary/20" : "group-hover:bg-primary/10"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 transition-colors",
                      isActive ? "text-primary-strong" : "text-foreground group-hover:text-primary-strong"
                    )}
                    aria-hidden="true"
                  />
                </span>
                <span
                  className={cn(
                    "text-[9px] font-medium transition-colors",
                    isActive ? "text-primary-strong" : "text-muted-foreground group-hover:text-primary-strong"
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
