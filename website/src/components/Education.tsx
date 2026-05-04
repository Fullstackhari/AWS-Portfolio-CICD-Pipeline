import { GraduationCap, Trophy } from "lucide-react";
import Section from "./Section";

const education = [
  {
    degree: "B.E. Computer Science",
    org: "BITM Ballari",
    score: "CGPA: 8.63",
  },
  {
    degree: "Diploma",
    org: "Government Polytechnic Ballari",
    score: "CGPA: 8.97",
  },
];

const achievements = [
  "NCC Cadet — Completed B and C Certificates",
  "Mentored junior cadets and developed leadership skills",
];

const Education = () => (
  <Section
    id="education"
    eyebrow="Education & Achievements"
    title="Academic Background"
  >
    <div className="grid lg:grid-cols-2 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <GraduationCap className="text-primary" size={20} />
          <h3 className="text-xl font-semibold">Education</h3>
        </div>
        <div className="space-y-4">
          {education.map((e) => (
            <div
              key={e.degree}
              className="gradient-card border border-border rounded-2xl p-5 transition-smooth hover:border-primary/50"
            >
              <h4 className="font-semibold">{e.degree}</h4>
              <p className="text-sm text-muted-foreground mt-1">{e.org}</p>
              <p className="text-sm text-primary font-medium mt-2">{e.score}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-5">
          <Trophy className="text-primary" size={20} />
          <h3 className="text-xl font-semibold">Achievements</h3>
        </div>
        <div className="space-y-4">
          {achievements.map((a) => (
            <div
              key={a}
              className="gradient-card border border-border rounded-2xl p-5 transition-smooth hover:border-primary/50 flex gap-3"
            >
              <div className="w-2 h-2 rounded-full gradient-primary mt-2 shrink-0" />
              <p className="text-foreground/90">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default Education;
