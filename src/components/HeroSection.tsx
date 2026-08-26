import { useState } from "react";
import { FileText } from "lucide-react";
import avatarJpg from "@/assets/avatar.jpg";
import avatarWebp from "@/assets/avatar.webp";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";
import { scrollToSection } from "@/lib/motion";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAnchor = (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    scrollToSection(hash);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero px-4 pt-24 pb-28 md:pb-20"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary-strong font-mono text-sm md:text-base mb-4 animate-slide-up delay-100">
              Hi, my name is
            </p>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-slide-up delay-200"
            >
              {site.name}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 animate-slide-up delay-300">
              {site.tagline}
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up delay-400">
              I'm a <span className="text-primary-strong">Frontend Developer</span> moving into{" "}
              <span className="text-primary-strong">full-stack</span>, building for the web and for
              Web3 communities. Currently focused on accessible, human-centered products.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up delay-500">
              <a
                href="#projects"
                onClick={(event) => handleAnchor(event, "#projects")}
                className="px-8 py-3 bg-primary-strong text-primary-foreground rounded-lg font-medium transition-colors duration-300 hover:bg-primary-strong/90 glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View My Work
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-primary text-primary-strong rounded-lg font-medium transition-colors duration-300 hover:bg-primary-strong hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Résumé
              </a>
            </div>

            <SocialLinks
              className="justify-center lg:justify-start animate-slide-up delay-500"
              size={20}
            />
          </div>

          {/* Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 border-2 border-primary rounded-2xl translate-x-4 translate-y-4 motion-safe:transition-transform motion-safe:duration-500 ease-out ${
                  isHovered ? "rotate-0" : "-rotate-[8deg]"
                }`}
              />
              <div
                className={`relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl motion-safe:transition-transform motion-safe:duration-500 ease-out ${
                  isHovered ? "rotate-0 scale-[1.02]" : "-rotate-[8deg]"
                }`}
              >
                <picture>
                  <source srcSet={avatarWebp} type="image/webp" />
                  <img
                    src={avatarJpg}
                    alt={`${site.name}'s avatar — an illustrated character in a blue suit and bow tie`}
                    width={400}
                    height={400}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              </div>
              <div
                aria-hidden="true"
                className={`absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-50"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block"
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full motion-safe:animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
