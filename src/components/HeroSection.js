import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import CTAButton from "./CTAButton";
import { FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = ["Learniverse", "Knowledge", "Innovation"];

  // Smooth scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] pt-32 pb-16 sm:pt-40 sm:pb-24 text-white flex items-center justify-center text-center">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-base sm:text-lg font-medium italic text-indigo-200 mb-6 sm:mb-8">
          "The beautiful thing about learning is that nobody can take it away from you."
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 sm:mb-8 tracking-tight">
          Unlock Your Potential
          <br className="hidden sm:block" />
          {" "}with{" "}
          <span className="text-yellow-400">
            {mounted && <AnimatedText words={words} />}
          </span>{" "}
          🚀
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          Education is a journey of continuous growth and discovery. Join us to explore knowledge, skills, and innovative learning experiences!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <CTAButton
            href="https://youtube.com/@itechworldxrt?si=k9xn3yAjoXG_DgDM"
            target="_blank"
            variant="primary"
            className="w-full sm:w-auto"
          >
            🎥 Watch Now
          </CTAButton>
          <CTAButton href="#courses" variant="secondary" className="w-full sm:w-auto">
            📚 Explore Courses
          </CTAButton>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-50"
          onClick={scrollToNextSection}
        >
          <FaChevronDown className="animate-bounce text-white text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
