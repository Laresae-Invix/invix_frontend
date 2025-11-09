import React, { useState } from "react";

const styles = `
:root {
  --bg: #020817;
  --bg-soft: #050b1f;
  --bg-elevated: #070d21;
  --border-subtle: rgba(148, 163, 253, 0.12);
  --accent: #6366f1;
  --accent-soft: rgba(99, 102, 241, 0.16);
  --accent-alt: #f97316;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --radius-xl: 24px;
  --radius-lg: 18px;
  --radius-md: 12px;
  --shadow-soft: 0 18px 55px rgba(15, 23, 42, 0.6);
  --transition-fast: 0.2s ease;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#root {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: var(--font-sans);
  background: radial-gradient(circle at top, #111827 0%, #020817 55%, #000 100%);
  color: var(--text);
}

/* Layout */
.page-root {
  min-height: 100vh;
}

.page-main {
  padding-top: 80px;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  inset-inline: 0;
  z-index: 40;
  backdrop-filter: blur(14px);
  background-color: rgba(2, 6, 23, 0.72);
  border-bottom: 1px solid rgba(148, 163, 253, 0.14);
}

.header-inner {
  max-width: 1140px;
  margin: 0 auto;
  height: 72px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.logo-mark {
  width: 34px;
  height: 34px;
  border-radius: 14px;
  background: linear-gradient(145deg, var(--accent), var(--accent-alt));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #0f172a;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-title {
  font-weight: 600;
  font-size: 18px;
}

.logo-subtitle {
  font-size: 10px;
  color: var(--muted);
}

.header-nav {
  display: flex;
  gap: 14px;
  margin-left: 24px;
  flex: 1;
}

.nav-link {
  padding: 6px 10px;
  font-size: 13px;
  color: var(--muted);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  border-radius: 999px;
}

.nav-link:hover {
  color: var(--accent);
  background-color: rgba(148, 163, 253, 0.06);
}

.header-cta {
  padding: 8px 18px;
  font-size: 13px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: linear-gradient(145deg, var(--accent), var(--accent-alt));
  color: #0b1020;
  font-weight: 600;
  box-shadow: var(--shadow-soft);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.header-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.7);
}

.header-burger {
  display: none;
  margin-left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 253, 0.5);
  background: transparent;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.header-burger span {
  width: 14px;
  height: 2px;
  background: var(--accent);
  border-radius: 999px;
}

.header-mobile {
  display: none;
}

/* Section base */
.section {
  padding: 80px 20px 40px;
}

.section-title {
  margin: 0 auto 26px;
  max-width: 640px;
}

.section-title-left {
  text-align: left;
}

.section-title-center {
  text-align: center;
}

.section-eyebrow {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--accent);
}

.section-heading {
  margin: 6px 0 0;
  font-size: 22px;
  font-weight: 600;
}

/* Grid helpers */
.grid-4,
.grid-3,
.grid-2 {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  gap: 18px;
}

.grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

/* Card */
.card {
  background: var(--bg-elevated);
  border-radius: var(--radius-lg);
  padding: 18px 16px;
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-soft);
  transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
}

.card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-soft);
  background-color: #030816;
}

.card-title {
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 4px;
}

.card-text {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

/* Hero */
.hero {
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(260px, 2fr);
  gap: 40px;
  align-items: center;
}

.hero-availability {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  padding: 4px 10px;
  border: 1px solid rgba(99, 102, 241, 0.5);
  font-size: 10px;
  color: var(--accent);
  background-color: rgba(15, 23, 42, 0.9);
}

.hero-title {
  margin: 14px 0 10px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
}

.hero-gradient {
  display: block;
  font-size: 26px;
  font-weight: 600;
  background: linear-gradient(145deg, var(--accent), var(--accent-alt));
  -webkit-background-clip: text;
  color: transparent;
}

.hero-text {
  margin: 0;
  margin-top: 4px;
  font-size: 14px;
  color: var(--muted);
  max-width: 420px;
}

.hero-stats {
  display: flex;
  gap: 24px;
  margin-top: 18px;
}

.hero-stat-number {
  font-size: 26px;
  font-weight: 600;
  color: var(--accent);
}

.hero-stat-label {
  font-size: 11px;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  gap: 10px;
  margin-top: 22px;
}

.btn-primary {
  padding: 9px 18px;
  border-radius: 999px;
  border: none;
  background: var(--accent);
  color: #020817;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-ghost {
  padding: 9px 16px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 253, 0.4);
  background: transparent;
  color: var(--text);
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.hero-right {
  position: relative;
  justify-self: center;
}

.hero-avatar {
  width: 220px;
  height: 260px;
  border-radius: var(--radius-xl);
  background: radial-gradient(circle at top, #111827, #020817);
  border: 1px solid rgba(148, 163, 253, 0.25);
  box-shadow: var(--shadow-soft);
}

.hero-badge,
.hero-badge-alt {
  position: absolute;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(10px);
  color: var(--text);
}

.hero-badge {
  bottom: 26px;
  left: -10px;
  background: rgba(15, 23, 42, 0.96);
  border: 1px solid rgba(148, 163, 253, 0.4);
}

.hero-badge-alt {
  top: 18px;
  right: -16px;
  background: rgba(15, 23, 42, 0.98);
  border: 1px solid rgba(249, 115, 22, 0.7);
}

/* Services */
.service-card {
  position: relative;
}
.service-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--accent);
  position: absolute;
  top: 14px;
  right: 14px;
}

/* Footer */
.footer {
  max-width: 1140px;
  margin: 30px auto 24px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: var(--muted);
}
.footer-links {
  display: flex;
  gap: 10px;
}
.footer-links a {
  color: var(--muted);
  text-decoration: none;
}
.footer-links a:hover {
  color: var(--accent);
}

/* Responsive */
@media (max-width: 900px) {
  .header-nav,
  .header-cta {
    display: none;
  }
  .header-burger {
    display: inline-flex;
  }
  .header-mobile {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 20px 16px;
    background-color: rgba(2, 6, 23, 0.98);
    border-top: 1px solid rgba(148, 163, 253, 0.14);
  }
  .mobile-link,
  .mobile-contact {
    text-align: left;
    padding: 7px 10px;
    border-radius: 999px;
    border: none;
    background: transparent;
    color: var(--muted);
    font-size: 12px;
    cursor: pointer;
  }
  .mobile-link:hover {
    color: var(--accent);
    background-color: rgba(148, 163, 253, 0.06);
  }
  .mobile-contact {
    background: var(--accent);
    color: #020817;
    font-weight: 600;
  }
  .hero {
    grid-template-columns: 1fr;
    gap: 26px;
  }
  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-3,
  .grid-2,
  .skills-grid,
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
  .section {
    padding: 60px 16px 30px;
  }
  .footer {
    flex-direction: column;
    gap: 6px;
  }
}
`;


