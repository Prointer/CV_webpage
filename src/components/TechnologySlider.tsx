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
    "w-[48px] h-[48px] min-w-[32px] min-h-[32px] transition-transform duration-300 hover:scale-115 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]";
  return (
    <div className="w-full flex flex-col justify-center items-center py-4 gap-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">Technologies I Work With</h2>
      {/* Slider Container */}
      <div className={`relative overflow-hidden rounded-xl px-4 ${bgColor} w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] mx-auto`}>
        {/* Shadows, теперь внутри контейнера */}
        <div className={`absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r ${shadowColorFrom} to-transparent z-10`} />
        <div className={`absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l ${shadowColorFrom} to-transparent z-10`} />

        <div className="flex animate-continuous-slide gap-12 hover:[animation-play-state:paused] px-10">
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex flex-col items-center justify-center w-[60px] my-6 ">
              <div className={iconStyles}>
                {typeof tech.icon === "string" ? (
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                ) : (
                  tech.icon
                )}
              </div>
              <div className="text-center text-xs mt-2 text-gray-400 text-nowrap font-extrabold font-code">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySlider;