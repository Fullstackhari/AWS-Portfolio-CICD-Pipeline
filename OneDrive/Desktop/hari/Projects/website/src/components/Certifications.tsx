import { BadgeCheck } from "lucide-react";
import Section from "./Section";

const certs = [
  {
    title: "ServiceNow Certified System Administrator",
    short: "CSA",
    issuer: "ServiceNow",
  },
  {
    title: "ServiceNow Certified Application Developer",
    short: "CAD",
    issuer: "ServiceNow",
  },
];

const Certifications = () => (
  <Section
    id="certifications"
    eyebrow="Certifications"
    title="Official Credentials"
  >
    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {certs.map((c) => (
        <div
          key={c.short}
          className="relative gradient-card border border-border rounded-2xl p-6 transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center font-bold text-primary-foreground text-lg shadow-glow">
              {c.short}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                <BadgeCheck size={14} /> Verified
              </div>
              <h3 className="font-semibold leading-tight mt-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{c.issuer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Certifications;
