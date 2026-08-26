import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";
import MobileHeader from "@/components/MobileHeader";

const Index = () => (
  <div className="min-h-screen bg-background">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary-strong focus:text-primary-foreground focus:font-medium"
    >
      Skip to content
    </a>

    <DesktopNav />
    <MobileHeader />
    <MobileNav />

    <main id="main">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
);

export default Index;
