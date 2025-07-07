import NodeIcon from '@/assets/icons/NodeJS'
import React, { useEffect, useRef, useState } from "react"
import { Typewriter } from 'react-simple-typewriter'
import ReactIcon from "../assets/icons/ReactIcon"; // Import the React icon component
import TailwindSVG from '../assets/icons/TailwindCSS'
import TypeScriptSVG from '../assets/icons/TS'
import ViteSVG from '../assets/icons/Vite'
import MapSrc from "../assets/Map.png"
import ProfileImg from "../assets/profile.jpg"
import TechnologySlider from "../components/TechnologySlider"; // Import the slider


const Hero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const textBlockRef = useRef<HTMLDivElement>(null)
    const [textHeight, setTextHeight] = useState<number | null>(null)

    const toggleModal = () => setIsModalOpen(!isModalOpen)

    useEffect(() => {
  if (textBlockRef.current) {
    setTextHeight(textBlockRef.current.clientHeight)
  }
}, [])

  const technologies = [
    { name: 'React', icon: <ReactIcon className='w-full h-full' /> }, // Pass the ReactIcon component reference
    { name: 'TypeScript', icon: <TypeScriptSVG className='w-full h-full' /> },
    { name: 'Tailwind CSS', icon: <TailwindSVG className='w-full h-full' /> },
    { name: 'Vite', icon: <ViteSVG className='w-full h-full' /> },
    { name: 'Node.js', icon: <NodeIcon className='w-full h-full' /> }, // Use the NodeIcon component
  ];


  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center bg-transparent dark:bg-transparent text-foreground px-2 sm:px-4 lg:px-6 py-6 md:py-6"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center bg-transparent dark:bg-transparent">
          {/*LEFT: Text Section */}
          <div ref={textBlockRef} className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-6 md:mb-0 md:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span>
                Hi, I'm<br />
                <span className="text-brand font-code font-extralight whitespace-nowrap">
                  <Typewriter
                    words={['Vladyslav', 'Frontend Developer', 'UX Designer', 'Backend Developer', 'Software Engineer']}
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
                Focused on <span className='text-brand font-bold'>user experience</span>, <span className='text-brand font-bold'>performance</span>, and maintainable frontend <span className='text-brand font-bold'>architecture</span>.
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white dark:text-white mb-8">
              My journey from student to developer shaped how I build for people. <br />I use the tools best suited for the job to create web interfaces that feel natural, responsive, and easy to use.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={toggleModal}
                type="button"
                className="px-8 py-3 bg-brand-dark text-white font-semibold rounded-lg shadow-md border-1 border-gray-600 hover:border-gray-400 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-brand transition duration-150"
              >
                Contact
              </button>
              <button
                type="button"
                className="px-8 py-3 bg-gray-600 border-1 border-gray-600 hover:border-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* RIGHT: Globe Map */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center relative" style={{ height: textHeight ? `${textHeight}px` : 'auto' }}>
            <img
              src={MapSrc}
              alt="Europe Map"
              className="h-full w-auto max-w-full rounded-xl pointer-events-none select-none object-contain"
            />

            {/* Katowice Point Button */}
            <button
              onClick={toggleModal}
              className="absolute w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse shadow"
              style={{ top: "52.5%", left: "55%" }}
              aria-label="Katowice"
            />

            {/* Modal */}
            {isModalOpen && (
              <div
                className="absolute bg-black text-white border border-brand p-4 rounded-xl shadow-xl z-50 w-64"
                style={{ top: "54%", left: "55%" }}
              >
                <img
                  src={ProfileImg}
                  alt="Vladyslav"
                  className="w-20 h-20 rounded-full border border-brand-light mx-auto mb-2"
                />
                <p className="text-center text-sm text-gray-300">Katowice, Poland</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <TechnologySlider technologies={technologies} />
    </>
  )
}

export default Hero;