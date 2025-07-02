import React from "react";
import HeroPhoto from "../assets/CV_main_photo - Edited.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-bgbrand text-gray-800 dark:text-gray-200 px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-12 md:mb-0 md:pr-12">
          {/* Headline */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I'm <span className="text-brand">Vladyslav</span>!
            <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-400 mt-2">
              From sketch to screen — I design and develop user-first web
              experiences.
            </span>
          </h1>

          {/* Subheadline */}

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            I design and develop modern web interfaces with focus on
            performance, accessibility, and user experience. Using technologies
            like React, TypeScript, and Tailwind, I turn complex ideas into
            simple and elegant solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              className="px-8 py-3 bg-brand-dark text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-opacity-75 transition duration-150 ease-in-out"
            >
              Contact
            </button>
            <button
              type="button"
              className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-150 ease-in-out"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right Column: Profile Photo Area */}
        <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Photo container with glow effect moved to CSS */}
            <div className="photo-glow w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-4 border-brand-light relative flex items-center justify-center">
              <div className="w-full h-full bg-gray-700 dark:bg-gray-600 flex items-center justify-center">
                <img
                  src={HeroPhoto}
                  alt="Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
