
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
          <div className="relative group"> {/* Added group for potential group-hover effects on decals */}
            <div
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-4 border-brand-light relative flex items-center justify-center"
              style={{
                boxShadow: `
                  0 0 15px rgba(64, 207, 143, 0.4),
                  0 0 30px rgba(64, 207, 143, 0.3),
                  0 0 45px rgba(64, 207, 143, 0.2)
                `
              }}
            >
              {/* This div is for the actual image - replace span with <img> later */}
              <div className="w-full h-full bg-gray-700 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-300 text-lg">Your Photo</span>
              </div>
            </div>

            {/* Placeholder Decorative Decals - Simple Circles */}
            {/* Positioned relative to the new column layout, may need further adjustment */}
            <div
              className="absolute -top-5 -left-5 w-12 h-12 sm:w-14 sm:h-14 bg-brand opacity-50 rounded-full animate-pulse"
              style={{ animationDuration: '3s' }}
            ></div>
            <div
              className="absolute -bottom-5 -right-5 w-16 h-16 sm:w-20 sm:h-20 bg-brand-light opacity-40 rounded-full animate-pulse"
              style={{ animationDelay: '0.5s', animationDuration: '4s' }}
            ></div>
            <div
              className="absolute top-0 -right-8 sm:top-2 sm:-right-10 w-8 h-8 sm:w-10 sm:h-10 border-2 border-brand-dark opacity-60 rounded-full animate-ping"
              style={{ animationDuration: '2.5s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
