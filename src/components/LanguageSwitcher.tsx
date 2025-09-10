import React from 'react'
import i18n from '../i18n/i18n'

const langs = ['en', 'pl', 'ua']
type Lang = (typeof langs)[number]

const LanguageSwitcher: React.FC = () => {
	const current = (i18n.language || 'en').slice(0, 2) as Lang

	const nextLang = () => {
		const idx = langs.indexOf(current)
		const next = langs[(idx + 1) % langs.length]
		i18n.changeLanguage(next)
	}

	return (
		<button
			onClick={nextLang}
			className='px-2 py-1 rounded-lg border border-white/20 hover:border-white/40 text-sm'
			title={`Language: ${current.toUpperCase()}`}
			aria-label='Toggle language'
		>
			{current.toUpperCase()}
		</button>
	)
}

export default LanguageSwitcher;
