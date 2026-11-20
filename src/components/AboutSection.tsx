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

const AboutSection = () => (
  <Section id="about" title="About">
    <div className="max-w-measure space-y-5 text-[1.125rem] leading-[1.7]">
      <p>
        Hello! I'm a frontend developer with a keen eye for design and a love for creating seamless
        user experiences. My journey in web development started with HTML and CSS, and I've since
        grown into modern frameworks and tooling.
      </p>
      <p>
        A lot of what I build lives in Web3 communities — trivia games, badge generators and small
        interactive tools that thousands of people actually use. That's where I learned to ship fast
        and design for people who won't read instructions.
      </p>
      <p>
        I'm currently expanding into backend development with{" "}
        <em>Node.js, Express, and databases</em>, working toward building complete, production-ready
        applications end to end.
      </p>
      <p className="text-muted-foreground">Here are a few technologies I've been working with recently:</p>
    </div>

    <ul className="mt-6 grid max-w-measure grid-cols-2 gap-x-8 font-sans text-[0.9375rem]">
      {techStack.map((tech) => (
        <li key={tech} className="border-b border-border py-2.5">
          {tech}
        </li>
      ))}
    </ul>

    <dl className="mt-16 max-w-measure border-b border-border md:mt-20">
      {highlights.map((item) => (
        <div
          key={item.title}
          className="grid gap-x-6 gap-y-1 border-t border-border py-4 sm:grid-cols-[11rem_1fr] sm:items-baseline"
        >
          <dt className="font-sans text-[1rem] stretch-semi">{item.title}</dt>
          <dd className="text-muted-foreground">{item.description}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default AboutSection;
