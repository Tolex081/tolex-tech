import avatarJpg from "@/assets/avatar.jpg";
import avatarWebp from "@/assets/avatar.webp";
import { InkLink } from "@/components/Ink";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";
import { scrollToSection } from "@/lib/motion";

const [firstName, ...rest] = site.name.split(" ");
const lastName = rest.join(" ");

/**
 * The front of the sleeve: the name set wide and light as one band across
 * the page, the tagline as the record's title, a short liner note, and the
 * portrait kept small like a sleeve photograph. Credits run along the
 * bottom rule at the fold.
 */
const HeroSection = () => (
  <section id="home" aria-labelledby="hero-heading" className="px-4 pt-28 sm:px-6 md:pt-28 lg:px-10">
    <div className="mx-auto flex min-h-[calc(100svh-7rem)] max-w-[78rem] flex-col">
      <div className="flex flex-1 flex-col justify-center pb-12 md:pb-14">
        <h1
          id="hero-heading"
          className="text-[clamp(2.6rem,0.5rem+9.4vw,8.75rem)] font-light leading-[0.92] tracking-[-0.03em] stretch-wide"
        >
          <span className="block">{firstName}</span>
          <span className="block">{lastName}</span>
        </h1>

        <div className="mt-10 grid gap-y-10 md:mt-12 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="font-serif text-[clamp(1.5rem,1.1rem+1.4vw,2.375rem)] italic leading-tight">
              {site.tagline}
            </p>

            <p className="mt-5 max-w-[38rem] text-[1.125rem] leading-relaxed text-muted-foreground">
              Hi — I'm a <span className="text-foreground">Frontend Developer</span> moving into{" "}
              <span className="text-foreground">full-stack</span>, building for the web and for Web3
              communities, where thousands of people use what I ship. Currently focused on accessible,
              human-centered products.
            </p>

            <div className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-4 font-sans text-[1rem]">
              <InkLink
                href="#projects"
                tone="accent"
                arrow="right"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("#projects");
                }}
              >
                View my work
              </InkLink>
              <InkLink href={site.resumeUrl} target="_blank" rel="noopener noreferrer" tone="accent" arrow="out">
                Résumé
              </InkLink>
            </div>
          </div>

          <div className="w-36 sm:w-44 md:col-span-3 md:col-start-10 md:w-auto md:max-w-[13rem] md:justify-self-end">
            <picture>
              <source srcSet={avatarWebp} type="image/webp" />
              <img
                src={avatarJpg}
                alt={`${site.name}'s avatar — an illustrated character in a blue suit and bow tie`}
                width={400}
                height={400}
                fetchPriority="high"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-border py-5 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-sans text-[0.875rem] text-muted-foreground">
          {site.role} · {site.location}
        </p>
        <SocialLinks />
      </div>
    </div>
  </section>
);

export default HeroSection;
