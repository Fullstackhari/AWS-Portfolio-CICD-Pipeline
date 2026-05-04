import { GraduationCap, Code2, Workflow, Award } from "lucide-react";
import Section from "./Section";

const items = [
  { icon: GraduationCap, title: "Final-Year CS Student", desc: "B.E. Computer Science at BITM Ballari" },
  { icon: Workflow, title: "ServiceNow Developer", desc: "ITSM, workflow automation & scripting" },
  { icon: Code2, title: "Full Stack Developer", desc: "React, Django, Flask, Python" },
  { icon: Award, title: "Certified", desc: "ServiceNow CSA & CAD certified" },
];

const About = () => (
  <Section id="about" eyebrow="About Me" title="Crafting solutions that matter">
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
      <div className="gradient-card border border-border rounded-2xl p-8 shadow-card">
        <p className="text-muted-foreground leading-relaxed text-lg">
          I'm a final-year Computer Science student with strong expertise in{" "}
          <span className="text-foreground font-medium">ServiceNow</span> —
          covering ITSM, workflow automation, and scripting. Alongside, I build
          modern web applications using{" "}
          <span className="text-foreground font-medium">React, Django and Flask</span>.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mt-4">
          I'm a certified{" "}
          <span className="text-foreground font-medium">
            ServiceNow CSA and CAD
          </span>
          , and I'm passionate about engineering solutions that genuinely
          improve business processes and elevate user experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="gradient-card border border-border rounded-2xl p-5 transition-smooth hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40"
          >
            <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center mb-3 shadow-glow">
              <Icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
