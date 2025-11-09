import React from "react";
import logoInvix from "../../../assets/Logo.webp"
import ConferrenceImage from "../../../assets/invitationAssets/Conferrence.png";


type Speaker = {
  name: string;
  role: string;
  company: string;
};

type ScheduleItem = {
  time: string;
  title: string;
  speaker?: string;
  type: "keynote" | "talk" | "panel" | "break";
};

type TicketPlan = {
  name: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

const speakers: Speaker[] = [
  {
    name: "Alicia Tan",
    role: "Senior Frontend Engineer",
    company: "Pixelwave Labs",
  },
  {
    name: "Jonas Müller",
    role: "Head of Product",
    company: "CloudCraft",
  },
  {
    name: "Fatima El-Sayed",
    role: "Lead UX Researcher",
    company: "BrightPath Studio",
  },
  {
    name: "Diego Alvarez",
    role: "Developer Advocate",
    company: "OpenStacked",
  },
];

const schedule: ScheduleItem[] = [
  {
    time: "09:00 – 09:30",
    title: "Opening & Welcome Remarks",
    speaker: "Host Team",
    type: "keynote",
  },
  {
    time: "09:30 – 10:15",
    title: "Building Human-Centered Interfaces at Scale",
    speaker: "Alicia Tan",
    type: "talk",
  },
  {
    time: "10:15 – 10:30",
    title: "Coffee & Networking Break",
    type: "break",
  },
  {
    time: "10:30 – 11:15",
    title: "From Idea to Product: Designing Experiments That Matter",
    speaker: "Jonas Müller",
    type: "talk",
  },
  {
    time: "11:15 – 12:00",
    title: "Panel: The Future of Remote Collaboration",
    speaker: "Multiple Speakers",
    type: "panel",
  },
  {
    time: "12:00 – 13:00",
    title: "Lunch Break",
    type: "break",
  },
];

const tickets: TicketPlan[] = [
  {
    name: "Starter Pass",
    price: "$39",
    description: "Perfect for individuals exploring remote conferences.",
    features: [
      "Access to all live sessions",
      "Public chat & Q&A",
      "Certificate of attendance",
    ],
  },
  {
    name: "Professional Pass",
    price: "$89",
    badge: "Most Popular",
    description: "For professionals who want access to content and community.",
    features: [
      "Everything in Starter",
      "Session recordings (30 days)",
      "Exclusive speaker Q&A room",
      "Access to community Slack",
    ],
    highlight: true,
  },
  {
    name: "Team Pass",
    price: "$249",
    description: "Best for teams and small companies joining together.",
    features: [
      "Up to 8 team members",
      "Recordings (90 days)",
      "Private roundtable session",
      "Sponsor discounts & perks",
    ],
  },
];

const badgeColorByType: Record<ScheduleItem["type"], string> = {
  keynote: "bg-indigo-500/10 text-indigo-300 border-indigo-500/40",
  talk: "bg-emerald-500/10 text-emerald-300 border-emerald-500/40",
  panel: "bg-pink-500/10 text-pink-300 border-pink-500/40",
  break: "bg-slate-500/10 text-slate-300 border-slate-500/40",
};

const OnlineConferencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <img src={logoInvix} alt="" className="max-h-8 md:max-h-10 w-auto object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-tight">
                Invix Invitation
              </div>
              <div className="text-xs text-slate-400">
                Your Digital Partner Invitation
              </div>
            </div>
          </div>

          <a
            href="#tickets"
            className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 md:text-sm"
          >
            Get Tickets
          </a>
        </div>
      </header>


      {/* HERO SECTION: Background image + title + subtitle */}
<section className="relative border-b border-slate-800/60 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <img
      src={ConferrenceImage}
      alt="People joining an online conference"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Overlay gelap di atas gambar */}
  <div className="absolute inset-0 z-10 bg-slate-950/75" />

  {/* Konten di atas overlay */}
  <div className="relative z-20 mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 text-white md:px-6 lg:py-24">
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      Live • Online Conference • Streaming Worldwide
    </div>

    <div className="space-y-4 max-w-3xl">
      <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Global Online Experience 2025
      </h1>
      <p className="max-w-xl text-sm text-slate-200 sm:text-base">
        Two days of focused sessions on design, development, and product
        thinking — fully online, fully interactive, and designed for
        remote teams and digital creators.
      </p>
    </div>
  </div>
</section>


