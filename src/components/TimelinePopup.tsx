import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { FaTimes } from "react-icons/fa"
import type { JourneyEvent } from "../types/journey"; // Adjust path if needed

interface TimelinePopupProps {
  event: JourneyEvent | null;
  onClose: () => void;
}

const TimelinePopup: React.FC<TimelinePopupProps> = ({ event, onClose }) => {
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (!event) {
    return null;
  }

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose} // Close on backdrop click
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="bg-bgbrand-light dark:bg-bgbrand-dark w-full max-w-lg rounded-xl shadow-2xl overflow-hidden relative"
            variants={popupVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label="Close popup"
            >
              <FaTimes size={20} />
            </button>

            {/* Image */}
            {event.imageUrl && (
              <div className="w-full h-56 sm:h-64 md:h-72 bg-gray-200 dark:bg-gray-700">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <p className="text-sm text-brand dark:text-brand-light font-semibold mb-1">
                {event.date}
              </p>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {event.title}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {event.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimelinePopup;
