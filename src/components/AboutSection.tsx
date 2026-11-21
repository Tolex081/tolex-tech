import Section from "@/components/Section";

const highlights = [
  { title: "Clean Code", description: "Writing maintainable, scalable code" },
  { title: "UI/UX Focus", description: "Creating beautiful user experiences" },
  { title: "Performance", description: "Optimizing for speed and efficiency" },
  { title: "Collaboration", description: "Working well with teams" },
];

const techStack = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Git & GitHub",
];

/** The story on the open sky; the specifics mounted on one plate beside it. */
const aside = (
  <div className="rounded-plate bg-plate p-6 shadow-plate ring-1 ring-inset ring-border sm:p-8">
    <p className="font-serif text-[1.1875rem] italic leading-snug text-muted-foreground">
      Here are a few technologies I've been working with recently:
    </p>
    <ul className="mt-4 grid grid-cols-2 gap-x-6 text-[0.9375rem]">
      {techStack.map((tech) => (
        <li key={tech} className="border-b border-border py-2.5">
          {tech}
        </li>
      ))}
    </ul>

    <dl className="mt-8 space-y-4">
      {highlights.map((item) => (
        <div key={item.title}>
          <dt className="text-[0.9375rem] font-semibold">{item.title}</dt>
          <dd className="text-[0.9375rem] text-muted-foreground">{item.description}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const AboutSection = () => (
  <Section id="about" title="About" aside={aside}>
    <div className="max-w-measure space-y-5 text-[1.125rem] leading-[1.7]">
      <p className="text-[1.3125rem] leading-[1.55]">
        Hello! I'm a frontend developer with a keen eye for design and a love for creating seamless
        user experiences. My journey in web development started with HTML and CSS, and I've since
        grown into modern frameworks and tooling.
      </p>
      <p className="text-muted-foreground">
        A lot of what I build lives in Web3 communities — trivia games, badge generators and small
        interactive tools that thousands of people actually use. That's where I learned to ship fast
        and design for people who won't read instructions.
      </p>
      <p className="text-muted-foreground">
        I'm currently expanding into backend development with{" "}
        <span className="text-foreground">Node.js, Express, and databases</span>, working toward
        building complete, production-ready applications end to end.
      </p>
    </div>
  </Section>
);

export default AboutSection;
