// src/sections/Footer.tsx
import ContactCard from '@components/ContactCard'
import React, { useEffect, useState } from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

// простой хук для медиа-запроса (чтобы на мобиле карта была авто-высоты)
function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false)
	useEffect(() => {
		const mql = window.matchMedia(query)
		const handler = () => setMatches(mql.matches)
		handler()
		mql.addEventListener?.('change', handler)
		return () => mql.removeEventListener?.('change', handler)
	}, [query])
	return matches
}

const Footer: React.FC = () => {
	const isMdUp = useMediaQuery('(min-width: 768px)')
	const { t } = useTranslation()
	const handleDownloadCV = () => {
		const a = document.createElement('a')
		a.href = '/resume.pdf'
		a.download = 'Vladyslav_Omelianenko_CV_Frontend_Developer.pdf'
		a.click()
	}

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	const SocialLinks = [
		{ icon: <FaGithub />, url: 'https://github.com/Prointer', label: 'GitHub' },
		{
			icon: <FaLinkedin />,
			url: 'https://www.linkedin.com/in/vladyslav-omelianenko/',
			label: 'LinkedIn',
		},
		{
			icon: <FaFacebook />,
			url: 'https://www.facebook.com/vlad.omelianenko/',
			label: 'Facebook',
		},
	]

	return (
		<footer
			id='footer'
			className='
        relative overflow-hidden
        border-t border-white/10
        bg-white/5 backdrop-blur-md text-foreground
      '
		>
			{/* декоративный фон: диагональные линии */}
			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 -z-10 opacity-20'
				style={{
					background:
						'repeating-linear-gradient(135deg, rgba(62,207,142,0.08) 0 1px, transparent 1px 20px)',
					maskImage:
						'linear-gradient(to top, transparent, black 20%, black 80%, transparent)',
					WebkitMaskImage:
						'linear-gradient(to top, transparent, black 20%, black 80%, transparent)',
				}}
			/>

			<div className='container mx-auto px-4 py-10 sm:py-12 lg:py-16'>
				{/* важное: items-stretch, чтобы обе колонки имели одинаковую высоту */}
				<div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10 items-stretch'>
					{/* LEFT 60% */}
					<div className='md:col-span-3 flex flex-col'>
						<h3 className='text-2xl sm:text-3xl font-bold leading-tight'>
							{t('footer.title')}{' '}
							<span className='text-brand'>{t('footer.titleActive')}</span>.
						</h3>

						<div className='mt-5 flex flex-wrap gap-3'>
							<button
								type='button'
								onClick={handleDownloadCV}
								className='inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/80 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-brand/50'
							>
								<svg
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.8'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
									<polyline points='7 10 12 15 17 10' />
									<line x1='12' y1='15' x2='12' y2='3' />
								</svg>
								{t('hero.buttons.downloadCV')}
							</button>

							<button
								type='button'
								onClick={scrollToTop}
								className='inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-white/90 transition hover:border-white/80 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-brand/50'
							>
								{t('footer.buttonBack')}
								<svg
									width='16'
									height='16'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.8'
									strokeLinecap='round'
									strokeLinejoin='round'
								>
									<polyline points='18 15 12 9 6 15' />
								</svg>
							</button>
						</div>

						{/* мини-навигация */}
						<nav className='mt-4 text-sm text-white/60'>
							<ul className='flex flex-wrap gap-x-4 gap-y-2'>
								<li>
									<a href='#portfolio' className='hover:text-green-400 '>
										{t('header.nav.portfolio')}
									</a>
								</li>
								<li>
									<a href='#skills-in-action' className='hover:text-green-400'>
										{t('header.nav.skills')}
									</a>
								</li>
								<li>
									<a
										href='#experience-education'
										className='hover:text-green-400'
									>
										{t('header.nav.education')}
									</a>
								</li>
								<li>
									<a href='#hero' className='hover:text-green-400'>
										{t('header.nav.about')}
									</a>
								</li>
							</ul>
						</nav>

						<p className='text-xs text-white/40 mt-3'>
							© {new Date().getFullYear()} Vladyslav Omelianenko. All rights
							reserved.
						</p>
					</div>

					{/* RIGHT 40% — карточка без лишних обёрток/бордеров */}
					<div className='md:col-span-2 flex h-full'>
						<ContactCard
							mode={isMdUp ? 'fill' : 'auto'}
							className='w-full h-auto md:h-full md:max-w-[520px] md:ml-auto'
							name='Vladyslav Omelianenko'
							role='Frontend Developer'
							email='vladyslav.omelianenko@gmail.com'
							phone='+48 537 507 835'
							socialLinks={SocialLinks}
						/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
