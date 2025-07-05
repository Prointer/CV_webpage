interface TechnologySliderProps {
  technologies: string[];
}

const TechnologySlider: React.FC<TechnologySliderProps> = ({ technologies }) => {
  // Define background colors for light and dark modes using CSS variables from index.css
  // Tailwind v4 typically encourages using CSS variables for theming.
  // We assume --bg-brand is defined for dark mode and you might have a light mode equivalent or use a default.
  // For simplicity, I'll use a generic approach. You might need to adjust based on your exact theme setup in index.css
  const bgColor = "bg-[var(--bg-brand)]"; // Uses the --bg-brand from your index.css
  const shadowColorFrom = "from-[var(--bg-brand)]"; // Gradient from --bg-brand

  return (
    <div className={`w-full overflow-hidden relative py-4 ${bgColor}`}>
      {/* Left Shadow */}
      <div className={`absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r ${shadowColorFrom} to-transparent z-10`}></div>
      {/* Right Shadow */}
      <div className={`absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l ${shadowColorFrom} to-transparent z-10`}></div>

      <div className="flex animate-continuous-slide"> {/* Apply the custom animation utility */}
        {technologies.map((tech, index) => (
          <span key={index} className="mx-6 md:mx-8 lg:mx-10 text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-gray-700 dark:text-gray-300">
            {tech}
          </span>
        ))}
        {/* Duplicate for seamless animation */}
        {technologies.map((tech, index) => (
          <span key={`duplicate-${index}`} className="mx-6 md:mx-8 lg:mx-10 text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-gray-700 dark:text-gray-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologySlider;
