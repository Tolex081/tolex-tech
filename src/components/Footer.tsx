import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

const Footer = () => (
  /* pb accounts for the floating mobile nav sitting above the fold. */
  <footer className="py-8 pb-28 md:pb-8 px-4 border-t border-border/50">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <SocialLinks variant="plain" size={18} />

        <p className="text-muted-foreground text-sm font-mono flex items-center gap-2">
          <img
            src={logo}
            alt=""
            width={28}
            height={28}
            loading="lazy"
            decoding="async"
            className="h-7 w-7 object-contain"
          />
          Built with <Heart className="w-4 h-4 text-primary-strong" aria-hidden="true" /> by {site.name}
        </p>

        <p className="text-muted-foreground text-sm font-mono">© {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
