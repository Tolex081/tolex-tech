import { Github, Linkedin, Twitter, Mail, MessageCircle, type LucideIcon } from "lucide-react";

/** Single source of truth for identity, links and navigation. */
export const site = {
  name: "Oyewole Toluwalase",
  handle: "Tolex",
  tagline: "I build things for the web.",
  role: "Frontend Developer",
  location: "Nigeria",
  email: "oyetoludan@gmail.com",
  whatsapp: "2349037010581",
  whatsappDisplay: "+234 903 701 0581",
  /** Drop your CV at `public/resume.pdf` and this button goes live. */
  resumeUrl: "/resume.pdf",
  url: "https://tolex-tech.lovable.app",
} as const;

export const whatsappLink = `https://wa.me/${site.whatsapp}`;
export const mailtoLink = `mailto:${site.email}`;

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/Tolex081", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/toluwalase-oyewole-272177207/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/oyetoludan01", label: "Twitter" },
  { icon: MessageCircle, href: whatsappLink, label: "WhatsApp" },
  { icon: Mail, href: mailtoLink, label: "Email" },
];

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];
