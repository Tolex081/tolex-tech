import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { InkButton, InkLink, PillLink } from "@/components/Ink";
import Sky from "@/components/Sky";
import { education, experience, moreProjects, selectedProjects, summary, bareUrl } from "@/data/resume";
import { mailtoLink, site, socialLinks, whatsappLink } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { cycleTint, tintClass, type Tint } from "@/lib/tints";
import { cn } from "@/lib/utils";

const github = socialLinks.find((s) => s.label === "GitHub")!.href;
const linkedin = socialLinks.find((s) => s.label === "LinkedIn")!.href;

const contacts = [
  { label: "Email", text: site.email, href: mailtoLink },
  { label: "WhatsApp", text: site.whatsappDisplay, href: whatsappLink },
  { label: "Portfolio", text: bareUrl(site.url), href: site.url },
  { label: "GitHub", text: bareUrl(github), href: github },
  { label: "LinkedIn", text: "linkedin.com/in/toluwalase-oyewole", href: linkedin },
];

/** The same order the skill bands take on the home page. */
const bandTints: Tint[] = ["coral", "teal", "amber", "rose", "cobalt"];

/** What I use day to day, per group; everything still being learned gathers on one line. */
const shippingSkills = skillGroups.map((group) => ({
  title: group.title,
  names: group.skills.filter((s) => s.level !== "learning").map((s) => s.name),
}));
const learning = skillGroups.flatMap((g) => g.skills.filter((s) => s.level === "learning").map((s) => s.name));

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Section headings carry their section's pigment, set by a tint class on the section. */
const Heading = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-4 border-b-2 border-tint/35 pb-2 font-serif text-[1.375rem] leading-tight text-tint print:mb-3 print:break-after-avoid">
    {children}
  </h2>
);

/** The five hours of the sky, dawn to dusk, as one fine rule under the name. */
const DayRule = () => (
  <div
    aria-hidden="true"
    className="mt-6 h-1 rounded-full bg-[linear-gradient(to_right,hsl(var(--rose)),hsl(var(--cobalt)),hsl(var(--teal)),hsl(var(--coral)),hsl(var(--amber)))] print:mt-5"
  />
);

const Bullets = ({ points }: { points: string[] }) => (
  <ul className="mt-2 space-y-1.5 text-[0.9375rem] leading-[1.55] text-muted-foreground">
    {points.map((point) => (
      <li key={point} className="relative pl-4">
        <span aria-hidden="true" className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-tint" />
        {point}
      </li>
    ))}
  </ul>
);

const EntryHead = ({
  title,
  href,
  sub,
  when,
  className,
}: {
  title: string;
  href?: string;
  sub?: string;
  when: string;
  className?: string;
}) => (
  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
    <h3 className={cn("font-sans text-[1rem] font-semibold leading-snug text-tint", className)}>
      {href ? (
        <a href={href} {...external} className="underline decoration-tint/40 underline-offset-4 hover:decoration-current">
          {title}
        </a>
      ) : (
        title
      )}
      {sub && <span className="font-normal text-muted-foreground"> · {sub}</span>}
    </h3>
    <p className="tnum text-[0.8125rem] text-faint">{when}</p>
  </div>
);

/**
 * The résumé as one sheet mounted on the sky. On screen it is a plate with
 * a small toolbar above it; in print the sky, toolbar and plate chrome fall
 * away and the sheet sets on white A4 (index.css holds the page rules).
 * It carries the site's sky pigments: a dawn-to-dusk rule under the name,
 * each section in its own hour, project titles taking turns like the plates
 * on the home page, and links in dusk violet.
 */
