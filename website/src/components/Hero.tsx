import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingText from "./TypingText";
import harindraPhoto from "@/assets/harindra.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="container grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            C Harindra
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mt-4 min-h-[3rem]">
            <TypingText
              phrases={[
                "ServiceNow Developer",
                "Full Stack Web Developer",
                "Automation Enthusiast",
              ]}
            />
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build automated IT solutions and scalable web applications —
            blending ServiceNow expertise with modern full-stack engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download size={18} /> Download Resume
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#contact">
                <Mail size={18} /> Contact
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "2+", l: "Certifications" },
              { n: "3+", l: "Projects" },
              { n: "8.63", l: "CGPA" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {s.n}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full gradient-primary blur-3xl opacity-40 animate-float" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-gradient gradient-card shadow-elegant">
              <img
                src={harindraPhoto}
                alt="C Harindra — ServiceNow and Full Stack Developer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-card animate-float z-10">
              <div className="text-xs text-muted-foreground">Certified</div>
              <div className="text-sm font-semibold">CSA + CAD</div>
            </div>
            <div
              className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-card animate-float z-10"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-xs text-muted-foreground">Stack</div>
              <div className="text-sm font-semibold">ServiceNow • React</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
