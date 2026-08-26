import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { proficiencyLabels, proficiencyOrder, skillGroups, type Proficiency } from "@/data/skills";
import { cn } from "@/lib/utils";

const levelStyles: Record<Proficiency, string> = {
  core: "bg-primary/15 text-primary-strong border-primary/40",
  comfortable: "bg-secondary text-secondary-foreground border-border",
  learning: "bg-transparent text-muted-foreground border-dashed border-border",
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 md:py-32 px-4 bg-card/30">
      <div
        ref={ref}
        className={`container mx-auto max-w-6xl motion-safe:transition-all motion-safe:duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading index="02." title="Skills" />

        {/* Legend — explains the bands instead of asserting a percentage. */}
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10 text-xs text-muted-foreground">
          {proficiencyOrder.map((level) => (
            <li key={level} className="flex items-center gap-2">
              <span
                className={cn("w-3 h-3 rounded-full border", levelStyles[level])}
                aria-hidden="true"
              />
              <span className="font-mono">{proficiencyLabels[level]}</span>
            </li>
          ))}
        </ul>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-primary/30"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                {group.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-5">{group.blurb}</p>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      className={cn(
                        "inline-block px-3 py-1.5 rounded-lg border font-mono text-xs",
                        levelStyles[skill.level]
                      )}
                    >
                      {skill.name}
                      <span className="sr-only"> — {proficiencyLabels[skill.level]}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
