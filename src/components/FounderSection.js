// pages/founder.js
import React from "react";

export default function FounderPage() {
  return (
    <section id="founder" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-16">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-700">
              <img
                src="/images/creators/Prashant.jpeg" // sure this image exists in your public/images folder
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 text-center md:text-left space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Meet Our Founder</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our founder's journey is one of innovation and passion. Discover the story behind Learniverse and how vision turned into reality. With a blend of creativity and determination, our leader has set a new benchmark for excellence in education and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
