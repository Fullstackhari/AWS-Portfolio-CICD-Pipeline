import { Github, ExternalLink, Workflow, Code2, MapPin, Star, UserCog } from "lucide-react";
import Section from "./Section";

const projects = [
  {
    featured: true,
    icon: Workflow,
    title: "ServiceNow IT Service Request Management",
    description:
      "End-to-end IT Service Request system built on ServiceNow ITSM. Implemented Service Catalog, automated approvals via Flow Designer, and used Business Rules, Client Scripts and UI Policies to streamline operations.",
    tags: [
      "ServiceNow",
      "ITSM",
      "Flow Designer",
      "Business Rules",
      "Client Scripts",
    ],
    impact: "Reduced manual work and improved request turnaround time",
    github: "https://github.com/",
  },
  {
    featured: true,
    icon: UserCog,
    title: "Automated Employee Onboarding & Offboarding System",
    description:
      "Workflow-driven ServiceNow solution that streamlines the entire employee lifecycle. Built with Service Catalog and Flow Designer to handle dynamic request forms, multi-level approvals, and automated task dispatch to IT, Facilities, and Security for account provisioning, workspace setup, and access control — with real-time tracking and stakeholder notifications.",
    tags: [
      "ServiceNow",
      "Flow Designer",
      "Service Catalog",
      "UI Policies",
      "Approvals",
      "Task Automation",
    ],
    impact:
      "Standardized onboarding/offboarding, reducing manual effort and delays across departments",
    github: "https://github.com/",
  },
  {
    icon: Code2,
    title: "Collaborative Code Sharing & Runtime Testing Platform",
    description:
      "Real-time collaborative coding platform supporting multiple programming languages, built with WebSockets and the Monaco Editor for a seamless multi-user experience.",
    tags: ["React", "WebSockets", "Monaco Editor", "Node.js"],
    impact: "Enables multiple users to code simultaneously in real time",
    github: "https://github.com/",
  },
  {
    icon: MapPin,
    title: "Shortest Path Travel Planner",
    description:
      "Flask-based web app implementing Dijkstra's Algorithm to compute the shortest travel route across multiple cities, with optimized performance.",
    tags: ["Flask", "Python", "Dijkstra", "Algorithms"],
    impact: "Optimized route calculation performance by 40%",
    github: "https://github.com/",
  },
];

const Projects = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title="Selected Work & Builds"
    subtitle="A mix of enterprise automation and full-stack engineering projects."
  >
    <div className="grid lg:grid-cols-2 gap-6">
      {projects.map((p, i) => {
        const Icon = p.icon;
        return (
          <article
            key={p.title}
            className={`group relative gradient-card border border-border rounded-2xl p-7 overflow-hidden transition-smooth hover:-translate-y-2 hover:border-primary/50 hover:shadow-elegant ${
              p.featured ? "lg:col-span-2" : ""
            }`}
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full gradient-primary opacity-0 group-hover:opacity-20 blur-3xl transition-smooth" />

            <div className="relative flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mb-1">
                      <Star size={12} /> Featured
                    </span>
                  )}
                  <h3 className="text-xl font-semibold leading-tight">{p.title}</h3>
                </div>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/60 transition-smooth"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>

            <p className="relative text-muted-foreground leading-relaxed">
              {p.description}
            </p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="relative mt-5 pt-5 border-t border-border flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Impact:</span> {p.impact}
              </p>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium inline-flex items-center gap-1 text-foreground hover:text-primary transition-smooth"
              >
                Code <ExternalLink size={14} />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  </Section>
);

export default Projects;
