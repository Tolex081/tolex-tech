import Section from "@/components/Section";
import { proficiencyLabels, proficiencyOrder, skillGroups, type Proficiency } from "@/data/skills";
import { cn } from "@/lib/utils";

/* Rank is ink depth: the more he uses it, the darker it prints. */
const levelInk: Record<Proficiency, string> = {
  core: "text-foreground",
  comfortable: "text-muted-foreground",
  learning: "text-faint italic font-serif",
};

const SkillsSection = () => (
  <Section id="skills" title="Skills">
    <p className="mb-10 font-sans text-[0.875rem] text-faint">
      Key:{" "}
      {proficiencyOrder.map((level, index) => (
        <span key={level}>
          <span className={levelInk[level]}>{proficiencyLabels[level]}</span>
          {index < proficiencyOrder.length - 1 && <span aria-hidden="true"> / </span>}
        </span>
      ))}
    </p>

    <div>
      {skillGroups.map((group) => (
        <div key={group.title} className="grid gap-x-8 gap-y-4 border-t border-border py-8 sm:grid-cols-9">
          <div className="sm:col-span-4">
            <h3 className="text-[1.375rem] font-normal leading-tight stretch-semi">{group.title}</h3>
            <p className="mt-2 italic text-muted-foreground">{group.blurb}</p>
          </div>

          <ul className="sm:col-span-5">
            {group.skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-baseline justify-between gap-6 border-b border-border py-2.5 font-sans text-[0.9375rem] last:border-b-0"
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
