import { Workflow, Code2, Globe, Users } from "lucide-react";
import Section from "./Section";

const groups = [
  {
    icon: Workflow,
    title: "ServiceNow",
    skills: [
      "ITSM",
      "Incident Management",
      "Problem Management",
      "Change Management",
      "Service Catalog",
      "Flow Designer",
      "Business Rules",
      "Client Scripts",
      "Server Scripts",
    ],
  },
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React", "Django", "Flask"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Leadership", "Communication", "Time Management"],
  },
];

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="Tools & Technologies I Use"
    subtitle="A focused stack across enterprise platforms and modern web."
  >
    <div className="grid md:grid-cols-2 gap-6">
      {groups.map(({ icon: Icon, title, skills }) => (
        <div
          key={title}
          className="relative gradient-card border border-border rounded-2xl p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant group"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <Icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-secondary-foreground border border-border transition-smooth hover:border-primary/60 hover:text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
