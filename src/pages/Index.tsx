import Navbar from "@/components/Navbar";
import InfinityBackground from "@/components/InfinityBackground";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <InfinityBackground />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
