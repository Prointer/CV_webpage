import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { JourneyEvent } from '../types/journey'; // Adjust path if needed
import ZigzagTimelineEvent from './ZigzagTimelineEvent'; // Adjust path if needed
import TimelinePopup from './TimelinePopup'; // Adjust path if needed

interface ZigzagTimelineProps {
  events: JourneyEvent[];
}

const ZigzagTimeline: React.FC<ZigzagTimelineProps> = ({ events }) => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleDotClick = (eventId: string) => {
    setSelectedEventId(eventId);
  };

  const handleClosePopup = () => {
    setSelectedEventId(null);
  };

  const selectedEvent = events.find(event => event.id === selectedEventId) || null;

  // Check for small screen size for responsive layout
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation for child items
      },
    },
  };

  // Item variants for ZigzagTimelineEvent will be passed down or handled by whileInView in that component
  // For this parent, we just need to ensure it's visible to trigger children.

  return (
    <div className="relative py-8">
      {/* Central Vertical Line - only visible on larger screens for zigzag */}
      {!isSmallScreen && (
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"></div>
      )}

      <motion.div
        className="space-y-12 md:space-y-0" // No space between items on md+ for zigzag connectors to look right
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Or use whileInView for triggering when it scrolls into view
      >
        {events.map((event, index) => (
          <ZigzagTimelineEvent
            key={event.id}
            event={event}
            alignment={isSmallScreen ? 'center' : (index % 2 === 0 ? 'left' : 'right')}
            onDotClick={handleDotClick}
            isLast={index === events.length - 1}
          />
        ))}
      </motion.div>

      <TimelinePopup event={selectedEvent} onClose={handleClosePopup} />
    </div>
  );
};

export default ZigzagTimeline;
