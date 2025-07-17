import NodeIcon from "@/assets/icons/NodeJS"
import React, { useRef } from "react"
import { Typewriter } from "react-simple-typewriter"
import ReactIcon from "../assets/icons/ReactIcon"; // Import the React icon component
import TailwindSVG from "../assets/icons/TailwindCSS"
import TypeScriptSVG from "../assets/icons/TS"
import ViteSVG from "../assets/icons/Vite"
import TechnologySlider from "../components/TechnologySlider"; // Import the slider

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const textBlockRef = useRef<HTMLDivElement>(null);

  const handleDowloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to CV file
    link.download = "Vladyslav_Omelianenko_CV_Frontend_Developer.pdf"; // Name for the downloaded file
    link.click();
  };

  const technologies = [
    { name: "React", icon: <ReactIcon className="w-full h-full" /> }, // Pass the ReactIcon component reference
    { name: "TypeScript", icon: <TypeScriptSVG className="w-full h-full" /> },
    { name: "Tailwind CSS", icon: <TailwindSVG className="w-full h-full" /> },
    { name: "Vite", icon: <ViteSVG className="w-full h-full" /> },
    { name: "Node.js", icon: <NodeIcon className="w-full h-full" /> }, // Use the NodeIcon component
  ];

  return (
    <>
      <section
        id="hero"
        className="relative lg:min-h-screen flex flex-col items-center bg-transparent dark:bg-transparent text-foreground px-2 sm:px-4 lg:px-6 py-10 md:py-6 "
      >
        {/* <video
          autoPlay
          muted
          playsInline
          
          onEnded={() => console.log("Видео завершено")}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
        >
          <source src="/bg-hero.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video> */}
        <div className="container mx-auto flex flex-col md:flex-row items-center bg-transparent dark:bg-transparent rounded-lg shadow-lg transition-all duration-300 p-10 md:p-16 lg:p-20 ">
          {/*LEFT: Text Section */}
          <div
            ref={textBlockRef}
            className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-6 md:mb-0 md:pr-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span>
                Hi, I'm
                <br />
                <span className="text-brand font-code font-extralight whitespace-nowrap">
                  <Typewriter
                    words={[
                      "Vladyslav",
                      "Frontend Developer",
                      "UX Designer",
                      "Backend Developer",
                      "Software Engineer",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2500}
                  />
                </span>
                !
              </span>
              <span className="block text-white/70 mt-1 mb-8 text-3xl sm:text-4xl lg:text-5xl font-light">
                Focused on{" "}
                <span className="text-brand font-bold">user experience</span>,{" "}
                <span className="text-brand font-bold">performance</span>, and
                maintainable frontend{" "}
                <span className="text-brand font-bold">architecture</span>.
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white dark:text-white mb-8">
              My journey from student to developer shaped how I build for
              people. <br />I use the tools best suited for the job to create
              web interfaces that feel natural, responsive, and easy to use.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                aria-label="Open contact modal"
                onClick={onContactClick}
                type="button"
                className="px-8 py-3 bg-brand-dark text-white font-semibold rounded-lg shadow-md border-1 border-gray-600 hover:border-gray-400 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand transition duration-150"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={handleDowloadCV}
                className="px-8 py-3 bg-gray-600 border-1 border-gray-600 hover:border-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* RIGHT: IMG */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center lg:w-2/5">
            <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
              <img
                src="hero-img.png"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
        {/* {Statistics}  */}
        <div className="flex flex-row justify-between items-center w-2/5 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12 lg:mt-16">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">
              5+
            </span>
            <span className="text-sm sm:text-base lg:text-lg text-white/70">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">
              50+
            </span>
            <span className="text-sm sm:text-base lg:text-lg text-white/70">
              Projects Completed
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">
              100+
            </span>
            <span className="text-sm sm:text-base lg:text-lg text-white/70">
              Happy Clients
            </span>
          </div>
        </div>
      </section>

      <TechnologySlider technologies={technologies} />
    </>
  );
};

export default Hero;
