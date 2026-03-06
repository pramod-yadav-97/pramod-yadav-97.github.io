import { Mail, Phone, Linkedin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 relative z-10">
      <div className="section-container text-center">
        <ScrollReveal>
          <h2 className="section-title">{"$ contact --reach-out"}</h2>
          <p className="section-subtitle">
            The DevOps loop never ends — let's build something together
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* Infinity divider */}
          <div className="text-4xl text-primary/30 mb-10 font-heading">∞</div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a
              href="mailto:pramodjyadav7@gmail.com"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 glass-card hover-glow text-foreground text-sm w-full sm:w-auto justify-center group"
            >
              <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
              pramodjyadav7@gmail.com
            </a>
            <a
              href="tel:+917378509665"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 glass-card hover-glow text-foreground text-sm w-full sm:w-auto justify-center group"
            >
              <Phone size={18} className="text-primary group-hover:scale-110 transition-transform" />
              +91 73785 09665
            </a>
            <a
              href="https://www.linkedin.com/in/pramodyadav7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 glass-card hover-glow text-foreground text-sm w-full sm:w-auto justify-center group"
            >
              <Linkedin size={18} className="text-primary group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={400}>
          <div className="pt-8 border-t border-border/30">
            <p className="text-xs text-muted-foreground font-heading">
              © 2026 Pramod Yadav • Built with <span className="text-primary">∞</span> passion for DevOps
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
