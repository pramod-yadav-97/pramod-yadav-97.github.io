import ScrollReveal from "./ScrollReveal";

const certifications = [
  { name: "Terraform Certified Associate", icon: "🏗️" },
  { name: "GitLab Certified CI/CD Associate", icon: "🔄" },
  { name: "Harness Certified CI Developer", icon: "⚡" },
  { name: "AWS Cloud Practitioner", icon: "☁️" },
  { name: "Smart Connected Products Award", icon: "🏆" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">{"$ certifications --all"}</h2>
          <p className="section-subtitle">Validated expertise in the DevOps ecosystem</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 80}>
              <div className="glass-card p-5 hover-glow group cursor-default flex items-center gap-4 h-full">
                <span className="text-2xl shrink-0">{cert.icon}</span>
                <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                  {cert.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
