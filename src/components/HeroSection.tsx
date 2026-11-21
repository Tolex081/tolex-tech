import avatarJpg from "@/assets/avatar.jpg";
import avatarWebp from "@/assets/avatar.webp";
import { InkLink, PillLink } from "@/components/Ink";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";
import { scrollToSection } from "@/lib/motion";

const [firstName, ...rest] = site.name.split(" ");
const lastName = rest.join(" ");

/**
 * High clear air: the name large in Bodoni, the second line in its italic,
 * the tagline and intro beneath, and the portrait mounted as the first plate
 * with its caption. The About plate rises into view at the foot of the fold.
 */
const HeroSection = () => (
  <section id="home" aria-labelledby="hero-heading" className="px-4 pt-40 sm:px-6 md:pt-32 lg:px-10">
    <div className="mx-auto max-w-page">
      <div className="grid items-center gap-x-10 gap-y-14 pb-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <h1
            id="hero-heading"
            className="text-[clamp(3rem,1.2rem+6.4vw,6rem)] leading-[0.94] tracking-[-0.025em]"
          >
            <span className="block">{firstName}</span>
            <span className="block italic">{lastName}</span>
          </h1>

          <p className="mt-7 font-serif text-[clamp(1.625rem,1.2rem+1.2vw,2.25rem)] italic leading-tight">
            {site.tagline}
          </p>

          <p className="mt-4 max-w-[40rem] text-[1.125rem] leading-relaxed text-muted-foreground">
            Hi — I'm a <span className="text-foreground">Frontend Developer</span> moving into{" "}
            <span className="text-foreground">full-stack</span>, building for the web and for Web3
            communities, where thousands of people use what I ship. Currently focused on accessible,
            human-centered products.
          </p>

          <p className="mt-6 flex items-center gap-2.5 text-[0.9375rem] text-muted-foreground">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
            <span>
              Now learning <span className="text-foreground">Node.js, Express and databases</span>
            </span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <PillLink
              href="#projects"
              arrow="right"
              className="min-h-12 px-6 text-[1rem]"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#projects");
              }}
            >
              View my work
            </PillLink>
            <InkLink href={site.resumeUrl} target="_blank" rel="noopener noreferrer" tone="plain" arrow="out">
              Résumé
            </InkLink>
          </div>

          <SocialLinks className="mt-9" />
        </div>

        <figure className="w-48 justify-self-start rounded-plate bg-plate p-2.5 shadow-plate ring-1 ring-inset ring-border sm:w-56 md:col-span-4 md:w-full md:max-w-[17rem] md:justify-self-end">
          <picture>
            <source srcSet={avatarWebp} type="image/webp" />
            <img
              src={avatarJpg}
              alt={`${site.name}'s avatar — an illustrated character in a blue suit and bow tie`}
              width={400}
              height={400}
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full rounded-[0.875rem] object-cover"
            />
          </picture>
          <figcaption className="px-1.5 pb-1 pt-3 font-serif text-[1.0625rem] italic leading-snug text-muted-foreground">
            {site.role}, {site.location}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default HeroSection;
