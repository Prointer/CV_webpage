import React, { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"; // Using react-icons for expand/collapse

export interface HardSkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HardSkillCard: React.FC<HardSkillCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="p-6 rounded-xl shadow-md hover:shadow-lg  transition-all duration-300 ease-in-out group flex flex-col"
      // For a more pronounced glow, you might use something like:
      // hover:shadow-[0_0_15px_5px_rgba(64,207,143,0.5)] dark:hover:shadow-[0_0_15px_5px_rgba(64,207,143,0.7)]
    >
      {/* Icon and Title */}
      <div className="flex items-center mb-4">
        <div className="mr-4 flex-shrink-0">
          {/* Icon wrapper to ensure consistent sizing if icons vary */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg p-1">
            {typeof icon === "string" ? (
              <img
                src={icon as string}
                alt={`${title} icon`}
                className="w-full h-full object-contain"
              />
            ) : (
              icon
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold  text-white">
          {title}
        </h3>
      </div>

      {/* Description Area - content revealed here */}
      <div
        id={`skill-description-${title.replace(/\s+/g, "-")}`}
        className={`overflow-hidden transition-all ease-in-out duration-500 ${
          isExpanded
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } mb-4 flex-grow`}
      >
        <div className="pt-2">
          {" "}
          {/* Add some padding when expanded */}
          <p className="text-sm text-gray-300">
            {description}
          </p>
        </div>
      </div>

      {/* Expand/Collapse Button - Placed at the bottom */}
      <button
        type="button"
        onClick={toggleExpand}
        className="mt-auto text-sm flex items-center self-start py-2 px-3 rounded-md text-brand hover:bg-brand/80 hover:text-white  transition-colors duration-200"
        aria-expanded={isExpanded}
        aria-controls={`skill-description-${title.replace(/\s+/g, "-")}`}
      >
        {isExpanded ? (
          <FaMinus className="mr-2" />
        ) : (
          <FaPlus className="mr-2" />
        )}
        {isExpanded ? "Show Less" : "Learn More"}
      </button>
    </div>
  );
};

// Placeholder Icon for sample data - replace with actual SVGs or react-icons
export const PlaceholderSkillIcon: React.FC<{ bgColor?: string, icon?:React.ReactNode }> = ({
  bgColor = "bg-brand",
  icon = "S",
}) => (
  <div
    className={`w-full h-full ${bgColor} rounded-md flex items-center justify-center text-white font-bold text-xl p-1`}
  >
    {icon}
  </div>
);

export default HardSkillCard;
