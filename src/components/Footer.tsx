import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

/** The sleeve's bottom credit line. */
const Footer = () => (
  <footer className="px-4 sm:px-6 lg:px-10">
    <div className="mx-auto flex max-w-[78rem] flex-col gap-6 border-t border-border py-8 font-sans text-[0.875rem] text-muted-foreground md:flex-row md:items-baseline md:justify-between">
      <p className="flex items-center gap-2.5">
        <img
          src={logo}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          decoding="async"
          className="h-5 w-5 object-contain"
        />
        <span className="inline-flex items-center gap-1.5">
          Built with <Heart className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" /><span className="sr-only">love</span> by {site.name}
        </span>
      </p>

      <SocialLinks />

      <p className="tnum">© {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
