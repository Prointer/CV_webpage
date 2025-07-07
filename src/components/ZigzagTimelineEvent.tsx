import { motion } from "framer-motion"
import React from "react"
import type { JourneyEvent } from "../types/journey"

interface ZigzagTimelineEventProps {
  event: JourneyEvent;
  alignment: "left" | "right"; // only "left" or "right"
  onDotClick: (id: string) => void;
  isLast: boolean;
}

const ZigzagTimelineEvent: React.FC<ZigzagTimelineEventProps> = ({
  event,
  alignment,
  onDotClick,
  isLast,
}) => {
  const isLeftAligned = alignment === "left";

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  const dotHoverScale = 1.25;
  const dotTapScale = 0.9;

  // Base classes for the content box
  const baseContentBoxClasses =
    "p-4 bg-bgbrand-light dark:bg-bgbrand-dark/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300";

  if (isCenterAligned) {
    // STACKED LAYOUT for small screens
    return (
      <motion.div
        className="relative w-full flex flex-col items-center mb-8" // mb-8 for spacing when stacked
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of item is visible
        variants={itemVariants}
      >
        {/* Dot */}
        <div className="relative z-10">
          <motion.button
            onClick={() => onDotClick(event.id)}
            className="w-6 h-6 bg-brand dark:bg-brand-light rounded-full border-2 border-bgbrand dark:border-bgbrand-light shadow-md flex items-center justify-center"
            whileHover={{ scale: dotHoverScale }}
            whileTap={{ scale: dotTapScale }}
            aria-label={`Open details for ${event.title}`}
          >
            {/* Optional: Inner smaller dot or icon */}
            <div className="w-2.5 h-2.5 bg-bgbrand dark:bg-bgbrand-light rounded-full"></div>
          </motion.button>
        </div>

        {/* Vertical Connector Line (short segment for stacked view) */}
        {!isLast && (
          <div className="w-1 h-8 bg-gray-300 dark:bg-gray-700"></div>
        )}

        {/* Content Block - Centered below dot */}
        {/* Ensuring text-center is effective here */}
        <div className={`mt-4 w-full max-w-md ${baseContentBoxClasses} text-center`}> {/* Added text-center to the box itself */}
          <p className="text-sm font-semibold text-brand dark:text-brand-light mb-1"> {/* Removed text-center, will inherit */}
            {event.date}
          </p>
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2"> {/* Removed text-center, will inherit */}
            {event.title}
          </h4>
          <button
            onClick={() => onDotClick(event.id)}
            className="block mx-auto text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2"
            aria-label={`View details for ${event.title}`}
          >
            Details
          </button>
        </div>
      </motion.div>
    );
  }


  return (
    <motion.div
      className="relative w-full flex flex-col items-center md:flex-row md:mb-0 mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >
      {/* Content */}
      <div

        className={`w-1/2 ${
          isLeftAligned ? "pr-10" : "pl-10 order-3" // Removed text-align from here
        }`}
      >
        {/* Apply text alignment to the inner content box */}
        <div className={`${baseContentBoxClasses} ${isLeftAligned ? "text-right" : "text-left"}`}>

          <p className="text-sm font-semibold text-brand dark:text-brand-light mb-1">
            {event.date}
          </p>
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
            {event.title}
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {event.description.slice(0, 100)}...
          </p>
          <button
            type="button"
            onClick={() => onDotClick(event.id)}

            className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1"
            // Button alignment will follow text flow. If specific button positioning is needed,
            // it might require additional classes like float or flex justification on a wrapper.
            aria-label={`View details for ${event.title}`}

          >
            Подробнее
          </button>
        </div>
      </div>

      {/* Dot */}
      <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 my-4 md:my-0">
        {/* Connector line */}
        <div
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-300 dark:bg-gray-600
            ${
              isLeftAligned
                ? "right-[calc(100%+4px)] w-10"
                : "left-[calc(100%+4px)] w-10"
            }`}
        ></div>

        {/* Dot Button */}
        <motion.button
          onClick={() => onDotClick(event.id)}
          className="w-6 h-6 bg-brand dark:bg-brand-light rounded-full border-2 border-bgbrand dark:border-bgbrand-light shadow-md flex items-center justify-center"
          whileHover={{ scale: dotHoverScale }}
          whileTap={{ scale: dotTapScale }}
          aria-label={`Open details for ${event.title}`}
        >
          <div className="w-2.5 h-2.5 bg-bgbrand dark:bg-bgbrand-light rounded-full"></div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ZigzagTimelineEvent;