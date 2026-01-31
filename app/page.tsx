// app/page.tsx
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  title: string;
  posterSrc: string;
  posterAlt: string;
  href?: string;
  showRsvp?: boolean;
  details?: {
    date?: string;
    venue?: string;
    time?: string;
  };
};

function EventCard({
  title,
  posterSrc,
  posterAlt,
  href,
  showRsvp = true,
  details,
}: EventCardProps) {
  return (
    <div className="w-full">
      <h3 className="text-center font-semibold mb-4">Upcoming Event</h3>

      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <div className="p-4 flex justify-center">
          <Image
            src={posterSrc}
            alt={posterAlt}
            width={420}
            height={760}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="border-t p-4">
          <h4 className="font-semibold text-base mb-2">{title}</h4>

          {details && (
            <div className="text-sm text-gray-800 space-y-1 mb-3">
              {details.date && <div>📅 {details.date}</div>}
              {details.venue && <div>📍 {details.venue}</div>}
              {details.time && <div>⏰ {details.time}</div>}
            </div>
          )}

          {showRsvp && href && (
  <Link href={href} className="block">
    <button
      type="button"
      className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition"
    >
      View Event / RSVP
    </button>
  </Link>
)}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Image src="/images/bjsm-logo.png" alt="BJSM Logo" width={56} height={56} />
          <h1 className="text-lg md:text-xl font-semibold">
            Bihar Jharkhand Sabha of Australia and New Zealand
          </h1>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="/images/bjsm-hero.jpg"
          alt="BJSM Community Gathering"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Bihar Diwas */}
          <EventCard
            title="Bihar Diwas & 15th Anniversary"
            posterSrc="/images/bihar-diwas-poster.jpg"
            posterAlt="Bihar Diwas Event Poster"
            href="/rsvp"
            showRsvp={true}
            details={{
              date: "Sunday, 22 March 2026",
              venue: "New Lynn Community Centre - Main Hall",
              time: "Program starts at 1:00 PM",
            }}
          />

          {/* Holi / TBD – NO RSVP */}
          <EventCard
            title="BJSM Event (Details to be announced)"
            posterSrc="/images/bjsm-holi-tbd.png"
            posterAlt="BJSM Upcoming Event Poster"
            showRsvp={false}
          />

          
        </div>
      </section>
    </main>
  );
}
