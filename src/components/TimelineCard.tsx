import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
	FaChevronDown,
	FaChevronUp,
	FaExternalLinkAlt,
	FaMapMarkerAlt,
} from 'react-icons/fa'
import type { TimelineCategory, TimelineItem } from '../types/timeline'

export interface TimelineCardProps {
	item: TimelineItem
	categoryColor?: string
}

const formatDateRange = (start: string, end: string): string =>
	`${start} - ${end}`

const getCategoryAccentColor = (
	category: TimelineCategory,
	fallback = 'border-gray-400 dark:border-gray-600'
) => {
	switch (category) {
		case 'experience':
			return 'border-sky-500 dark:border-sky-400'
		case 'education':
			return 'border-purple-500 dark:border-purple-400'
		case 'certificates':
			return 'border-green-500 dark:border-green-400'
		default:
			return fallback
	}
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const { t } = useTranslation()
	const toggleExpand = () => setIsExpanded(v => !v)

	const accentColorClass = getCategoryAccentColor(item.category)

	// --- вытаскиваем описание из i18n (или из старого поля) ---
	const rawDescription = item.descriptionKey
		? (t(item.descriptionKey, { returnObjects: true }) as string | string[])
		: typeof item.description === 'string'
		? (t(item.description, { returnObjects: true }) as string | string[])
		: item.description ?? ''

	return (
		<div
			className={`timeline-card-placeholder bg-bgbrand-light dark:bg-bgbrand-dark/70 p-5 rounded-lg shadow-md border-l-4 ${accentColorClass} mb-6`}
		>
			<div className='flex justify-between items-start'>
				<div>
					<h3 className='text-lg font-semibold text-white'>{t(item.title)}</h3>

					<p className='text-sm text-white/90 font-medium'>{t(item.place)}</p>

					<p className='text-xs text-gray-400 mt-1'>
						{formatDateRange(t(item.dateStart), t(item.dateEnd))}
						{item.location && (
							<span className='ml-2 inline-flex items-center'>
								<FaMapMarkerAlt className='mr-1 opacity-70' />
								{t(item.location)}
							</span>
						)}
					</p>
				</div>

				<button
					type='button'
					onClick={toggleExpand}
					className='p-2 text-gray-400 hover:text-brand'
					aria-expanded={isExpanded}
					aria-controls={`timeline-desc-${item.id}`}
				>
					{isExpanded ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
				</button>
			</div>

			{isExpanded && (
				<div
					id={`timeline-desc-${item.id}`}
					className='mt-4 pt-4 border-t border-gray-700'
				>
					{Array.isArray(rawDescription) ? (
						<ul className='list-disc list-inside space-y-1 text-sm text-gray-400'>
							{rawDescription.map((line, i) => (
								<li key={i}>{line}</li>
							))}
						</ul>
					) : rawDescription ? (
						<p className='text-sm text-gray-300 whitespace-pre-line'>
							{
								rawDescription /* это уже строка (или пришла из t, или старый текст) */
							}
						</p>
					) : null}

					{item.link && (
						<a
							href={item.link}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center mt-3 text-sm text-brand hover:underline'
						>
							{t('commons.learnMore', { defaultValue: 'Learn More' })}
							<FaExternalLinkAlt className='ml-1.5 w-3 h-3' />
						</a>
					)}
				</div>
			)}
		</div>
	)
}

export default TimelineCard
