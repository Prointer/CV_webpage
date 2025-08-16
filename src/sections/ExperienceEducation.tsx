import React from "react"
import TimelineCard from "../components/TimelineCard"
import type { TimelineItem } from "../types/timeline"
// Sample Data - Replace with your actual data or fetch from a source
const experienceData: TimelineItem[] = [
  {
    id: "exp1",
    category: "experience",
    title: "Front-end developer Intern",
    place: "YadroSoft UA",
    location: "Kyiv, Ukraine",
    dateStart: "July 2018",
    dateEnd: "December 2018",
    description: [
      "Developed new features for a flagship product using JS and HTML, CSS.",
      "Collaborated with a team of 5 engineers in an agile environment.",
      "Contributed to bug fixing and improving application performance.",
    ],
    link: "https://techsolutions.example.com",
    logoUrl: "https://via.placeholder.com/100x40.png?text=Tech+Solutions",
  },
  {
    id: "exp2",
    category: "experience",
    title: "Junior React Developer",
    place: "CodeNest Poland",
    location: "Remote",
    dateStart: "February 2024",
    dateEnd: "May 2024",
    description:
      "Built and maintained client websites using React, TailwindCSS, and Node,js. Worked directly with clients to gather requirements and provide support.",
    logoUrl: "logo_CodeNest.png",
  },
];

const educationData: TimelineItem[] = [
  {
    id: "edu1",
    category: "education",
    title: "Bachelor of Computer Science",
    place: "Akademia WSB in Dąbrowa Górnicza",
    location: "Dąbrowa Górnicza, PL",
    dateStart: "September 2014",
    dateEnd: "March 2019",
    description:
      "Coursework included Data Structures, Algorithms, Web Development, and Database Management. Final project: a third-person Unity game featuring AI-driven enemies and basic combat mechanics.",
    link: "https://wsb.edu.pl/",
  },
  {
    id: "edu2",
    category: "education",
    title: "Master of Computer Science",
    place: "Wyższa Szkoła Kształcenia Zawodowego | WSKZ",
    location: "Wroclaw, PL",
    dateStart: "September 2024",
    dateEnd: "Present",
    description:
      "Studying advanced software development with emphasis on MERN stack technologies, system design, and algorithmic thinking. Engaged in practical projects simulating real-world applications.",
  },
  {
    id: "edu3",
    category: "education",
    title: "Postgraduate Studies: Front-end Developer",
    place: "Wyższa Szkoła Kształcenia Zawodowego | WSKZ",
    location: "Wroclaw, PL",
    dateStart: "March 2023",
    dateEnd: "March 2024",
    description:
      "This program provided me with a comprehensive understanding of front-end development, including advanced JavaScript, React, and modern web technologies. It was instrumental in my transition to a full-time front-end developer role.",
  },
  {
    id: "edu4",
    category: "education",
    title: "Postgraduate Studies: Agile – Management in Organizations",
    place: "Wyższa Szkoła Kształcenia Zawodowego | WSKZ",
    location: "Wroclaw, PL",
    dateStart: "April 2025",
    dateEnd: "Present",
    description:
      "This program focuses on Agile methodologies and their application in organizational management, enhancing my skills in project management and team leadership.",
  },
];

const certificatesData: TimelineItem[] = [
  {
    id: "cert1",
    category: "certificates",
    title: "Course of ReactJS Developer",
    place: "ItGid",
    dateStart: "Completed",
    dateEnd: "March 2023",
    description:
      "During this course, I gained a deep understanding of the fundamentals of React — from creating components and managing state to routing and data management. This was a key step in my transition to modern front-end development.",
    link: "https://www.itgid.info/ua/course/reactjs",
  },
  {
    id: "cert2",
    category: "certificates",
    title: "Course of Agile Scrum Master",
    place: "Promity Academy",
    dateStart: "Completed",
    dateEnd: "April 2022",
    description:
      "Gained foundational knowledge necessary for working as a Scrum Master in Agile methodology, including Scrum terminology, roles, Scrum reporting, and risk management.",
    link: "/certificates/Certificate_Scrum.pdf",
  },
  {
    id: "cert3",
    category: "certificates",
    title: "Course of JavaScript 2.0",
    place: "ItGid",
    dateStart: "Completed",
    dateEnd: "October 2021",
    description:
      "In this course, I studied the basics of JavaScript, including ES6 and asynchronous programming, which gave me a solid foundation for further growth as a frontend developer.",
    link: "/certificates/Certificate JS2.0.pdf",
  },
  {
    id: "cert4",
    category: "certificates",
    title: "Course Node.js",
    place: "ItGid",
    dateStart: "Completed",
    dateEnd: "October 2024",
    description:
      "In this course, I learned the basics of Node.js, including working with Express.js and mySQL, which allowed me to create full-stack applications and understand server-side development.",
    link: "https://www.itgid.info/ua/course/nodejs-2024",
  },
  
];

const ExperienceEducation: React.FC = () => {
  return (
    <section
      id="experience-education"
      className="py-16 md:py-24 glass rounded-xl"
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
