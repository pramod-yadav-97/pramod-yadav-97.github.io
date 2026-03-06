import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  { title: "Cloud", icon: "☁️", skills: ["Azure"] },
  { title: "CI/CD", icon: "🔄", skills: ["Azure DevOps", "GitHub Actions", "Jenkins", "GitLab CI", "Harness"] },
  { title: "IaC", icon: "🏗️", skills: ["Terraform", "Ansible"] },
  { title: "Containers", icon: "🐳", skills: ["Docker", "Kubernetes (AKS)", "Helm"] },
  { title: "Security", icon: "🔒", skills: ["SonarQube", "Kiuwan", "Veracode", "StackHawk", "Aqua Security"] },
  { title: "Monitoring", icon: "📊", skills: ["Prometheus", "Grafana", "Azure Monitor", "ELK Stack"] },
  { title: "Secrets", icon: "🔑", skills: ["Azure Key Vault", "HashiCorp Vault"] },
  { title: "Scripting", icon: "⚡", skills: ["Shell", "Python", "YAML"] },
  { title: "Registry", icon: "📦", skills: ["ACR", "Nexus", "Docker Hub"] },
  { title: "Mobile", icon: "📱", skills: ["Firebase App Distribution", "Crashlytics"] },
];

const stats = [
  { value: "4.5+", label: "Years Experience" },
  { value: "50%", label: "Deployment Time Reduced" },
  { value: "90%", label: "Build Duration Saved" },
  { value: "10+", label: "Tools Mastered" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">{"$ skills --list"}</h2>
          <p className="section-subtitle">Technologies powering the infinite DevOps loop</p>
        </ScrollReveal>

        {/* Stats row */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center hover-glow">
                <div className="text-2xl sm:text-3xl font-bold font-heading text-gradient-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 60}>
              <div className="glass-card p-5 hover-glow group cursor-default h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="font-heading text-sm text-primary font-semibold group-hover:text-gradient-cyan transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground hover:bg-primary/15 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
