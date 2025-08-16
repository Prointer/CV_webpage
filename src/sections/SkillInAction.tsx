// src/sections/SkillsInAction.tsx
import { IconAPIv2 } from "@assets/icons/IconAPIv2"
import IconAuth from "@assets/icons/IconAuth"
import IconDB from "@assets/icons/IconDB"
import IconDeploy from "@assets/icons/IconDeploy"
import IconRealtime from "@assets/icons/IconRealtime"
import IconUx from "@assets/icons/IconUx"
import React from "react"

type Skill = {
  title: string;
  desc: string;
  badges?: string[];
  icon?: React.ReactNode;
  big?: boolean; // крупная карточка на ≥ sm
};

const skills: Skill[] = [
  {
    title: "UX‑first Website Design & Build",
    desc:
      "Проектирую структуру, делаю адаптив и собираю интерфейсы на React так, чтобы ими было удобно пользоваться на любом устройстве.",
    badges: ["UX", "UI", "React", "TypeScript", "GSAP", "A11y"],
    big: true,
		icon: <IconUx />,
  },
  {
    title: "Authentication & Security",
    desc:
      "JWT с refresh‑токенами, OAuth (Google), приватные роуты через middleware и роли доступа.",
    badges: ["OAuth2", "JWT", "RBAC", "RLS"],
		icon: <IconAuth />,
  },
  {
    title: "Database & Data Modeling",
    desc:
      "Схема в PostgreSQL, нормализация, индексы (btree/GIN), миграции. P95 поиска −60% после оптимизаций.",
    badges: ["Postgres", "Prisma/Drizzle", "Indexes"],
		icon: <IconDB />,
  },
  {
    title: "API Integration",
    desc:
      "Интеграция REST/GraphQL, кеширование, ретраи с экспоненциальной задержкой и circuit‑breaker.",
    badges: ["REST", "GraphQL", "Caching"],
		icon: <IconAPIv2 className='text-brand' />,
  },
  {
    title: "Real‑time UX",
    desc:
      "Обновления через WebSockets/SSE (чаты, таблицы) с авто‑повтором и бэкоффом. Средняя задержка <150 мс.",
    badges: ["WebSocket", "SSE", "Realtime"],
		icon: <IconRealtime />,
  },
  {
    title: "CI/CD & Deploy",
    desc:
      "GitHub Actions → build/test/lint, превью‑деплой. Docker‑образы, окружения по веткам.",
    badges: ["GHA", "Docker", "Vercel/Fly"],
		icon: <IconDeploy />,
  },
];

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[11px] tracking-wide text-brand">
    {children}
  </span>
);

const SkillsInAction: React.FC = () => {
  return (
    <section id="skills-in-action" className="relative py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <header className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Skills in <span className="text-brand">Action</span>
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Не просто список технологий — а реальные задачи, которые я решаю в проектах.
          </p>
        </header>

        {/* MOBILE: простой список (≤ sm)  |  DESKTOP: мозаика (≥ sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((s, i) => (
            <article
              key={s.title + i}
              className={[
                // общие стили
								"group",
                "rounded-2xl border border-white/10 bg-white/[0.02] transition duration-200",
                "hover:border-white/40 hover:-translate-y-[1px] hover:bg-white/[0.05]",
                // мобильный вид: горизонтальный «лист»
                "flex sm:block items-start gap-4 p-4 sm:p-6",
                // крупная карточка только на ≥ sm
                s.big ? "sm:col-span-2" : "",
              ].join(" ")}
            >
              {/* Иконка: на мобиле слева, на ≥ sm сверху. Заменишь на свои SVG */}
              <div className="flex-shrink-0 flex h-10 w-10 mb-0.5 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all duration-200 group-hover:border-green-700 group-hover:scale-110 group-hover:shadow-xl/20 group-hover:shadow-emerald-500">
                <span aria-hidden>{s.icon}</span>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm sm:text-[15px] text-white/70">
                  {s.desc}
                </p>

                {/* Доп. контент для «большой» карточки: списки преимуществ (показываем только на ≥ sm) */}
                {s.big && (
                  <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                    <ul className="text-sm text-white/80 space-y-2">
                      <li>• Контент‑иерархия и сценарии</li>
                      <li>• Дизайн‑система и токены</li>
                      <li>• Доступность (ARIA, клавиатура)</li>
                    </ul>
                    <ul className="text-sm text-white/80 space-y-2">
                      <li>• Анимации без лагов (60fps)</li>
                      <li>• Оптимизация шрифтов/изображений</li>
                      <li>• Тёмная тема, i18n</li>
                    </ul>
                    <ul className="text-sm text-white/80 space-y-2">
                      <li>• Code‑splitting, lazy routes</li>
                      <li>• Lighthouse 90+ mobile</li>
                      <li>• SEO‑мета/OpenGraph</li>
                    </ul>
                  </div>
                )}

                {/* бейджи */}
                {!!s.badges?.length && (
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                    {s.badges.map((b) => (
                      <Badge key={b}>{b}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsInAction;
