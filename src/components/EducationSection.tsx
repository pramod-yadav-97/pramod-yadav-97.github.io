import { GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    degree: "Master in Computer Science",
    school: "Pratibha College, Pune, Maharashtra",
    period: "Jun 2019 - May 2021",
    cgpa: "8.98",
  },
  {
    degree: "Bachelor in Computer Science",
    school: "Modern College, Pune, Maharashtra",
    period: "Jun 2016 - May 2019",
    cgpa: "7.99",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">{"$ education --details"}</h2>
          <p className="section-subtitle">Foundation of the infinite loop</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 150}>
              <div className="glass-card p-6 hover-glow group h-full">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-foreground">{edu.degree}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{edu.school}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground font-heading">{edu.period}</span>
                  <span className="text-xs font-heading text-primary bg-primary/10 px-3 py-1.5 rounded-full font-semibold">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
