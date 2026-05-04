import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 mt-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div className="text-lg font-bold gradient-text">C Harindra.</div>
        <p className="text-xs text-muted-foreground mt-1">
          © {new Date().getFullYear()} C Harindra. All rights reserved.
        </p>
      </div>
      <div className="flex items-center gap-3">
        {[
          { Icon: Github, href: "https://github.com/" },
          { Icon: Linkedin, href: "https://linkedin.com/" },
          { Icon: Mail, href: "mailto:harindracs12@gmail.com" },
        ].map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/60 transition-smooth"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
