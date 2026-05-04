import { ReactNode } from "react";

interface Props {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, subtitle, children }: Props) => (
  <section id={id} className="py-24 scroll-mt-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          {title.split(" ").map((w, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="gradient-text">
                {" "}
                {w}
              </span>
            ) : (
              <span key={i}>{i === 0 ? w : ` ${w}`}</span>
            )
          )}
        </h2>
        {subtitle && (
          <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
