import { AppWindowIcon } from '@/assets/icons/AppWindowIcon'
import type { Project } from "@/components/ProjectsGrid"
import ProjectsGrid from "@/components/ProjectsGrid"

const projects: Project[] = [
  {
    id: "resume",
    title: "Resume SPA",
    description: "Personal single‑page resume site with dark minimal theme, i18n and animated hero.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    liveUrl: "https://prointer.github.io/resume-vite/",
    repoUrl: "https://github.com/Prointer/resume-vite",
    size: "base",
		icon: <AppWindowIcon className="w-30 h-40" />, // Example icon
  },
  {
    id: "nails",
    title: "LA Studio Nails",
    description: "Landing page for beauty salon with booking via Booksy, custom grid gallery and SEO.",
    tech: ["React", "TS", "SCSS"],
    liveUrl: "https://…", // если пока нет — просто убери/оставь пустым
    repoUrl: "https://github.com/Prointer/la-studio-nails",
    size: "wide",
  },
  {
    id: "smartchef",
    title: "SmartChef Bot (MVP)",
    description: "Telegram bot microservices: user profiles, meal planner, calorie goals.",
    tech: ["Node.js", "Telegraf", "Docker", "PostgreSQL"],
    // liveUrl отсутствует — покажем красную кнопку
    repoUrl: "https://github.com/Prointer/smartchef",
    repoPrivate: false,
    size: "base",
  },
  {
    id: "weather",
    title: "Weather 7d",
    description: "Animated weekly forecast with API, tests, and themed backgrounds.",
    tech: ["React", "TypeScript", "Jest"],
    liveUrl: "https://…",
    // приватный репо — бейдж
    repoPrivate: true,
    size: "tall",
  },
];

const ProjectsSection = () => <ProjectsGrid projects={projects} className="mt-12" />;
export default ProjectsSection;