// src/sections/Footer.tsx
import ContactCard from "@components/ContactCard"; // твоя flip‑визитка
import React from "react"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

const Footer: React.FC = () => {
  const handleDownloadCV = () => {
    const a = document.createElement("a");
    a.href = "dist/resume.pdf";
    a.download = "Vladyslav_Omelianenko_CV_Frontend_Developer.pdf";
    a.click();
  };
	const SocialLinks = [{
		icon: <FaGithub />,
		url: "https://github.com/Prointer",
		label: "GitHub"
	},
	{
		icon: <FaLinkedin />,
		url: "https://www.linkedin.com/in/vladyslav-omelianenko/",
		label: "LinkedIn"
	},
	{
		icon: <FaFacebook />,
		url: "https://www.facebook.com/vlad.omelianenko/",
		label: "Facebook"
	}]

  const scrollToHero = () => {
    const el = document.getElementById("hero");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className="
        relative
        border-t border-white/10
        bg-white/5
        backdrop-blur-md
        text-foreground
        overflow-hidden
      "
    >
      {/* Декоративный подложечный слой — зелёные треугольники / «кодовые строки» */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20" style={{
    background:
      "repeating-linear-gradient(135deg, rgba(62,207,142,0.08) 0 1px, transparent 1px 20px)",
    maskImage:
      "linear-gradient(to top, transparent, black 20%, black 80%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to top, transparent, black 20%, black 80%, transparent)",
  }}>
      </div>

      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              My code will support{" "}
              <span className="text-brand">any your project</span>.
            </h3>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleDownloadCV}
                className="
                  inline-flex items-center gap-2
                  rounded-lg border border-white/30
                  bg-white/[0.02]
                  px-4 py-2.5
                  text-sm font-medium
                  text-white/90
                  transition
                  hover:border-white/80 hover:bg-white/[0.05]
                  focus:outline-none focus:ring-2 focus:ring-brand/50
                "
              >
                {/* download icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  className="text-white/60 group-hover:text-brand"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Скачать CV
              </button>

              <button
                type="button"
                onClick={scrollToHero}
                className="
                  inline-flex items-center gap-2
                  rounded-lg border border-white/30
                  bg-white/[0.02]
                  px-4 py-2.5
                  text-sm font-medium
                  text-white/90
                  transition
                  hover:border-white/80 hover:bg-white/[0.05]
                  focus:outline-none focus:ring-2 focus:ring-brand/50
                "
              >
								Back to top
                {/* back icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  className="text-white/60"
                >
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </button>
            </div>

            {/* мини‑навигация (опционально) */}
            <nav className="mt-2 text-sm text-white/60">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                <li><a href="#projects" className="hover:text-brand">Projects</a></li>
                <li><a href="#skills-in-action" className="hover:text-brand">Skills</a></li>
                <li><a href="#education" className="hover:text-brand">Education</a></li>
						transition p-4 sm:p-6
                <li><a href="#contact" className="hover:text-brand">Contact</a></li>
              </ul>
            </nav>

            <p className="text-xs text-white/40 mt-2">
              © {new Date().getFullYear()} Vladyslav Omelianenko. All rights reserved.
            </p>
          </div>

          {/* RIGHT — твоя карточка контактов */}
          <div className="md:justify-self-end w-full max-w-[520px]">
            {/* оборачивающий контейнер с «рамкой» как у карточек */}
            <div
              className="
                group rounded-2xl border border-white/30 bg-white/[0.02]
                hover:border-white/80 hover:bg-white/[0.04]
              "
            >
              {/* здесь рендерится твоя flip‑визитка */}
              <ContactCard
							name='Vladyslav Omelianenko'
							role="Frontend Developer"
							email='vladyslav.omelianenko@gmail.com'
							phone="+48 537 507 835"
          		socialLinks={SocialLinks}
							className='w-full max-w-[520px] ml-auto'
							 />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
