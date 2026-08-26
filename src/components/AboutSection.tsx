import { Code2, Palette, Rocket, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable code" },
  { icon: Palette, title: "UI/UX Focus", description: "Creating beautiful user experiences" },
  { icon: Rocket, title: "Performance", description: "Optimizing for speed and efficiency" },
  { icon: Users, title: "Collaboration", description: "Working well with teams" },
];

const techStack = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Git & GitHub",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-32 px-4 relative">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 max-w-full bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`container mx-auto max-w-6xl relative z-10 motion-safe:transition-all motion-safe:duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading index="01." title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-4">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Hello! I'm a frontend developer with a keen eye for design and a love for
              creating seamless user experiences. My journey in web development started with
              HTML and CSS, and I've since grown into modern frameworks and tooling.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A lot of what I build lives in Web3 communities — trivia games, badge
              generators and small interactive tools that thousands of people actually use.
              That's where I learned to ship fast and design for people who won't read
              instructions.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              I'm currently expanding into backend development with{" "}
              <span className="text-primary-strong">Node.js, Express, and databases</span>, working
              toward building complete, production-ready applications end to end.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              {techStack.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary-strong" aria-hidden="true">
                    ▹
                  </span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <ul className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <li
                key={item.title}
                className="glass rounded-xl p-4 transition-colors duration-300 hover:border-primary/50 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 transition-colors group-hover:bg-primary/20">
                  <item.icon className="w-5 h-5 text-primary-strong" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
