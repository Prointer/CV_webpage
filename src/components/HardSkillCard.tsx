import React, { useState } from "react"
import { BiLogoTypescript } from 'react-icons/bi'
import { FaGithubSquare, FaJsSquare, FaMinus, FaNodeJs, FaPlus, FaReact } from "react-icons/fa"; // Using react-icons for expand/collapse

import { PlaceholderSkillIcon } from "@components/PlaceholderSkillIcon"; // Adjust path if necessary
import { RiTailwindCssFill } from 'react-icons/ri'

export interface HardSkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const HardSkills: HardSkillCardProps[] = [
  {
    icon: <PlaceholderSkillIcon bgColor="bg-blue-500" icon={<FaReact/>} />, // React
    title: "React",
    description:
      "Proficient in building dynamic and responsive user interfaces with React. Experienced with hooks, context API, and component-based architecture. Used in most of my frontend projects.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-yellow-500" icon={<FaJsSquare/>} />, // JavaScript
    title: "JavaScript (ES6+)",
    description:
      "Strong understanding of modern JavaScript features, asynchronous programming, and DOM manipulation. Capable of writing clean, efficient, and maintainable code.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-sky-500" icon={<RiTailwindCssFill/>} />, // Tailwind CSS
    title: "Tailwind CSS",
    description:
      "Skilled in utility-first CSS framework for rapidly building custom designs. Comfortable with responsive design, dark mode, and customization via tailwind.config.js.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-green-600" icon={<FaNodeJs/>} />, // Node.js
    title: "Node.js",
    description:
      "Experience in developing backend services and APIs using Node.js and Express. Familiar with RESTful principles and asynchronous patterns.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-red-500" icon={<FaGithubSquare/>} />, // Git
    title: "Git & GitHub",
    description:
      "Proficient with version control using Git, including branching, merging, rebasing, and collaborating effectively through platforms like GitHub.",
  },
  {
    icon: <PlaceholderSkillIcon bgColor="bg-indigo-500" icon={<BiLogoTypescript/>}/>, // TypeScript
    title: "TypeScript",
    description:
      "Using TypeScript to enhance JavaScript projects with static typing, improving code quality, maintainability, and developer experience.",
  },
];
function HardSkillCard({ skill }: { skill: HardSkillCardProps }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const slug = (s: string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
  const descId = `skill-description-${slug(skill.title)}`;

  return (
    <li
      role="listitem"
      aria-label={skill.title}
      tabIndex={0}
      className="
        glass rounded-2xl border border-white/10 bg-white/5
        p-6 shadow-lg transition-all duration-300 ease-out
        hover:border-emerald-400/60 hover:shadow-xl
        motion-safe:hover:scale-[1.02]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60
        backdrop-blur-sm
        h-full flex flex-col
      "
    >
      <div className="flex items-center mb-4 gap-4">
        <div className="shrink-0">
          {/* PlaceholderSkillIcon уже даёт размер/фон — дополнительных w-12/h-12 не нужно */}
          {skill.icon}
        </div>
        <h3 className="text-xl font-bold text-white">{skill.title}</h3>
      </div>

      <div
        id={descId}
        aria-hidden={!isExpanded}
        className={`overflow-hidden transition-all ease-in-out duration-500 ${
          isExpanded ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } mb-4`}
      >
        <p className="text-sm text-gray-300">{skill.description}</p>
      </div>

      <button
        type="button"
        onClick={() => setIsExpanded(v => !v)}
        className="mt-auto text-sm flex items-center self-start py-2 px-3 rounded-md text-brand hover:bg-brand/80 hover:text-white transition-colors duration-200"
        aria-expanded={isExpanded}
        aria-controls={descId}
      >
        {isExpanded ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />}
        {isExpanded ? "Show Less" : "Learn More"}
      </button>
    </li>
  );
}

export default function HardSkillsGrid() {
  return (
    <section id="hard-skills" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-emerald-400 mb-6">Hard Skills</h2>

      <ul role="list" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {HardSkills.map((s) => (
          <HardSkillCard key={s.title} skill={s} />
        ))}
      </ul>
    </section>
  );
}
