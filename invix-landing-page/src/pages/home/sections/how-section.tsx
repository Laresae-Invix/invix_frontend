import React, { useEffect, useMemo, useRef, useState } from "react";

type IconName = "wedding" | "birthday" | "event" | "multi";

type Step = {
  title: string;
  desc: string;
  icon: IconName;
};

const STEPS: Step[] = [
  {
    title: "Wedding Invitation",
    desc: "Elegan, RSVP real-time, galeri, dan lokasi—semua serba digital.",
    icon: "wedding",
  },
  {
    title: "Birthday Invitation",
    desc: "Tema playful, countdown, wish-wall, dan gift registry.",
    icon: "birthday",
  },
  {
    title: "Event",
    desc: "Satu acara dengan agenda jelas, check-in QR, dan update tamu.",
    icon: "event",
  },
  {
    title: "Multi Event",
    desc: "Beberapa sesi/venue dalam satu undangan: ringkas & terorganisir.",
    icon: "multi",
  },
];

const BRAND = { navy: "#17184B", indigo: "#3927FF", deep: "#1100D1" };

/** Ikon biru seragam (SVG inline, mudah di-style) */
function BlueIcon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const fill = BRAND.indigo;
  switch (name) {
    case "wedding": // cincin/hati
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden>
          <path d="M8.5 7a3.5 3.5 0 0 1 5-3.16l.9-.9a1 1 0 1 1 1.4 1.42l-.76.75A3.5 3.5 0 1 1 8.5 7Zm-3 5.5a5.5 5.5 0 1 1 9.33 4.04l-3.27 3.04a1.5 1.5 0 0 1-2.12 0l-3.27-3.04A5.47 5.47 0 0 1 5.5 12.5Zm11 0a5.5 5.5 0 0 1 2.6 10.3l-2.03 1.2a1 1 0 0 1-1.02-1.72l2.03-1.2A3.5 3.5 0 1 0 16.5 12.5Z"/>
        </svg>
      );
    case "birthday": // kue ulang tahun
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden>
          <path d="M12 2c1 0 1.8.8 1.8 1.8 0 .3-.1.6-.2.8l-.6 1H11l-.6-1c-.1-.2-.2-.5-.2-.8C10.2 2.8 11 2 12 2Z"/>
          <path d="M4 11h16l2 3v6H2v-6l2-3Zm2 7h12v-2H6v2Zm10.5-6-1-2h-7l-1 2h9Z"/>
        </svg>
      );
    case "event": // kalender
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden>
          <path d="M7 2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h2V2ZM3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Zm4 3h4v4H7v-4Z"/>
        </svg>
      );
    case "multi": // tumpukan/layers
      return (
        <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden>
          <path d="M12 3 2 8l10 5 10-5-10-5Zm0 8L2 6v4l10 5 10-5V6l-10 5Zm0 4L2 10v4l10 5 10-5v-4l-10 5Z"/>
        </svg>
      );
  }
}

