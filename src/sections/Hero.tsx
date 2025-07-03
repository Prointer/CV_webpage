import React from "react"
import { Typewriter } from 'react-simple-typewriter'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-bgbrand dark:bg-bgbrand-dark text-foreground px-4 sm:px-6 lg:px-8 py-10 md:py-10"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-12 md:mb-0 md:pr-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span>Hi, I'm <span className="text-brand font-extralight whitespace-nowrap">
              <Typewriter
                words={['Vladyslav','Frontend Developer', 'UX Designer', 'Backend Developer', 'Software Engineer']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={2500}
              />
            </span>!</span>
            <span className="block text-brand mt-2">
              From sketch to screen — I design and develop user-first web experiences.
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8">
            "I design and develop modern web interfaces with focus on performance, accessibility, and user experience.{" "}
            <br className="hidden md:block" />
            Using technologies like React, TypeScript, and Tailwind, I turn complex ideas into simple and elegant solutions. I value thoughtful design, clean architecture, and meaningful interactions."
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              className="px-8 py-3 bg-brand-dark text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-light transition duration-150"
            >
              Contact
            </button>
            <button
              type="button"
              className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Photo Section */}
        <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
          <div className="relative group">
            <div
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-brand-light relative flex items-center justify-center"
              style={{
                boxShadow: `
                  0 0 15px rgba(64, 207, 143, 0.4),
                  0 0 30px rgba(64, 207, 143, 0.3),
                  0 0 45px rgba(64, 207, 143, 0.2)
                `,
              }}
            >
              {/* Placeholder image */}
              <div className="w-full h-full bg-gray-700 dark:bg-gray-600 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-300 text-lg">Photo</span>
              </div>
            </div>

            {/* Decorative decals */}
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand opacity-50 rounded-full animate-pulse" style={{ animationDuration: "3s" }}></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-brand-light opacity-40 rounded-full animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "4s" }}></div>
            <div className="absolute top-0 -right-8 w-8 h-8 border-2 border-brand-dark opacity-60 rounded-full animate-ping" style={{ animationDuration: "2.5s" }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;