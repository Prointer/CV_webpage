
import React from 'react'
// Placeholder for technology icons - we can replace this with actual icons later
const TechIconPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <div className="w-5 h-5 bg-gray-400 rounded-full text-white flex items-center justify-center text-xs" title={name}>
    {name.substring(0, 1)}
  </div>
);

export interface Technology {
  name: string;
  icon?: React.ReactNode; // For actual icons from react-icons or SVGs
}

export interface ProjectCardProps {
  projectName: string;
  description?: string; // Added optional short description
  technologies: Technology[];
  screenshotUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  description,
  technologies,
  screenshotUrl,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="bg-bgbrand-light dark:bg-bgbrand-dark/50 p-5 border-3 border-brand-dark dark:border-brand-light rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col h-full">
      {/* Screenshot */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <img
          src={screenshotUrl}
          alt={`${projectName} screenshot`}
          className="w-full aspect-video object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Project Name */}
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{projectName}</h3>

      {/* Optional Description */}
      {description && <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-grow">{description}</p>}

      {/* Technologies */}
      <div className="mb-4">
        {/* <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">Technologies:</p> */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center space-x-2 bg-brand/20 dark:bg-brand-dark/30 px-3 py-1 rounded-full font-code"
              title={tech.name}
            >
              {tech.icon || <TechIconPlaceholder name={tech.name} />}
              <span className="text-xs font-medium text-brand-dark dark:text-brand-light">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-auto flex flex-col sm:flex-row gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-6 py-2 bg-gray-700 dark:bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md border-1 border-gray-600 hover:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition duration-150 ease-in-out"
        >
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-6 py-2 bg-brand dark:bg-brand-dark text-white text-sm font-semibold rounded-lg shadow-md hover:bg-brand-dark dark:hover:bg-brand focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-opacity-75 transition duration-150 ease-in-out"
          >
            Live Site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
