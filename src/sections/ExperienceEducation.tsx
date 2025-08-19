import React from 'react'
import TimelineCard from '../components/TimelineCard'
import type { TimelineItem } from '../types/timeline'

import { useTranslation } from 'react-i18next'
// Sample Data - Replace with your actual data or fetch from a source

const experienceData: TimelineItem[] = [
	{
		id: 'exp1',
		category: 'experience',
		title: 'experience.cards.work1.title',
		place: 'YadroSoft UA',
		location: 'experience.cards.work1.place',
		dateStart: 'experience.cards.work1.dateStart',
		dateEnd: 'experience.cards.work1.dateEnd',
		descriptionKey: 'experience.cards.work1.description',
		link: 'https://techsolutions.example.com',
		logoUrl: 'https://via.placeholder.com/100x40.png?text=Tech+Solutions',
	},
	{
		id: 'exp2',
		category: 'experience',
		title: 'experience.cards.work2.title',
		place: 'CodeNest Poland',
		location: 'experience.cards.work2.place',
		dateStart: 'experience.cards.work2.dateStart',
		dateEnd: 'experience.cards.work2.dateEnd',
		description: 'experience.cards.work2.description',
		logoUrl: 'logo_CodeNest.png',
	},
]

const educationData: TimelineItem[] = [
	{
		id: 'edu1',
		category: 'education',
		title: 'experience.cards.edu1.title',
		place: 'Akademia WSB in Dąbrowa Górnicza',
		location: 'experience.cards.edu1.place',
		dateStart: 'experience.cards.edu1.dateStart',
		dateEnd: 'experience.cards.edu1.dateEnd',
		description: 'experience.cards.edu1.description',
		link: 'https://wsb.edu.pl/',
	},
	{
		id: 'edu2',
		category: 'education',
		title: 'experience.cards.edu2.title',
		place: 'Wyższa Szkoła Kształcenia Zawodowego | WSKZ',
		location: 'experience.cards.edu2.place',
		dateStart: 'experience.cards.edu2.dateStart',
		dateEnd: 'experience.cards.edu2.dateEnd',
		description: 'experience.cards.edu2.description',
	},
	{
		id: 'edu3',
		category: 'education',
		title: 'experience.cards.edu3.title',
		place: 'Wyższa Szkoła Kształcenia Zawodowego | WSKZ',
		location: 'experience.cards.edu3.place',
		dateStart: 'experience.cards.edu3.dateStart',
		dateEnd: 'experience.cards.edu3.dateEnd',
		description: 'experience.cards.edu3.description',
	},
	{
		id: 'edu4',
		category: 'education',
		title: 'experience.cards.edu4.title',
		place: 'Wyższa Szkoła Kształcenia Zawodowego | WSKZ',
		location: 'experience.cards.edu4.place',
		dateStart: 'experience.cards.edu4.dateStart',
		dateEnd: 'experience.cards.edu4.dateEnd',
		description: 'experience.cards.edu4.description',
	},
]

const certificatesData: TimelineItem[] = [
	{
		id: 'cert1',
		category: 'certificates',
		title: 'experience.cards.cer1.title',
		place: 'ItGid',
		dateStart: 'experience.cards.cer1.dateStart',
		dateEnd: 'experience.cards.cer1.dateEnd',
		description: 'experience.cards.cer1.description',
		link: 'https://www.itgid.info/ua/course/reactjs',
	},
	{
		id: 'cert2',
		category: 'certificates',
		title: 'experience.cards.cer2.title',
		place: 'Promity Academy',
		dateStart: 'experience.cards.cer2.dateStart',
		dateEnd: 'experience.cards.cer2.dateEnd',
		description: 'experience.cards.cer2.description',
		link: '/certificates/Certificate_Scrum.pdf',
	},
	{
		id: 'cert3',
		category: 'certificates',
		title: 'experience.cards.cer3.title',
		place: 'ItGid',
		dateStart: 'experience.cards.cer3.dateStart',
		dateEnd: 'experience.cards.cer3.dateEnd',
		description: 'experience.cards.cer3.description',
		link: '/certificates/Certificate JS2.0.pdf',
	},
	{
		id: 'cert4',
		category: 'certificates',
		title: 'experience.cards.cer4.title',
		place: 'ItGid',
		dateStart: 'experience.cards.cer4.dateStart',
		dateEnd: 'experience.cards.cer4.dateEnd',
		description: 'experience.cards.cer4.description',
		link: 'https://www.itgid.info/ua/course/nodejs-2024',
	},
]

const ExperienceEducation: React.FC = () => {
	const { t } = useTranslation()

	return (
		<section
			id='experience-education'
			className='py-16 md:py-24 glass rounded-xl'
		>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-16 md:mb-20'>
					{t('experience.title')}
				</h2>

				{/* Experience Section */}
				{experienceData.length > 0 && (
					<div className='mb-12 md:mb-16'>
						<h3 className='text-2xl sm:text-3xl font-bold text-brand dark:text-brand-light mb-8 text-center sm:text-left'>
							{t('experience.subtitle.experience')}
						</h3>
						<div className='relative space-y-8'>
							{experienceData.map(item => (
								<TimelineCard key={item.id} item={item} />
							))}
						</div>
					</div>
				)}

				{/* Education Section */}
				{educationData.length > 0 && (
					<div className='mb-12 md:mb-16'>
						<h3 className='text-2xl sm:text-3xl font-bold text-brand dark:text-brand-light mb-8 text-center sm:text-left'>
							{t('experience.subtitle.education')}
						</h3>
						<div className='relative space-y-8'>
							{educationData.map(item => (
								<TimelineCard key={item.id} item={item} />
							))}
						</div>
					</div>
				)}

				{/* Certificates Section */}
				{certificatesData.length > 0 && (
					<div>
						<h3 className='text-2xl sm:text-3xl font-bold text-brand dark:text-brand-light mb-8 text-center sm:text-left'>
							{t('experience.subtitle.certificates')}
						</h3>
						<div className='relative space-y-8'>
							{certificatesData.map(item => (
								<TimelineCard key={item.id} item={item} />
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default ExperienceEducation
