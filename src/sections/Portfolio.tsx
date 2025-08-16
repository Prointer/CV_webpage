import React from "react"
import type { ProjectCardProps } from "../components/ProjectCard"
import ProjectCard from "../components/ProjectCard"; // Adjust path if necessary
const sampleProjects: ProjectCardProps[] = [
  {
    projectName: "Landing page Tour Agency Jaboo",
    description:
      "A responsive landing page for a fictional travel agency, built with React and vanilla JavaScript. Features a modern layout with sections like hero, destinations, and contact. Focused on clean markup, reusable components, and basic interactivity.",
    technologies: [{ name: "React" }, { name: "JS" }, { name: "Vite" }],
    screenshotUrl: "portfolio_1_tour_agency.png", // actual screenshot
    githubUrl:
      "https://github.com/Prointer/Travel-web-site/tree/main/tour-agency",
    liveUrl: "https://project-alpha.example.com",
  },
  {
    projectName: "Telegram BOT Smart-Chef",
    description:
      "A smart Telegram bot that helps users calculate daily calorie needs, create personal nutrition profiles, and generate meal plans based on their goals. Built with Node.js and a microservices architecture, the bot provides an interactive experience using inline buttons, user data persistence, and support for multiple languages.",
    technologies: [
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Express" },
      { name: "Rest API" },
      { name: "Telegraf" },
    ],
    screenshotUrl: "Portfolio_2_Telegram_bot.png", // actual screenshot
    githubUrl: "https://github.com/Prointer/tg_bot_smartcchef",
    // liveUrl: undefined, // Example without a live URL
  },
  {
    projectName: "Project Coming Soon",
    description: "This project is coming soon! Stay tuned for updates.",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "PostgreSQL" },
      { name: "API" },
    ],
    screenshotUrl: "coming_soon.png", // Replace with actual screenshot
    githubUrl: "https://github.com/yourusername/service-gamma",
    liveUrl: "https://service-gamma.example.com",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="py-16 md:py-24"
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
