import React from "react"
import type { HardSkillCardProps } from "../components/HardSkillCard"
import HardSkillCard, {
  PlaceholderSkillIcon,
} from "../components/HardSkillCard"; // Adjust path if necessary

// Sample data for Hard Skills - replace with your actual skills and icons
const sampleHardSkills: HardSkillCardProps[] = [
  {
    icon: <PlaceholderSkillIcon bgColor="bg-blue-500" />, // React
    title: "React",
    description:
      "Proficient in building dynamic and responsive user interfaces with React. Experienced with hooks, context API, and component-based architecture. Used in most of my frontend projects.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-yellow-500" />, // JavaScript
    title: "JavaScript (ES6+)",
    description:
      "Strong understanding of modern JavaScript features, asynchronous programming, and DOM manipulation. Capable of writing clean, efficient, and maintainable code.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-sky-500" />, // Tailwind CSS
    title: "Tailwind CSS",
    description:
      "Skilled in utility-first CSS framework for rapidly building custom designs. Comfortable with responsive design, dark mode, and customization via tailwind.config.js.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-green-600" />, // Node.js
    title: "Node.js",
    description:
      "Experience in developing backend services and APIs using Node.js and Express. Familiar with RESTful principles and asynchronous patterns.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-red-500" />, // Git
    title: "Git & GitHub",
    description:
      "Proficient with version control using Git, including branching, merging, rebasing, and collaborating effectively through platforms like GitHub.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-indigo-500" />, // TypeScript
    title: "TypeScript",
    description:
      "Using TypeScript to enhance JavaScript projects with static typing, improving code quality, maintainability, and developer experience.",
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-bgbrand dark:bg-bgbrand-dark"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-16 md:mb-20">
          My Skills
        </h2>

        {/* Hard Skills Subsection */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-brand dark:text-brand-light mb-10 md:mb-12">
            Hard Skills
          </h3>
          {sampleHardSkills.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {sampleHardSkills.map((skill) => (
                <HardSkillCard
                  key={skill.title}
                  icon={skill.icon || <PlaceholderSkillIcon />} // Provide a default if icon is somehow undefined
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">
              Hard skills will be listed here soon.
            </p>
          )}
        </div>

        {/* Placeholder for Soft Skills Subsection - to be added in Part 2 */}
        
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-brand dark:text-brand-light mb-10 md:mb-12">
            Soft Skills
          </h3>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Soft skills coming soon...
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Skills;
