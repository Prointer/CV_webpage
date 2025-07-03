import { motion } from "framer-motion";
import React from "react";
import type { JourneyEvent } from "../types/journey"; // Adjust path if needed

interface ZigzagTimelineEventProps {
  event: JourneyEvent;
  alignment: "left" | "right";
  onDotClick: (eventId: string) => void;
  isLast?: boolean; // Optional: to adjust line drawing for the last item
}

const ZigzagTimelineEvent: React.FC<ZigzagTimelineEventProps> = ({
  event,
  alignment,
  onDotClick,
  isLast,
}) => {
  // Variants for Framer Motion
  const isLeftAligned = alignment === "left";
  const isCenterAligned = alignment === "center"; // For small screens

  // Variants for Framer Motion
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start further down and fade in
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    }, // cubic-bezier for easeOut
  };

  const dotHoverScale = 1.25;
  const dotTapScale = 0.9;

  // Common classes for the content box
  const contentBoxClasses =
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
        <div className={`mt-4 w-full max-w-md ${contentBoxClasses}`}>
          <p className="text-sm font-semibold text-brand dark:text-brand-light mb-1 text-center">
            {event.date}
          </p>
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 text-center">
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

  // ZIGZAG LAYOUT for larger screens
  return (
    <motion.div
      className="relative w-full flex mb-0" // No margin-bottom for zigzag, parent handles spacing
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
    >
      {/* Content Block (Left or Right) */}
      <div
        className={`w-1/2 ${
          isLeftAligned ? "pr-10 text-right" : "pl-10 text-left order-3"
        }`}
      >
        <div className={contentBoxClasses}>
          <p className="text-sm font-semibold text-brand dark:text-brand-light mb-1">
            {event.date}
          </p>
          <h4 className="text-md font-bold text-gray-800 dark:text-white mb-1">
            {event.title}
          </h4>
          <button
            type="button"
            onClick={() => onDotClick(event.id)}
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1"
            aria-label={`View details for ${event.title}`}
          >
            Details
          </button>
        </div>
      </div>

      {/* Central Line Element (Dot and Horizontal Connector) */}
      {/* This div ensures the dot is in the middle of the overall component width */}
      <div
        className={`w-0 relative flex-shrink-0 ${
          isLeftAligned ? "order-2" : "order-2"
        }`}
      >
        {/* This container is for placing the dot exactly in the middle of the screen using absolute positioning from parent */}
      </div>

      {/* Dot - Now positioned absolutely relative to the main container's center line */}
      {/* The actual central vertical line will be drawn by the parent ZigzagTimeline.tsx */}
      {/* This dot is placed at the horizontal midpoint. */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${
          isLeftAligned
            ? "md:left-[calc(50%_-_2.5rem)]"
            : "md:left-[calc(50%_+_2.5rem)]"
        } `}
      >
        {/* Horizontal Connector Line from dot to content (simplified) */}
        {/* This line visually connects the dot to its content block. */}
        {/* The exact calculation for width might need adjustment based on final styling. */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-300 dark:bg-gray-600
                        ${
                          isLeftAligned
                            ? "right-[calc(100%_+_4px)] w-10"
                            : "left-[calc(100%_+_4px)] w-10"
                        }`}
          // The w-10 is arbitrary, it should visually connect.
        ></div>
        <motion.button
          onClick={() => onDotClick(event.id)}
          className="w-6 h-6 bg-brand dark:bg-brand-light rounded-full border-2 border-bgbrand-light dark:border-bgbrand-dark shadow-md flex items-center justify-center"
          whileHover={{ scale: dotHoverScale }}
          whileTap={{ scale: dotTapScale }}
          aria-label={`Open details for ${event.title}`}
        >
          <div className="w-2.5 h-2.5 bg-bgbrand-light dark:bg-bgbrand-dark rounded-full"></div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ZigzagTimelineEvent;
