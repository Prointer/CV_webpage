export interface JourneyEvent {
  id: string; // Unique identifier for each event
  title: string; // Title of the event (e.g., "Graduated from IT University")
  description: string; // A short description of the event
  date: string; // Date of the event (e.g., "2015", "March 2017")
  imageUrl?: string; // Optional URL for an image related to the event
  // Optional: Add a short version of the title or a category for display directly on the timeline if needed
  // shortTitle?: string;
}
