import GoogleAnalytics from "@/components/GoogleAnalytics";
import { NavHeader } from "@/components/nav-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ExperienceSection } from "@/components/experience-section";
import { FooterSection } from "@/components/footer";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics />
      <NavHeader />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
