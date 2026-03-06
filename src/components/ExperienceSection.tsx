import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    company: "Accenture",
    role: "Senior DevOps Engineer",
    period: "Nov 2024 - Present",
    project: "Metrolinx",
    points: [
      "Designed CI/CD pipelines across Dev → Prod using Azure DevOps, reducing deployment time by 50%.",
      "Led migration from Azure DevOps to GitHub Enterprise with centralized security governance.",
      "Built containerized apps with Docker, deployed to AKS using Helm with multi-environment support.",
      "Implemented DevSecOps framework integrating Veracode, StackHawk and AquaSec.",
      "Automated iOS build and release with Firebase App Distribution and Crashlytics.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "DevOps Engineer",
    period: "Sept 2021 - Nov 2024",
    project: "Multiple Client Projects",
    points: [
      "Automated DevOps tools installation using Shell scripting, reducing manual setup effort.",
      "Built CI/CD pipelines using Jenkins and Harness with Aqua Trivy for container scanning.",
      "Leveraged Harness AI features reducing build duration by up to 90%.",
      "Implemented SAML-based SSO between Active Directory and Jenkins.",
      "Client projects: Telefonica (GitLab CI), Lonza (Bitbucket/Jenkins setup).",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative z-10">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">{"$ experience --verbose"}</h2>
          <p className="section-subtitle">The continuous delivery journey</p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 150}>
                <div className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] sm:left-[19px] top-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(160_70%_42%/0.5)] hidden sm:block" />

                  <div className="glass-card p-6 sm:p-8 hover-glow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={18} className="text-primary" />
                          <h3 className="font-heading text-lg font-bold text-foreground">{exp.company}</h3>
                        </div>
                        <p className="text-primary text-sm font-semibold">{exp.role}</p>
                        <p className="text-muted-foreground text-xs mt-1">Project: {exp.project}</p>
                      </div>
                      <span className="text-xs text-muted-foreground font-heading bg-secondary/80 px-3 py-1.5 rounded-full self-start whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2.5">
                          <span className="text-primary mt-0.5 shrink-0">∞</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
