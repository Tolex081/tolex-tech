import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import Sky from "@/components/Sky";

const Index = () => (
  <div className="relative min-h-screen">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-plate focus:px-5 focus:py-3 focus:font-sans focus:text-foreground focus:shadow-plate"
    >
      Skip to content
    </a>

    <Sky />
    <SiteHeader />

    <div className="relative z-10">
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  </div>
);

export default Index;
