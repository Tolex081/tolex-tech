import ThemeControls from "@/components/ThemeControls";
import logo from "@/assets/logo.png";
import { site } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";
import { scrollToSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MobileHeader = () => {
  const scrolled = useScrolled(50);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden",
        scrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${site.name} — home`}
          >
            <img src={logo} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          </a>

          <ThemeControls compact />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
