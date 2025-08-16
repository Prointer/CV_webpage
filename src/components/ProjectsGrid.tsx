import React from "react"

/* ====== Токены под бренд ====== */

const BRAND = "text-brand";


/* ====== Types ====== */
type Size = "base" | "wide" | "tall";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];                 // ["React", "TypeScript", "Tailwind"]
  liveUrl?: string;               // ссылка на сайт
  repoUrl?: string;               // ссылка на GitHub
  repoPrivate?: boolean;          // если приватный — покажем бейдж
  imageUrl?: string;              // обложка (если нет — сгенерим)
  size?: Size;                    // base / wide / tall
	icon?: React.ReactNode;
};

/* ====== Helpers ====== */
const sizeToClasses: Record<Size, string> = {
  base: "col-span-12 sm:col-span-6 lg:col-span-4",
  wide: "col-span-12 lg:col-span-8",
  tall: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2",
};

// Fallback cover с центральной SVG-иконкой, которая красится на hover
const FallbackCover: React.FC<{ icon?: React.ReactNode }> = ({ icon }) => (
  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative group">
    {/* фон-градиент под бренд */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, rgba(64,207,143,0.18), rgba(64,207,143,0.06))",
      }}
    />
    {/* лёгкий dot‑pattern */}
    <div
      className="absolute inset-0 opacity-25"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,.5) 1px, transparent 1px)",
        backgroundSize: "12px 12px",
      }}
    />
    {/* иконка по центру */}
    <div className="absolute inset-0 grid place-items-center">
      <div className="text-white/50 group-hover:text-brand transition-transform duration-300 ease-out group-hover:scale-105">
        {/* важное: в SVG используем stroke='currentColor' или fill='currentColor' */}
        {icon}
      </div>
    </div>
  </div>
);

/* ====== UI ====== */
const ProjectCard: React.FC<{ p: Project }> = ({ p }) => {
  const hasLive = Boolean(p.liveUrl);
  const hasRepo = Boolean(p.repoUrl);

  return (
    <article className="glass group rounded-2xl p-4 sm:p-5 hover:shadow-xl transition hover:-translate-y-0.5">
      {/* Cover */}
      {p.imageUrl ? (
        <div className="w-full aspect-[16/10] rounded-xl overflow-hidden">
          <img
            src={p.imageUrl}
            alt={`${p.title} cover`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <FallbackCover icon={p.icon} />  // <<— ТУТ
      )}

      {/* Title + badges */}
      <div className="mt-4 flex items-start gap-2">
        <h3 className="font-semibold text-base sm:text-lg leading-snug">
          {p.title}
        </h3>
        {p.repoPrivate && (
          <span className="ml-2 text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/80">
            Private repo
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-2 text-sm text-white/80 line-clamp-3">{p.description}</p>

      {/* Tech tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-1 rounded-full bg-white/10 text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        {/* Live */}
        {hasLive ? (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center bg-brand rounded-lg px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition hover:shadow-emerald-300/30 hover:shadow-lg`}
            aria-label={`Open live demo of ${p.title}`}
          >
            Live Demo ↗
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-red-600/80 text-white/90 cursor-not-allowed"
            aria-label="No live demo available"
            title="No live demo"
          >
            No live demo
          </button>
        )}

        {/* Repo */}
        {hasRepo ? (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition"
            aria-label={`Open GitHub repo of ${p.title}`}
          >
            GitHub
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white/5 text-white/50 cursor-not-allowed"
            title="Repository unavailable"
          >
            Repo unavailable
          </button>
        )}
      </div>
    </article>
  );
};

type GridProps = {
  projects: Project[];
  className?: string;
  title?: string;
  subtitle?: string;
};

const ProjectsGrid: React.FC<GridProps> = ({ projects, className = "", title = "Projects", subtitle }) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="container mx-auto px-4">
        <header className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className={BRAND}>▸</span> {title}
          </h2>
          {subtitle && (
            <p className="text-white/70 text-sm sm:text-base mt-1">{subtitle}</p>
          )}
        </header>

        <div
  className="
    grid gap-4 sm:gap-5 lg:gap-6
    grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
  "
>
  {projects.map((p) => (
    <ProjectCard key={p.id} p={p} />
  ))}
</div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
