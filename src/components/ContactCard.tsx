import { motion } from "framer-motion"
import React, { useEffect, useMemo, useRef, useState } from "react"

/* Типы */
export interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}
export interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
  className?: string;       // чтобы задавать размеры/отступы снаружи
}

/* Карточка без внешних бордеров/рамок. Авто-высота под контент. */
const ContactCard: React.FC<ContactCardProps> = ({
  name,
  role,
  email,
  phone,
  socialLinks,
  className = "",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // refs для измерения высоты обеих сторон
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frontRef = useRef<HTMLDivElement | null>(null);
  const backRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  const measure = useMemo(
    () => () => {
      const fh = frontRef.current?.scrollHeight ?? 0;
      const bh = backRef.current?.scrollHeight ?? 0;
      const max = Math.max(fh, bh);
      if (max && typeof max === "number") setHeight(max);
    },
    []
  );

  useEffect(() => {
    measure();
    // пересчитать при ресайзе
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const toggle = () => setIsFlipped((v) => !v);

  return (
    <div
      ref={containerRef}
      className={["relative w-full", className].join(" ")}
      style={{ perspective: "1000px" }}
    >
      {/* Внутренняя «сцена» — одна обертка, без внешних рамок */}
      <motion.div
        role="button"
        tabIndex={0}
        aria-pressed={isFlipped}
        aria-label={isFlipped ? "Show front of contact card" : "Show back of contact card"}
        onClick={toggle}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
        className="relative w-full"
        style={{
          height: height === "auto" ? undefined : `${height}px`,
          transformStyle: "preserve-3d",
        }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {/* FRONT */}
        <div
          ref={frontRef}
          className="absolute inset-0 w-full h-auto p-6 sm:p-7 flex flex-col items-center justify-center text-center rounded-2xl shadow-xl bg-emerald-700/90 text-white"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className="text-lg sm:text-xl font-bold mb-1">{name}</h2>
          <p className="text-sm sm:text-base text-white/90">{role}</p>
        </div>

        {/* BACK */}
        <div
          ref={backRef}
          className="absolute inset-0 w-full h-auto p-6 sm:p-7 flex flex-col items-center justify-center rounded-2xl shadow-xl bg-brand-dark text-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full space-y-2 text-left">
            <p className="text-sm">
              <span className="font-semibold">Email:</span>{" "}
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </p>
            <p className="text-sm">
              <span className="font-semibold">Phone:</span>{" "}
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            </p>
          </div>

          <div className="mt-5 flex justify-center gap-4 text-2xl">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/90 hover:text-brand-light transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactCard;
