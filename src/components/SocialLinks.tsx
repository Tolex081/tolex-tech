import { socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  variant?: "boxed" | "plain";
  className?: string;
}

const SocialLinks = ({ size = 20, variant = "boxed", className }: Props) => (
  <ul className={cn("flex gap-4", className)}>
    {socialLinks.map((social) => (
      <li key={social.label}>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex text-muted-foreground transition-colors duration-300 hover:text-primary-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg",
            variant === "boxed" && "p-3 border border-border hover:border-primary"
          )}
          aria-label={social.label}
        >
          <social.icon size={size} aria-hidden="true" />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
