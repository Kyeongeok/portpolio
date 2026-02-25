import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceTimeline from "@/components/experience-timeline";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
