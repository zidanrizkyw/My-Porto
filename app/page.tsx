import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import StatsSection from "@/app/components/StatsSection";
import AboutSection from "@/app/components/AboutSection";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