const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const previous = document.title;
    document.title = `Résumé — ${site.name}, ${site.role}`;
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="relative min-h-screen px-4 pb-20 pt-6 sm:px-6 lg:px-10 print:p-0">
      <div className="print:hidden">
        <Sky />
      </div>

      <div className="relative z-10 mx-auto max-w-[54rem]">
        <nav
          aria-label="Résumé"
          className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 font-sans text-[0.9375rem] print:hidden"
        >
          <InkLink
            href="/"
            tone="plain"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          >
            ← {site.handle}
          </InkLink>
          <div className="flex items-center gap-x-5">
            <InkButton onClick={() => window.print()}>Print</InkButton>
            <PillLink href={site.resumePdf} download="Oyewole-Toluwalase-Resume.pdf" arrow="right" className="px-5">
              Download PDF
            </PillLink>
          </div>
        </nav>

        <main
          id="main"
          className="rounded-plate bg-plate p-6 shadow-plate ring-1 ring-inset ring-border sm:p-10 md:p-12 print:rounded-none print:bg-transparent print:p-0 print:shadow-none print:ring-0"
        >
          <header className="tint-rose pb-1">
            <h1 className="text-[clamp(2.25rem,1.6rem+2.4vw,3.25rem)] leading-[1] tracking-[-0.02em] print:text-[2.6rem]">
              {site.name}
            </h1>
            <p className="mt-2 font-serif text-[1.375rem] italic leading-snug text-tint">
              {site.role}, {site.location}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.875rem]">
              {contacts.map((c) => (
                <li key={c.label}>
                  <span className="sr-only">{c.label}: </span>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("mailto:") ? {} : external)}
                    className="text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-current"
                  >
                    {c.text}
                  </a>
                </li>
              ))}
            </ul>
            <DayRule />
          </header>

          <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-x-10 gap-y-10 md:grid-cols-[minmax(0,1fr)_14rem] print:mt-6 print:grid-cols-[minmax(0,1fr)_12.5rem] print:gap-x-8">
            <div className="space-y-9 print:space-y-6">
              <section aria-labelledby="summary-heading">
                <h2 id="summary-heading" className="sr-only">
                  Summary
                </h2>
                <p className="text-[1.0625rem] leading-[1.6]">{summary}</p>
              </section>

              <section className="tint-cobalt">
                <Heading>Experience</Heading>
                <div className="space-y-6 print:space-y-4">
                  {experience.map((role) => (
                    <article key={role.title} className="break-inside-avoid">
                      <EntryHead title={role.title} sub={role.org} when={role.when} />
                      <Bullets points={role.points} />
                    </article>
                  ))}
                </div>
              </section>

              <section className="tint-coral">
                <Heading>Selected projects</Heading>
                <div className="space-y-5 print:space-y-3.5">
                  {selectedProjects.map(({ project, when, points }, index) => (
                    <article key={project.title} className={cn("break-inside-avoid", tintClass[cycleTint(index)])}>
                      <EntryHead title={project.title} href={project.live ?? project.github} when={when} />
                      <Bullets points={points} />
                      <p className="mt-1.5 text-[0.8125rem] text-faint">{project.tech.join(" · ")}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="tint-teal break-inside-avoid">
                <Heading>More shipped work</Heading>
                <ul className="space-y-2.5 text-[0.9375rem] leading-[1.5]">
                  {moreProjects.map(({ project, when, line }, index) => (
                    <li
                      key={project.title}
                      className={cn("grid grid-cols-[minmax(0,1fr)_auto] gap-x-4", tintClass[cycleTint(index, selectedProjects.length)])}
                    >
                      <p>
                        <a
                          href={project.live ?? project.github}
                          {...external}
                          className="font-semibold text-tint underline decoration-tint/40 underline-offset-4 hover:decoration-current"
                        >
                          {project.title}
                        </a>{" "}
                        <span className="text-muted-foreground">— {line}</span>
                      </p>
                      <p className="tnum text-[0.8125rem] text-faint">{when}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="space-y-9 print:space-y-6">
              <section className="tint-amber">
                <Heading>Skills</Heading>
                <dl className="space-y-4 text-[0.9375rem] leading-[1.5]">
                  {shippingSkills.map((group, index) => (
                    <div key={group.title} className={cn("break-inside-avoid", tintClass[bandTints[index % bandTints.length]])}>
                      <dt className="font-semibold text-tint">{group.title}</dt>
                      <dd className="text-muted-foreground">{group.names.join(", ")}</dd>
                    </div>
                  ))}
                  <div className="break-inside-avoid">
                    <dt className="font-serif italic text-faint">Learning</dt>
                    <dd className="text-muted-foreground">{learning.join(", ")}</dd>
                  </div>
                </dl>
              </section>

              <section className="tint-cobalt break-inside-avoid">
                <Heading>Education</Heading>
                <ul className="space-y-4 text-[0.9375rem] leading-[1.45]">
                  {education.map((item) => (
                    <li key={item.title}>
                      <p className="font-semibold text-tint">{item.title}</p>
                      <p className="text-muted-foreground">
                        {item.from}
                        {item.when && <span className="tnum text-faint"> · {item.when}</span>}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="tint-rose break-inside-avoid">
                <Heading>How I work</Heading>
                <Bullets
                  points={[
                    "Ship end to end, from first sketch to deployed URL.",
                    "Tests and CI before the demo, not after.",
                    "Say plainly what is live, on testnet, or still planned.",
                    "Design for people who won't read instructions.",
                  ]}
                />
              </section>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resume;
