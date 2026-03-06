import profilePhoto from "@/assets/profile-photo.jpg";
import { Mail, Linkedin, ChevronDown, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="section-container text-center relative z-10">
        <ScrollReveal>
          {/* Infinity-inspired avatar ring */}
          <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 mb-8">
            {/* Orbiting ring */}
            <div className="absolute inset-[-8px] rounded-full border border-primary/30 animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-[-16px] rounded-full border border-primary/10 animate-[spin_20s_linear_infinite_reverse]" />
            {/* Glowing dot on orbit */}
            <div className="absolute inset-[-8px] rounded-full animate-[spin_12s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_hsl(160_70%_42%/0.8)]" />
            </div>
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/40">
              <img src={profilePhoto} alt="Pramod Yadav" className="w-full h-full object-cover" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h1 className="text-4xl sm:text-6xl font-bold font-heading mb-3 text-foreground tracking-tight">
            Pramod Yadav
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-xl sm:text-2xl text-gradient-cyan font-heading font-semibold mb-2">
            Senior DevOps Engineer
          </p>
          <p className="text-sm text-muted-foreground font-heading mb-6">
            CI/CD • Kubernetes • Terraform • Azure
          </p>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm sm:text-base mb-8">
            4.5+ years designing secure, scalable CI/CD platforms. Reducing deployment time,
            improving reliability, and automating enterprise delivery workflows across mission-critical environments.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={550}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8">
            <MapPin size={14} className="text-primary" />
            <span>Pune, India</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={650}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:pramodjyadav7@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:shadow-[0_0_25px_hsl(160_70%_42%/0.3)]"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/pramodyadav7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-all"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <a href="#skills" className="inline-block mt-12 animate-bounce text-primary/60 hover:text-primary transition-colors">
            <ChevronDown size={28} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
