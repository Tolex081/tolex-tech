import { Heart } from "lucide-react";
import avatarWebp from "@/assets/avatar.webp";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

/** The ground line at the foot of the sky. */
const Footer = () => (
  <footer className="px-4 sm:px-6 lg:px-10">
    <div className="mx-auto flex max-w-page flex-col gap-6 border-t border-foreground/10 py-10 text-[0.875rem] text-muted-foreground md:flex-row md:items-baseline md:justify-between">
      <p className="flex items-center gap-2.5">
        <img
          src={avatarWebp}
          alt=""
          width={24}
          height={24}
          loading="lazy"
          decoding="async"
          className="h-6 w-6 rounded-full object-cover ring-1 ring-border"
        />
        <span className="inline-flex flex-wrap items-center gap-1.5">
          Built with <Heart className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" /><span className="sr-only">love</span> by {site.name}
        </span>
      </p>

      <SocialLinks />

      <p className="tnum">© {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
