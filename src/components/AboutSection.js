import React from "react";
import { FaRocket, FaEye, FaHandshake } from "react-icons/fa";

export default function AboutSection() {
  return (
    <div>
      {/* Hero Section (About) */}
      <section
        id="about"
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-indigo-900 text-white"
      >
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Welcome to Learniverse
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering lifelong learning through innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-indigo-900 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-sm active:scale-95">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-indigo-800 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-sm border border-indigo-700 active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              About Learniverse
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Learniverse is an innovative e-learning platform that blends technology
              with creative learning experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <div className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800/50 p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                <FaRocket className="text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide accessible, engaging, and innovative learning experiences.
              </p>
            </div>
            {/* Our Vision */}
            <div className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800/50 p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                <FaEye className="text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To transform education through creativity, technology, and community engagement.
              </p>
            </div>
            {/* Our Values */}
            <div className="flex flex-col items-center text-center bg-gray-50 dark:bg-gray-800/50 p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                <FaHandshake className="text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Values
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Innovation, inclusivity, and excellence drive every aspect of our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="relative py-16 sm:py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Join Our Community
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Connect with fellow learners and educators to transform your learning
            experience.
          </p>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg active:scale-95">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
