import type React from "react"
import { FaCrown, FaLightbulb } from "react-icons/fa"
import { MdReportProblem } from "react-icons/md"
import { RiTeamFill } from "react-icons/ri"
import { RxLapTimer } from "react-icons/rx"
import { SiMusicbrainz } from "react-icons/si"
import { PlaceholderSkillIcon } from "@components/PlaceholderSkillIcon"

export interface SoftSkill {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const softSkills: SoftSkill[] = [
  { id: "teamwork",        title: "Teamwork",         icon: <PlaceholderSkillIcon bgColor="bg-blue-500"   icon={<RiTeamFill />} /> },
  { id: "leadership",      title: "Leadership",       icon: <PlaceholderSkillIcon bgColor="bg-yellow-500" icon={<FaCrown />} /> },
  { id: "creativity",      title: "Creativity",       icon: <PlaceholderSkillIcon bgColor="bg-sky-500"    icon={<FaLightbulb />} /> },
  { id: "time-management", title: "Time Management",  icon: <PlaceholderSkillIcon bgColor="bg-green-500"  icon={<RxLapTimer />} /> },
  { id: "problem-solving", title: "Problem-Solving",  icon: <PlaceholderSkillIcon bgColor="bg-red-500"    icon={<MdReportProblem />} /> },
  { id: "adaptability",    title: "Adaptability",     icon: <PlaceholderSkillIcon bgColor="bg-indigo-500" icon={<SiMusicbrainz />} /> },
];

function SoftSkillCard({ skill }: { skill: SoftSkill }) {
  return (
    <li
      role="listitem"
      aria-label={skill.title}
      tabIndex={0}
      className="
        rounded-2xl border border-white/10 bg-white/5
        p-5 shadow-lg transition-all duration-300 ease-out
        hover:border-emerald-400/60 hover:shadow-xl
        motion-safe:hover:scale-[1.02]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60
        backdrop-blur-sm
      "
    >
      <div className="flex items-center gap-4">
        <div className="shrink-0">{skill.icon}</div>
        <p className="text-lg font-semibold text-white/90">{skill.title}</p>
      </div>
    </li>
  );
}

export default function SoftSkillsGrid() {
  return (
    <section id="soft-skills" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-emerald-400 mb-6">Soft Skills</h2>

      <ul role="list" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {softSkills.map((s) => (
          <SoftSkillCard key={s.id} skill={s} />
        ))}
      </ul>
    </section>
  );
}
