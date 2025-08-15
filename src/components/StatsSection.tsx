// src/components/StatsSection.tsx
import React, { useEffect, useRef, useState } from "react"

/* ============ hooks ============ */
const useInView = (threshold = 0.3) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
};

/* Плавная анимация числа с easing'ом без библиотек */
const CountUp: React.FC<{ target: number; durationMs?: number; startFrom?: number }> = ({
  target,
  durationMs = 1200,
  startFrom = 0,
}) => {
  const { ref, inView } = useInView(0.35);
  const [value, setValue] = useState(startFrom);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const from = startFrom;
    const to = target;
    let raf = 0;

    const animate = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / durationMs, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, durationMs, startFrom]);

  return <span ref={ref}>{value}</span>;
};

/* ============ UI ============ */
type StatItem = {
  label: string;
  value: number;
  suffix?: string; // например: "+" или "%"
};

type StatsSectionProps = {
  items?: StatItem[];
  className?: string;
};

const StatCard: React.FC<StatItem & { className?: string }> = ({ label, value, suffix = "", className = "" }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <span className="font-bold text-brand text-3xl sm:text-4xl lg:text-5xl leading-none">
      <CountUp target={value} durationMs={1200} />
      {suffix}
    </span>
    <span className="text-xs sm:text-sm lg:text-base text-white/70 mt-2 text-center">{label}</span>
  </div>
);

const StatsSection: React.FC<StatsSectionProps> = ({
  items = [
    { label: "Years of Experience", value: 5, suffix: "+" },
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Happy Clients", value: 100, suffix: "+" },
  ],
  className = "",
}) => {
  return (
    <section className={`w-full px-4 mt-2 md:mt-4 lg:mt-6 ${className}`}>
      <div
        className="
          container mx-auto
          grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8
          justify-items-center text-center
          max-w-5xl motion-safe:animate-[fadeInUp_600ms_ease-out_forwards]
          mb-20
        "
      >
        {/* На маленьких экранах третий айтем растягиваем на 2 колонки для ровного центра */}
        {items.slice(0, 2).map((it, i) => (
          <StatCard key={i} {...it} />
        ))}
        {items[2] && <StatCard {...items[2]} className="col-span-2 md:col-span-1" />}
        {/* Если айтемов больше 3 — рендерим остальные обычным способом */}
        {items.slice(3).map((it, i) => (
          <StatCard key={`extra-${i}`} {...it} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