export default function HowSection() {
  const [active, setActive] = useState(0);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (obsRef.current) obsRef.current.disconnect();
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(Number(vis.target.getAttribute("data-index") || 0));
      },
      { threshold: [0.2, 0.5, 0.8] }
    );
    obsRef.current = obs;
    itemsRef.current.length = STEPS.length;
    itemsRef.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handlers = useMemo(() => ({
    onMouseEnter: (i: number) => () => setActive(i),
    onFocus:      (i: number) => () => setActive(i),
  }), []);

  return (
    <section id="how-section" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* GRID: kiri heading (text-left), kanan timeline */}
       

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 lg:items-center">
        {/* LEFT — heading kiri terpusat vertikal */}
        <header className="lg:col-span-4 lg:self-center lg:flex lg:flex-col lg:justify-center">
  {/* CHIP */}
  <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B5D99] to-[#4C7A99]
               text-white px-5 py-2 text-sm font-semibold ring-2 ring-[#4C7A99] mb-4
               transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-md hover:ring-indigo-500
               animate-fadeInMove w-max">
    Layanan Kami
  </span>

  {/* TITLE */}
  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-left">
    Layanan untuk Setiap Kesempatan
  </h3>

  {/* SUBTITLE */}
  <p className="mt-3 text-slate-600 text-left">
    assalamualikum ya ahli kubur
  </p>

  {/* ACCENT LINE */}
  <div className="mt-6 h-[3px] w-24 rounded-full bg-slate-200 overflow-hidden">
    <span
      className="block h-full w-full"
      style={{ backgroundImage: `linear-gradient(135deg, ${BRAND.indigo}, ${BRAND.deep})` }}
    />
  </div>
</header>

        {/* RIGHT — timeline zig-zag (desktop) + vertikal (mobile) */}
        <div className="lg:col-span-8 relative">
          {/* garis pusat dashed */}
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
            <svg viewBox="0 0 4 100" className="h-full w-full text-slate-300" fill="none" preserveAspectRatio="none">
              <path d="M2 0 L2 100" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
            </svg>
          </div>

          {/* DESKTOP: zig-zag kiri/kanan */}
          <ol className="hidden lg:flex flex-col gap-14">
            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              const isActive = i === active;
              return (
                <li
                  key={s.title}
                  data-index={i}
                  ref={(el: HTMLLIElement | null) => { itemsRef.current[i] = el; }}
                  className="grid grid-cols-[1fr_88px_1fr] items-start"
                  tabIndex={0}
                  onMouseEnter={handlers.onMouseEnter(i)}
                  onFocus={handlers.onFocus(i)}
                >
                  {/* KIRI */}
                  <div className={`flex ${left ? "justify-end" : "opacity-0 pointer-events-none select-none"}`}>
                    {left && (
                      <div className="max-w-sm text-right">
                        <div className={[
                          "ml-auto grid place-items-center rounded-full border-2 border-dashed h-20 w-20 transition-all duration-300",
                          isActive ? "border-[#3927FF] scale-105 shadow-[0_0_0_8px_rgba(57,39,255,0.06)]" : "border-slate-300",
                        ].join(" ")}>
                          <BlueIcon name={s.icon} className="h-6 w-6" />
                        </div>
                        <h4 className={`mt-3 text-lg font-semibold ${isActive ? "text-[#17184B]" : "text-slate-900"}`}>{s.title}</h4>
                        <p className={`mt-1.5 text-sm leading-6 ${isActive ? "text-slate-600" : "text-slate-500"}`}>{s.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* TENGAH — lengan ke garis */}
                  <div className="flex items-center justify-center">
                    <svg viewBox="0 0 80 36" className="h-7 w-20 text-slate-300" fill="none" preserveAspectRatio="none">
                      {left
                        ? <path d="M80 18 C 58 2, 36 2, 14 18" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
                        : <path d="M0 18 C 22 2, 44 2, 66 18" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
                      }
                    </svg>
                  </div>

                  {/* KANAN */}
                  <div className={`${left ? "opacity-0 pointer-events-none select-none" : ""}`}>
                    {!left && (
                      <div className="max-w-sm text-left">
                        <div className={[
                          "grid place-items-center rounded-full border-2 border-dashed h-20 w-20 transition-all duration-300",
                          isActive ? "border-[#3927FF] scale-105 shadow-[0_0_0_8px_rgba(57,39,255,0.06)]" : "border-slate-300",
                        ].join(" ")}>
                          <BlueIcon name={s.icon} className="h-6 w-6" />
                        </div>
                        <h4 className={`mt-3 text-lg font-semibold ${isActive ? "text-[#17184B]" : "text-slate-900"}`}>{s.title}</h4>
                        <p className={`mt-1.5 text-sm leading-6 ${isActive ? "text-slate-600" : "text-slate-500"}`}>{s.desc}</p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          {/* MOBILE/TABLET: vertikal kebawah */}
          <ol className="lg:hidden relative space-y-10 pt-2">
            <span aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px">
              <svg viewBox="0 0 4 100" className="h-full w-full text-slate-300" fill="none">
                <path d="M2 0 L2 100" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
              </svg>
            </span>

            {STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <li
                  key={s.title}
                  data-index={i}
                  ref={(el: HTMLLIElement | null) => { itemsRef.current[i] = el; }}
                  className="relative flex flex-col items-center text-center"
                  tabIndex={0}
                  onMouseEnter={handlers.onMouseEnter(i)}
                  onFocus={handlers.onFocus(i)}
                >
                  <div className={[
                    "grid place-items-center rounded-full border-2 border-dashed h-20 w-20 transition-all duration-300 bg-transparent",
                    isActive ? "border-[#3927FF] scale-105 shadow-[0_0_0_8px_rgba(57,39,255,0.06)]" : "border-slate-300",
                  ].join(" ")}>
                    <BlueIcon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h4 className={`mt-3 text-base font-semibold ${isActive ? "text-[#17184B]" : "text-slate-900"}`}>{s.title}</h4>
                  <p className={`mt-1.5 text-sm leading-6 ${isActive ? "text-slate-600" : "text-slate-500"}`}>{s.desc}</p>

                  {i < STEPS.length - 1 && (
                    <div aria-hidden className="mt-4 h-12 w-px">
                      <svg viewBox="0 0 4 48" className="h-full w-full text-slate-300" fill="none">
                        <path d="M2 0 L2 48" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