const SectionTitle: React.FC<{
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}> = ({ eyebrow, title, align = "left" }) => (
  <div
    className={
      "section-title " +
      (align === "center" ? "section-title-center" : "section-title-left")
    }
  >
    {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
    <h2 className="section-heading">{title}</h2>
  </div>
);

const Event2Header: React.FC = () => {
  const [, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  return (
     <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-amber-300" />
          <span className="text-lg font-semibold tracking-tight">
            Invix
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button type="button" className="hidden rounded-full border border-slate-700 px-4 py-2 text-xs font-medium hover:border-slate-500 md:inline-flex">
            Add to Calendar
          </button>
          <button type="button" className="rounded-full bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-pink-500/40 hover:bg-pink-400">
            Open Invitation
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => (
  <section id="home" className="section">
    <div className="hero">
      <div className="hero-left">
        <p className="hero-availability">Available for freelance</p>
        <h1 className="hero-title">
          Hello, I am Pablo Gavi
          <span className="hero-gradient">
            Front-end Developer and UI Designer
          </span>
        </h1>
        <p className="hero-text">
          I design and build clean, fast, and accessible digital products for
          modern brands.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">14</div>
            <div className="hero-stat-label">Years of experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">6k</div>
            <div className="hero-stat-label">Clients worldwide</div>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>
          <a href="#portfolio" className="btn-ghost">
            View Portfolio
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-avatar" />
        <div className="hero-badge">Front-end Developer</div>
        <div className="hero-badge-alt">UI / UX Designer</div>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "UI / UX Design",
      desc: "Product interfaces with clear hierarchy and consistent patterns.",
    },
    {
      title: "Web Development",
      desc: "Production-ready React apps with performance in mind.",
    },
    {
      title: "SEO & Marketing",
      desc: "Markup and content structure optimized for reach.",
    },
    {
      title: "Product Strategy",
      desc: "Translate business goals into usable product flows.",
    },
  ];
  return (
    <section id="services" className="section">
      <SectionTitle
        eyebrow="Our Services"
        title="Turn information into usable digital experiences"
        align="center"
      />
      <div className="grid-4">
        {services.map((s) => (
          <div key={s.title} className="card service-card">
            <div className="service-dot" />
            <h3 className="card-title">{s.title}</h3>
            <p className="card-text">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="footer">
    <div>© 2025 Gavi. All rights reserved.</div>
    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#portfolio">Works</a>
      <a href="#contact">Contact</a>
    </div>
  </footer>
);

const Event2: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="page-root">
        <Event2Header />
        <main className="page-main">
          <Hero />
          <Services />
        
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Event2;
