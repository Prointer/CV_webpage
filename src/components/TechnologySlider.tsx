import React from "react"

interface Technology {
  icon: string | React.ReactNode;
  name: string;
}

interface TechnologySliderProps {
  technologies: Technology[];
}

const TechnologySlider: React.FC<TechnologySliderProps> = ({ technologies }) => {
  const bgColor = "bg-[var(--bg-brand)]";
  const shadowColorFrom = "from-[var(--bg-brand)]";

  const iconStyles =
    "w-[40px] h-[40px] min-w-[20px] min-h-[20px] transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]";

  return (
    <div className={`w-full flex justify-center overflow-hidden relative py-4 ${bgColor}`}>
      {/* Left Shadow */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r ${shadowColorFrom} to-transparent z-10`}
      ></div>
      {/* Right Shadow */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l ${shadowColorFrom} to-transparent z-10`}
      ></div>

      <div className="max-w-screen-lg flex animate-continuous-slide gap-25 hover:[animation-play-state:paused]">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="flex-shrink-0">
            {typeof tech.icon === "string" ? (
              <img src={tech.icon} alt={tech.name} className={iconStyles} />
            ) : (
              <div className={iconStyles} title={tech.name}>
                {tech.icon}
                <div className="text-center text-xs mt-1 text-gray-500 py-6">
                  {tech.name}
                  </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologySlider;