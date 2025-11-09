import React from "react";

type NftItem = {
  id: number;
  title: string;
  imageUrl: string;
  edition: string; // dipakai sebagai "Time"
  highestBidEth: number; // dipakai sebagai "Duration (hours)"
  likes: number; // dipakai sebagai "Guests"
};

type Collection = {
  id: number;
  name: string;
  items: number;
};

const newestItems: NftItem[] = [
  {
    id: 1,
    title: "Welcome & Ice Breaker",
    imageUrl: "/images/segment-1.png",
    edition: "16.00 – 16.30",
    highestBidEth: 0.5,
    likes: 25,
  },
  {
    id: 2,
    title: "Games & Fun Activities",
    imageUrl: "/images/segment-2.png",
    edition: "16.30 – 17.15",
    highestBidEth: 0.75,
    likes: 30,
  },
  {
    id: 3,
    title: "Cake Cutting & Wishes",
    imageUrl: "/images/segment-3.png",
    edition: "17.15 – 17.45",
    highestBidEth: 0.5,
    likes: 35,
  },
  {
    id: 4,
    title: "Photo Session & Farewell",
    imageUrl: "/images/segment-4.png",
    edition: "17.45 – 18.00",
    highestBidEth: 0.25,
    likes: 25,
  },
];

const exploreItems: NftItem[] = [
  {
    id: 5,
    title: "Candy Bar & Snacks Corner",
    imageUrl: "/images/corner-1.png",
    edition: "Open all event",
    highestBidEth: 2,
    likes: 40,
  },
  {
    id: 6,
    title: "Photo Booth & Polaroid",
    imageUrl: "/images/corner-2.png",
    edition: "16.15 – 17.45",
    highestBidEth: 1.5,
    likes: 35,
  },
  {
    id: 7,
    title: "Kids Play Area",
    imageUrl: "/images/corner-3.png",
    edition: "Open all event",
    highestBidEth: 2,
    likes: 30,
  },
  {
    id: 8,
    title: "Gift Table & Guest Book",
    imageUrl: "/images/corner-4.png",
    edition: "Before 17.30",
    highestBidEth: 1,
    likes: 25,
  },
];

const topCollections: Collection[] = [
  { id: 1, name: "Dress Code: Pastel Party", items: 1 },
  { id: 2, name: "Parking & Drop-off", items: 1 },
  { id: 3, name: "Gifts & Red Envelope", items: 1 },
  { id: 4, name: "Special Notes for Parents", items: 1 },
];

const Birthday1: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-28 space-y-24">
        <HeroSection />
        <HowItWorksSection />
        <NewestItemsSection />
        <ExploreSection />
        <TopCollectionSection />
      </main>
      <SiteFooter />
    </div>
  );
};