{/* DETAILS + RESERVATION CARD */}
<section className="border-b border-slate-800/60">
  <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:py-16 lg:py-20">
    {/* Left: details, info, CTA, stats */}
    <div className="flex-1 space-y-6">
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2">
          <span className="text-lg">📅</span>
          <div>
            <div className="font-medium text-white">
              17–18 September 2025
            </div>
            <div className="text-xs text-slate-400">
              09:00–17:00 GMT • Streaming globally
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2">
          <span className="text-lg">🧑‍💻</span>
          <div>
            <div className="font-medium text-white">Online Platform</div>
            <div className="text-xs text-slate-400">
              Browser-based access • No installation
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#tickets"
          className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-400"
        >
          Reserve your seat
        </a>
        <a
          href="#schedule"
          className="text-sm font-medium text-slate-200 hover:text-white"
        >
          View full schedule →
        </a>
      </div>

      <div className="flex flex-wrap gap-6 text-xs text-slate-300 sm:text-sm">
        <div>
          <div className="text-2xl font-semibold text-white">30+</div>
          <div className="text-slate-400">Sessions & workshops</div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-white">18</div>
          <div className="text-slate-400">International speakers</div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-white">900+</div>
          <div className="text-slate-400">Expected attendees</div>
        </div>
      </div>
    </div>

    {/* Right: reservation card */}
    <div className="flex-1">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl shadow-black/60 sm:p-6 lg:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
              Early Access Registration
            </div>
            <div className="text-sm text-slate-300">
              Limited discounted seats remaining
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            -30%
          </span>
        </div>

        <form className="space-y-3 text-sm">
          <div className="space-y-1.5">
            <label
              htmlFor="full-name"
              className="block text-xs font-medium text-slate-300"
            >
              Full name
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none ring-indigo-500/40 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="work-email"
              className="block text-xs font-medium text-slate-300"
            >
              Work email
            </label>
            <input
              id="work-email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none ring-indigo-500/40 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="role-position"
              className="block text-xs font-medium text-slate-300"
            >
              Role / Position
            </label>
            <select
              id="role-position"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
            >
              <option value="">Select your role</option>
              <option>Developer / Engineer</option>
              <option>Designer / Researcher</option>
              <option>Product / Strategy</option>
              <option>Founder / Leadership</option>
              <option>Student / Learner</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-400"
          >
            Join the early access list
          </button>

          <p className="text-xs text-slate-500">
            No spam. We’ll send one reminder when the full agenda is
            published and another before the event goes live.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* About */}
      <section id="about" className="border-b border-slate-800/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:px-6 md:py-16">
          <div className="flex-1 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
              About the event
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              A focused, online-first conference for remote product teams.
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Global Online Experience 2025 brings together designers,
              developers, product leaders, and researchers who are building
              digital products for a distributed world. Instead of generic keynotes,
              each session is deliberately curated around practical workflows,
              proven patterns, and honest case studies.
            </p>
          </div>

          <div className="flex-1 space-y-4">
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-300">
                  ✓
                </span>
                <div>
                  <div className="font-medium text-white">
                    Built for remote collaboration
                  </div>
                  <p className="text-slate-400">
                    Sessions are designed around real-time interaction: live Q&A,
                    collaborative whiteboards, and moderated discussion rooms.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-300">
                  ✓
                </span>
                <div>
                  <div className="font-medium text-white">
                    Practical, case-study driven content
                  </div>
                  <p className="text-slate-400">
                    Speakers share their actual tooling, design decisions, metrics,
                    and lessons learned from shipping remote-first products.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-300">
                  ✓
                </span>
                <div>
                  <div className="font-medium text-white">
                    Networking that fits your schedule
                  </div>
                  <p className="text-slate-400">
                    Join curated networking sessions by role, topic, or region –
                    or watch quietly and connect later via the attendee directory.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Speakers
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Learn directly from people building at scale.
              </h2>
              <p className="mt-2 max-w-lg text-sm text-slate-300">
                Our speakers come from product teams across startups, agencies,
                and large-scale platforms — each sharing what actually worked
                for them in practice.
              </p>
            </div>
            <p className="text-xs text-slate-400 md:text-right">
              More speakers will be announced over the coming weeks.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {speakers.map((speaker) => (
              <article
                key={speaker.name}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm transition hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-pink-500 text-sm font-semibold text-white">
                    {speaker.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
                    Live session
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {speaker.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-300">
                  {speaker.role}
                </p>
                <p className="text-xs text-slate-400">{speaker.company}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Schedule snapshot
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Day 1 — Core sessions and live panel.
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Full two-day agenda will be available as a downloadable PDF.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="border-b border-slate-800/70 bg-slate-950/60 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              17 September 2025 • All times in GMT
            </div>
            <ul className="divide-y divide-slate-800/70">
              {schedule.map((item) => (
                <li
                  key={item.time + item.title}
                  className="flex flex-col gap-3 px-4 py-4 text-sm text-slate-200 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-24 shrink-0 text-xs font-medium text-slate-300">
                      {item.time}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {item.title}
                      </div>
                      {item.speaker && (
                        <div className="text-xs text-slate-400">
                          {item.speaker}
                        </div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${badgeColorByType[item.type]}`}
                  >
                    {item.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tickets / Pricing */}
      <section id="tickets" className="border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Tickets
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Choose the pass that fits your team.
              </h2>
              <p className="mt-2 max-w-lg text-sm text-slate-300">
                All passes include full access to the online platform, live chat,
                and downloadable resources. Prices are listed in USD and exclude
                local taxes where applicable.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              Group discounts available for 15+ attendees. Contact us for a custom
              invoice.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tickets.map((ticket) => (
              <article
                key={ticket.name}
                className={`relative flex flex-col rounded-2xl border bg-slate-900/60 p-5 text-sm shadow-sm ${
                  ticket.highlight
                    ? "border-indigo-500/80 shadow-lg shadow-indigo-500/30"
                    : "border-slate-800"
                }`}
              >
                {ticket.badge && (
                  <div className="absolute right-4 top-4 rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                    {ticket.badge}
                  </div>
                )}
                <h3 className="text-base font-semibold text-white">
                  {ticket.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold text-white">
                    {ticket.price}
                  </span>
                  <span className="text-xs text-slate-400">/ attendee</span>
                </div>
                <p className="mt-2 text-xs text-slate-300">
                  {ticket.description}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500/20 text-[9px] text-indigo-200">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-5 w-full rounded-xl px-4 py-2.5 text-xs font-semibold uppercase tracking-wide ${
                    ticket.highlight
                      ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/40 hover:bg-indigo-400"
                      : "border border-slate-600 text-slate-100 hover:border-indigo-400 hover:text-white"
                  }`}
                >
                  Get {ticket.name}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
              Questions
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-3 text-sm">
            <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white">
                How do I join the conference on the event day?
                <span className="text-xl leading-none text-slate-400 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xl leading-none text-slate-400 group-open:inline">
                  −
                </span>
              </summary>
              <p className="mt-3 text-xs text-slate-300">
                A week before the event, you’ll receive an email with a secure
                link to the online platform. You can join directly from your
                browser — we recommend using the latest version of Chrome or
                Edge for the best experience.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white">
                Will sessions be recorded?
                <span className="text-xl leading-none text-slate-400 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xl leading-none text-slate-400 group-open:inline">
                  −
                </span>
              </summary>
              <p className="mt-3 text-xs text-slate-300">
                Yes. All talks and panels will be recorded. Access to the
                recordings depends on your ticket type — Professional and Team
                passes include extended access.
              </p>
            </details>

            <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white">
                Can I transfer my ticket to a colleague?
                <span className="text-xl leading-none text-slate-400 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xl leading-none text-slate-400 group-open:inline">
                  −
                </span>
              </summary>
              <p className="mt-3 text-xs text-slate-300">
                Absolutely. You can transfer your ticket up to 48 hours before
                the event starts by contacting our support team with the new
                attendee&apos;s details.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
          <div className="flex flex-col gap-6 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-white">
                Global Online Experience 2025
              </div>
              <p className="mt-1 text-xs text-slate-400">
                Hosted by the Remote Product Collective.
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-2 text-xs text-slate-300 sm:flex-row">
              <input
                type="email"
                placeholder="Get updates about new speakers and sessions"
                className="flex-1 rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40"
              />
              <button
                type="submit"
                className="rounded-xl bg-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/30 hover:bg-indigo-400"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-3 text-xs text-slate-500 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Global Online Experience. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/code-of-conduct" className="hover:text-slate-300">
                Code of Conduct
              </a>
              <a href="/privacy" className="hover:text-slate-300">
                Privacy
              </a>
              <a href="/contact" className="hover:text-slate-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OnlineConferencePage;