import { InkLink } from "@/components/Ink";
import { socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

/** Credits-line socials: set as words, not icon tiles. */
const SocialLinks = ({ className }: Props) => (
  <ul className={cn("flex flex-wrap gap-x-6 gap-y-2 font-sans text-[0.875rem]", className)}>
    {socialLinks.map((social) => {
      const external = !social.href.startsWith("mailto:");
      return (
        <li key={social.label}>
          <InkLink
            href={social.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {social.label}
          </InkLink>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
