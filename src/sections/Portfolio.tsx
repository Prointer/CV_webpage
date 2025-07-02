import React from "react";
import ProjectCard from "../components/ProjectCard"; // Adjust path if necessary
import type { ProjectCardProps } from "../components/ProjectCard";

// Sample project data - replace with your actual projects
const sampleProjects: ProjectCardProps[] = [
  {
    projectName: "Cool Project Alpha",
    description:
      "A brief description of Cool Project Alpha, highlighting its main features and purpose. Built with modern tech!",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
      { name: "Node.js" },
    ],
    screenshotUrl:
      "https://via.placeholder.com/600x400.png?text=Project+Alpha+Screenshot", // Replace with actual screenshot
    githubUrl: "https://github.com/yourusername/project-alpha",
    liveUrl: "https://project-alpha.example.com",
  },
  {
    projectName: "Awesome App Beta",
    description:
      "Awesome App Beta solves a real-world problem with an intuitive interface and robust backend.",
    technologies: [
      { name: "Vue.js" },
      { name: "Firebase" },
      { name: "JavaScript" },
    ],
    screenshotUrl:
      "https://via.placeholder.com/600x400.png?text=App+Beta+Screenshot", // Replace with actual screenshot
    githubUrl: "https://github.com/yourusername/app-beta",
    // liveUrl: undefined, // Example without a live URL
  },
  {
    projectName: "Service Gamma",
    description:
      "Service Gamma provides critical infrastructure for other services. Highly scalable and reliable.",
    technologies: [
      { name: "Go" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "gRPC" },
    ],
    screenshotUrl:
      "https://via.placeholder.com/600x400.png?text=Service+Gamma+Screenshot", // Replace with actual screenshot
    githubUrl: "https://github.com/yourusername/service-gamma",
    liveUrl: "https://service-gamma.example.com",
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-bgbrand dark:bg-bgbrand-dark"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-12 md:mb-16">
          My Portfolio
        </h2>
        {sampleProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {sampleProjects.map((project) => (
              <ProjectCard key={project.projectName} {...project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Portfolio projects will be showcased here soon!
          </p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