const SiteHeader: React.FC = () => {
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

const HeroSection: React.FC = () => {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-slate-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-300">
          You are warmly invited
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Join us to celebrate{" "}
          <span className="text-pink-400">Alya&apos;s 7th Birthday</span>.
        </h1>

        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
          Let&apos;s gather for an evening full of laughter, games, and sweet
          memories. Your presence will make this day even more special for
          Alya and our family.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/40 hover:bg-pink-400">
            Confirm Attendance (RSVP)
          </button>
          <button type="button" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-slate-500">
            View Event Details
          </button>
        </div>

        <div className="flex gap-6 text-xs text-slate-300 sm:text-sm">
          <div>
            <div className="text-lg font-semibold text-white">
              Saturday, 24 August 2025
            </div>
            Date
          </div>
          <div>
            <div className="text-lg font-semibold text-white">
              16.00 – 18.00
            </div>
            Time
          </div>
          <div>
            <div className="text-lg font-semibold text-white">
              Sunshine Garden Hall
            </div>
            Venue
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-pink-500/30 via-fuchsia-500/20 to-amber-300/20 blur-2xl" />
        <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl">
          <div className="overflow-hidden rounded-2xl bg-slate-800">
            <div className="flex h-56 flex-col justify-between bg-gradient-to-tr from-slate-900 via-pink-500 to-amber-400 p-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wide text-slate-200">
                  Birthday Invitation
                </p>
                <h2 className="text-xl font-semibold text-white">
                  Alya&apos;s 7th Birthday Party
                </h2>
                <p className="text-xs text-slate-100">
                  Saturday, 24 August 2025 • 16.00 – 18.00
                </p>
                <p className="text-xs text-slate-100">
                  Venue: Sunshine Garden Hall, Green Avenue Street
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-100">
                <div>
                  <p className="text-[11px]">Theme</p>
                  <p className="text-sm font-semibold text-white">
                    Pastel Garden Party
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/70 px-3 py-2 text-right text-xs text-slate-100">
                  RSVP before
                  <div className="text-lg font-semibold text-white">
                    10 Aug
                  </div>
                  <p className="text-[10px] text-slate-300">
                    Tap &quot;RSVP&quot; to confirm
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-slate-700" />
              <div>
                <p className="text-[11px] text-slate-400">Hosted by</p>
                <p className="text-sm font-medium text-slate-100">
                  Alya&apos;s parents
                </p>
              </div>
            </div>
            <button type="button" className="rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700">
              RSVP Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Save the date",
      description:
        "Mark the date and time on your calendar so you don’t miss the celebration.",
      step: "Step 01",
    },
    {
      title: "Confirm your attendance",
      description:
        "Send your RSVP so we can prepare seats, meals, and surprise gifts for everyone.",
      step: "Step 02",
    },
    {
      title: "Follow the dress code",
      description:
        "Wear something in pastel colors to match the birthday theme and look great in photos.",
      step: "Step 03",
    },
    {
      title: "Come and celebrate",
      description:
        "Arrive on time, bring your warm wishes, and enjoy games, cake, and happy moments together.",
      step: "Step 04",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Simple steps to join the birthday celebration
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
        We&apos;ve prepared everything to make this day meaningful and fun. All
        you need to do is follow these steps and come with a smile.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <div className="mt-1 rounded-xl bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
              {step.step}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                {step.description}
              </p>
              <button type="button" className="mt-3 text-xs font-semibold text-pink-300 hover:text-pink-200">
                View details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const NewestItemsSection: React.FC = () => {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Birthday event schedule
        </h2>
        <button type="button" className="text-xs font-semibold text-pink-300 hover:text-pink-200">
          Download as image
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {newestItems.map((item) => (
          <NftCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const NftCard: React.FC<{ item: NftItem }> = ({ item }) => {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
      <div className="overflow-hidden rounded-xl bg-slate-800">
        <div className="h-40 w-full bg-slate-700">
          {/* Replace with <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" /> when assets are ready */}
        </div>
      </div>
      <div className="mt-3 flex flex-1 flex-col justify-between gap-2 text-xs text-slate-300">
        <div>
          <h3 className="text-sm font-semibold text-white">{item.title}</h3>
          <p className="text-[11px] text-slate-400">
            Time <span className="font-medium">{item.edition}</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-slate-400">Approx. duration</p>
            <p className="text-sm font-semibold text-white">
              {item.highestBidEth} hours
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1">
            <span className="text-[10px]">👨‍👩‍👧</span>
            <span className="text-[11px] font-medium">
              {item.likes} guests
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

const ExploreSection: React.FC = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-[280px,minmax(0,1fr)]">
      {/* Sidebar: informasi & preferensi tamu */}
      <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Guest information</h2>
          <button type="button" className="rounded-full border border-slate-700 px-3 py-1 text-[11px] font-medium hover:border-slate-500">
            Clear form
          </button>
        </div>

        <FilterGroup title="Your name">
          <input
            type="text"
            placeholder="Write your full name"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs outline-none focus:border-pink-400"
          />
        </FilterGroup>

        <FilterGroup title="Number of guests">
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs outline-none focus:border-pink-400">
            <option>1 person</option>
            <option>2 persons</option>
            <option>3 persons</option>
            <option>4+ persons</option>
          </select>
        </FilterGroup>

        <FilterGroup title="Attendance">
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs outline-none focus:border-pink-400">
            <option>I will attend</option>
            <option>I am not sure yet</option>
            <option>Sorry, I cannot attend</option>
          </select>
        </FilterGroup>

        <FilterGroup title="Food preference">
          <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs outline-none focus:border-pink-400">
            <option>No specific preference</option>
            <option>Vegetarian</option>
            <option>Non-spicy option</option>
            <option>Halal only</option>
          </select>
        </FilterGroup>

        <FilterGroup title="Note to the family">
          <textarea
            placeholder="Write wishes or a short message..."
            className="h-20 w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs outline-none focus:border-pink-400"
          />
        </FilterGroup>

        <button type="button" className="mt-2 w-full rounded-full bg-pink-500 py-2 text-xs font-semibold text-white hover:bg-pink-400">
          Submit RSVP
        </button>
      </div>

      {/* Right: highlight area ala 'explore products' */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <p>
            Special corners prepared for{" "}
            <span className="font-semibold text-slate-100">our guests</span>.
          </p>
          <select className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[11px] outline-none focus:border-pink-400">
            <option>Show all</option>
            <option>Kids area</option>
            <option>Food & drinks</option>
            <option>Photo spots</option>
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreItems.map((item) => (
            <NftCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FilterGroup: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="space-y-2">
    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
      {title}
    </p>
    {children}
  </div>
);

const TopCollectionSection: React.FC = () => {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Important information
        </h2>
        <button type="button" className="text-xs font-semibold text-pink-300 hover:text-pink-200">
          Share with friends
        </button>
      </div>

      <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {topCollections.map((collection) => (
          <div
            key={collection.id}
            className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-slate-700" />
              <span className="font-medium">{collection.name}</span>
            </div>
            <span className="text-xs text-slate-400">
              Detail {collection.items}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-300">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)]">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-pink-400 via-fuchsia-500 to-amber-300" />
              <span className="text-lg font-semibold tracking-tight">
                BirthdayJoy
              </span>
            </div>
            <p className="max-w-sm text-xs text-slate-400 sm:text-sm">
              Thank you for being part of this special moment. Your prayer and
              presence are the best gift for Alya and our family.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-4 text-[11px] text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Alya&apos;s Birthday. With love from
            our family.
          </p>
          <div className="flex gap-4">
            <button type="button" className="hover:text-slate-300">Location map</button>
            <button type="button" className="hover:text-slate-300">Send wishes</button>
            <button type="button" className="hover:text-slate-300">Back to top</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Birthday1;