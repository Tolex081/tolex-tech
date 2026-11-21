import Section from "@/components/Section";
import { proficiencyLabels, proficiencyOrder, skillGroups, type Proficiency } from "@/data/skills";
import { cn } from "@/lib/utils";

/*
 * Skills stay on the open sky as a ruled index: a quiet passage between the
 * About plate and the project plates. Rank is shown by how strongly each
 * band is set, from full ink to italic.
 */
const levelInk: Record<Proficiency, string> = {
  core: "text-foreground font-semibold",
  comfortable: "text-muted-foreground",
  learning: "text-faint font-serif italic text-[1rem]",
};

const SkillsSection = () => (
  <Section id="skills" title="Skills">
    <p className="-mt-6 mb-12 text-[0.9375rem] text-muted-foreground md:-mt-10">
      Key:{" "}
      {proficiencyOrder.map((level, index) => (
        <span key={level}>
          <span className={levelInk[level]}>{proficiencyLabels[level]}</span>
          {index < proficiencyOrder.length - 1 && <span aria-hidden="true"> / </span>}
        </span>
      ))}
    </p>

    <div className="grid grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-14 md:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-[1.75rem] leading-tight">{group.title}</h3>
          <p className="mt-1.5 font-serif text-[1.0625rem] italic text-muted-foreground">{group.blurb}</p>

          <ul className="mt-6 border-t border-border">
            {group.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 border-b border-border py-3 text-[0.9375rem]"
              >
                <span>{skill.name}</span>
                <span className={cn("text-[0.875rem]", levelInk[skill.level])}>
                  {proficiencyLabels[skill.level]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default SkillsSection;
