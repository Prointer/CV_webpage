import React from 'react';
import ZigzagTimeline from '../components/ZigzagTimeline'; // Adjust path if necessary
import journeyData from '../data/journeyEvents.json'; // Import the data
import { JourneyEvent } from '../types/journey'; // Ensure type consistency

const AboutMeTimelineSection: React.FC = () => {
  // Type assertion if needed, or ensure journeyData strictly matches JourneyEvent[]
  const events: JourneyEvent[] = journeyData as JourneyEvent[];

  return (
    <section id="about-me-timeline" className="py-16 md:py-24 bg-bgbrand-light dark:bg-bgbrand"> {/* Using lighter bg for contrast or alternate section bg */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-16 md:mb-20">
          My Personal Journey
        </h2>

        {events.length > 0 ? (
          <ZigzagTimeline events={events} />
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            My journey details will be shared here soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutMeTimelineSection;
