// pages/index.js
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FounderSection from "../components/FounderSection"; // New import
import Contact from "../components/Contact";


export default function HomePage() {
  return (
    <div className="relative z-0 bg-white dark:bg-gray-900 font-sans">
      <HeroSection />
      <section id="next-section">
        <AboutSection />
      </section>
      <FounderSection />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
