import React from "react";
import TimelineCard from "../components/TimelineCard"; // Adjust path if necessary
import type { TimelineItem } from "../types/timeline"; // Adjust path if necessary

// Sample Data - Replace with your actual data or fetch from a source
const experienceData: TimelineItem[] = [
  {
    id: "exp1",
    category: "experience",
    title: "Software Engineer Intern",
    place: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    dateStart: "Jun 2023",
    dateEnd: "Aug 2023",
    description: [
      "Developed new features for a flagship product using React and TypeScript.",
      "Collaborated with a team of 5 engineers in an agile environment.",
      "Contributed to bug fixing and improving application performance.",
    ],
    link: "https://techsolutions.example.com",
    logoUrl: "https://via.placeholder.com/100x40.png?text=Tech+Solutions",
  },
  {
    id: "exp2",
    category: "experience",
    title: "Junior Web Developer",
    place: "Creative Web Agency",
    location: "Remote",
    dateStart: "Jan 2022",
    dateEnd: "May 2023",
    description:
      "Built and maintained client websites using HTML, CSS, JavaScript, and WordPress. Worked directly with clients to gather requirements and provide support.",
    logoUrl: "https://via.placeholder.com/100x40.png?text=Creative+Web",
  },
];

const educationData: TimelineItem[] = [
  {
    id: "edu1",
    category: "education",
    title: "B.S. in Computer Science",
    place: "State University",
    location: "New York, NY",
    dateStart: "Sep 2018",
    dateEnd: "May 2022",
    description:
      "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management. Senior Project: Developed a full-stack web application for event management.",
    link: "https://stateuniversity.example.edu",
  },
  {
    id: "edu2",
    category: "education",
    title: "Full-Stack Web Development Bootcamp",
    place: "CodeAcademy Pro",
    location: "Online",
    dateStart: "Jun 2021",
    dateEnd: "Dec 2021",
    description:
      "Intensive program covering MERN stack (MongoDB, Express, React, Node.js), data structures, and algorithms. Completed several individual and group projects.",
  },
];

const certificatesData: TimelineItem[] = [
  {
    id: "cert1",
    category: "certificates",
    title: "Responsive Web Design",
    place: "freeCodeCamp",
    dateStart: "Completed",
    dateEnd: "Mar 2021",
    description:
      "Covered HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.",
    link: "https://www.freecodecamp.org/certification/username/responsive-web-design",
  },
  {
    id: "cert2",
    category: "certificates",
    title: "JavaScript Algorithms and Data Structures",
    place: "freeCodeCamp",
    dateStart: "Completed",
    dateEnd: "May 2021",
    description:
      "Mastered fundamental JavaScript concepts, data structures like arrays and objects, and algorithmic thinking.",
    link: "https://www.freecodecamp.org/certification/username/javascript-algorithms-and-data-structures",
  },
];

const ExperienceEducation: React.FC = () => {
  return (
    <section
      id="experience-education"
      className="py-16 md:py-24 bg-bgbrand dark:bg-bgbrand-dark"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-16 md:mb-20">
          My Journey
        </h2>

        {/* Experience Section */}
        {experienceData.length > 0 && (
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand dark:text-brand-light mb-8 text-center sm:text-left">
              Experience
            </h3>
            <div className="relative space-y-8">
              {/* Optional: A connecting line for visual flair, can be enhanced later */}
              {/* <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform sm:-translate-x-1/2"></div> */}
              {experienceData.map((item) => (
                <TimelineCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {educationData.length > 0 && (
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand dark:text-brand-light mb-8 text-center sm:text-left">
              Education
            </h3>
            <div className="relative space-y-8">
              {educationData.map((item) => (
                <TimelineCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}

        {/* Certificates Section */}
        {certificatesData.length > 0 && (
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand dark:text-brand-light mb-8 text-center sm:text-left">
              Certificates
            </h3>
            <div className="relative space-y-8">
              {certificatesData.map((item) => (
                <TimelineCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceEducation;
