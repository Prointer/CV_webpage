import React from "react"

import HardSkillCard from "../components/HardSkillCard"; // Adjust path if necessary
import SoftSkillGrid from '@components/SoftSkillCard'

// Sample data for Hard Skills - replace with your actual skills and icons


const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-16 md:mb-20">
          My Skills
        </h2>

        {/* Hard Skills Subsection */}
      <div>
        <HardSkillCard />
      </div>
        {/* Placeholder for Soft Skills Subsection - to be added in Part 2 */}
        
        <div>
            <SoftSkillGrid />
        </div>
       
      </div>
    </section>
  );
};

export default Skills;
