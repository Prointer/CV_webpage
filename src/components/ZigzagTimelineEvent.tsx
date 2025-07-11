import { motion } from "framer-motion";
import React from "react";
import type { JourneyEvent } from "../types/journey";

interface ZigzagTimelineEventProps {
  event: JourneyEvent;
  alignment: "left" | "right";
  onDotClick: (id: string) => void;
  isLast: boolean;
}

const ZigzagTimelineEvent: React.FC<ZigzagTimelineEventProps> = ({
  event,
  alignment,
  onDotClick,
}) => {
  const isLeftAligned = alignment === "left";

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const dotHoverScale = 1.25;
  const dotTapScale = 0.9;

  const baseContentBoxClasses =
    "p-4 bg-bgbrand-light dark:bg-bgbrand-dark/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300";

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
        className={`
          w-full md:w-1/2 px-4
          flex flex-col
          items-center text-center
          ${
            isLeftAligned
              ? "md:items-end md:text-right"
              : "md:items-start md:text-left md:order-3"
          }
        `}
      >
        <div className={baseContentBoxClasses}>
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
            aria-label={`View details for ${event.title}`}
          >
            Подробнее
          </button>
        </div>
      </div>

      {/* Dot */}
      <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 my-4 md:my-0">
        <div
          className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 bg-gray-300 dark:bg-gray-600 ${
            isLeftAligned
              ? "right-[calc(100%+4px)] w-10"
              : "left-[calc(100%+4px)] w-10"
          }`}
        ></div>

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
