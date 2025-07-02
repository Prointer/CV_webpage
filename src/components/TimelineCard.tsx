import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa"; // For expand/collapse and links
import type { TimelineCategory, TimelineItem } from "../types/timeline"; // Adjust path if needed

export interface TimelineCardProps {
  item: TimelineItem;
  categoryColor?: string; // e.g., 'border-blue-500' or 'bg-green-500' for accents
}

// Helper to format date range
const formatDateRange = (start: string, end: string): string => {
  // Basic formatting, can be enhanced (e.g., with date-fns if dates are complex)
  return `${start} - ${end}`;
};

const getCategoryAccentColor = (
  category: TimelineCategory,
  defaultColor: string = "border-gray-400 dark:border-gray-600"
) => {
  switch (category) {
    case "experience":
      return "border-sky-500 dark:border-sky-400";
    case "education":
      return "border-purple-500 dark:border-purple-400";
    case "certificates":
      return "border-green-500 dark:border-green-400";
    default:
      return defaultColor;
  }
};

const TimelineCard: React.FC<TimelineCardProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const accentColorClass = getCategoryAccentColor(item.category);

  return (
    <div
      className={`timeline-card-placeholder bg-bgbrand-light dark:bg-bgbrand-dark/70 p-5 rounded-lg shadow-md border-l-4 ${accentColorClass} mb-6`}
    >
      {/* Compact View / Header of the card */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {item.title}
          </h3>
          <p className="text-sm text-brand dark:text-brand-light font-medium">
            {item.place}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {formatDateRange(item.dateStart, item.dateEnd)}
            {item.location && (
              <span className="ml-2 inline-flex items-center">
                <FaMapMarkerAlt className="mr-1 opacity-70" />
                {item.location}
              </span>
            )}
          </p>
        </div>
        <button
          type="button"
          onClick={toggleExpand}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-brand dark:hover:text-brand-light"
          aria-expanded={isExpanded}
          aria-controls={`timeline-desc-${item.id}`}
        >
          {isExpanded ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
        </button>
      </div>

      {/* Expanded View (Conditional) - Basic implementation for now */}
      {/* Animation will be added in Phase 2 with Framer Motion */}
      {isExpanded && (
        <div
          id={`timeline-desc-${item.id}`}
          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
        >
          {typeof item.description === "string" ? (
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {item.description}
            </p>
          ) : (
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {item.description.map((descPoint, index) => (
                <li key={index}>{descPoint}</li>
              ))}
            </ul>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 text-sm text-brand dark:text-brand-light hover:underline"
            >
              Learn More <FaExternalLinkAlt className="ml-1.5 w-3 h-3" />
            </a>
          )}
          {/* Logo could be displayed here if needed */}
          {/* {item.logoUrl && <img src={item.logoUrl} alt={`${item.place} logo`} className="mt-3 h-8 w-auto" />} */}
        </div>
      )}
    </div>
  );
};

export default TimelineCard;
