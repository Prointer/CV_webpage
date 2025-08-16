import NodeIcon from "@/assets/icons/NodeJS"
import StatsSection from '@/components/StatsSection'
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
        className="
            relative flex flex-col items-center bg-transparent text-foreground
            px-2 sm:px-4 lg:px-6
            pt-[calc(var(--header-h)+10px)]
          ">
        <div
          className="
            container mx-auto grid md:grid-cols-2 items-center gap-8
            rounded-lg transition-all duration-300
            p-6 sm:p-10 md:p-14 lg:p-16
          ">
          {/* LEFT */}
          <div
            ref={textBlockRef}
            className="flex-1 text-center md:text-left mb-6 md:mb-0 md:pr-12"
          >
            {/* коробка, которая задаёт ширину всей колонки на мобилке */}
            <div className="w-full max-w-[44rem] sm:max-w-[30rem] md:max-w-[36rem] text-center md:text-left">
              <h1 className="font-bold leading-tight
                text-[clamp(28px,6vw,56px)]
                min-h-[3.2em]">
                <span>
                  Hi, I'm
                  <br />
                  {/* ——— фикс typewriter ——— */}
                  <span className="relative inline-block text-brand font-code font-extralight align-top">
                    {/* невидимый клон самой длинной фразы — резервирует ширину */}
                    <span
                      aria-hidden="true"
                      className="invisible block whitespace-nowrap"
                    >
                      Software Engineer!
                    </span>

                    {/* typewriter эффект */}
                    <span className="absolute inset-0 block whitespace-nowrap overflow-hidden">
                      <Typewriter
                        words={[
                          "Vladyslav!",
                          "Frontend Developer!",
                          "UX Designer!",
                          "Backend Developer!",
                          "Software Engineer!",
                        ]}
                        loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2500}
                      />
                    </span>
                  </span>
                </span>

                <span className="block mt-2 text-white/70 text-[clamp(16px,3.2vw,28px)] font-light w-full">
                  Focused on{" "}
                  <span className="text-brand font-bold">user experience</span>,{" "}
                  <span className="text-brand font-bold">performance</span>, and
                  maintainable frontend{" "}
                  <span className="text-brand font-bold">architecture</span>.
                </span>
              </h1>

              <p className="text-base text-[clamp(14px, 2.4vw, 20px)] text-white mb-8 max-w-prose">
                My journey from student to developer shaped how I build for
                people. <br />I use the tools best suited for the job to create
                web interfaces that feel natural, responsive, and easy to use.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <button
                  aria-label="Open contact modal"
                  onClick={onContactClick}
                  type="button"
                  className="
                    w-full sm:w-auto sm:min-w-[220px]
                    px-6 py-3
                     text-white font-semibold rounded-lg shadow-md
                    border border-gray-600 hover:border-gray-400 hover:bg-opacity-90
                    focus:outline-none focus:ring-2 focus:ring-brand
                    transition text-[clamp(14px,2.2vw,16px)]
                  "
                >
                  Contact
                </button>

                <button
                  type="button"
                  onClick={handleDowloadCV}
                  className="
                    w-full sm:w-auto sm:min-w-[220px]
                    px-6 py-3
                    bg-gray-600 border border-gray-600 hover:border-gray-400
                    text-white font-semibold rounded-lg shadow-md hover:bg-gray-700
                    focus:outline-none focus:ring-2 focus:ring-gray-500
                    transition text-[clamp(14px,2.2vw,16px)]
                  "
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT IMG */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-[560px] aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src="hero-img.png"
                alt="Profile"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

      </section>
      <StatsSection
        items={[
          { label: "Years of Experience", value: 2, suffix: "+" },
          { label: "Projects Completed", value: 17, suffix: "+" },
          { label: "Satisfied Clients", value: 95, suffix: "%" },
        ]}
/>
      <TechnologySlider technologies={technologies} />
    </>
  );
};

export default Hero;
