import { AppWindowIcon } from '@/assets/icons/AppWindowIcon'
import { IconAPIv2 } from '@/assets/icons/IconAPIv2'
import { Telegram } from '@/assets/icons/TelegramIcon'
import type { Project } from '@/components/ProjectsGrid'
import ProjectsGrid from '@/components/ProjectsGrid'

const projects: Project[] = [
	{
		id: 'resume',
		title: 'Resume SPA',
		description: 'projects.cards.resume.description',
		tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
		liveUrl: 'https://prointer.github.io/resume-vite/',
		repoUrl: 'https://github.com/Prointer/resume-vite',
		size: 'base',
		icon: <AppWindowIcon className='w-30 h-40' />,
	},
	{
		id: 'nails',
		title: 'LA Studio Nails',
		description: 'projects.cards.nails.description',
		tech: ['React', 'TS', 'SCSS'],
		liveUrl: 'https://…', // если пока нет — просто убери/оставь пустым
		repoUrl: 'https://github.com/Prointer/la-studio-nails',
		size: 'wide',
		icon: <AppWindowIcon className='w-30 h-40' />,
	},
	{
		id: 'smartchef',
		title: 'SmartChef Bot (MVP)',
		description: 'projects.cards.smartchef.description',
		tech: ['Node.js', 'Telegraf', 'Docker', 'PostgreSQL'],
		// liveUrl отсутствует — покажем красную кнопку
		repoUrl: 'https://github.com/Prointer/smartchef',
		repoPrivate: false,
		size: 'base',
		icon: <Telegram className='w-30 h-40' />,
	},
	{
		id: 'weather',
		title: 'Weather 7d',
		description: 'projects.cards.weather.description',
		tech: ['React', 'TypeScript', 'Jest'],
		liveUrl: 'https://…',
		// приватный репо — бейдж
		repoPrivate: true,
		size: 'tall',
		icon: <IconAPIv2 className='w-30 h-40' />,
	},
]

const ProjectsSection = () => (
	<ProjectsGrid projects={projects} className='mt-12' />
)
export default ProjectsSection
