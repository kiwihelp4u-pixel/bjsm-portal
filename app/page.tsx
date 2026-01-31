// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">

      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Image
            src="/images/bjsm-logo.png"
            alt="BJSM Logo"
            width={56}
            height={56}
          />
          <h1 className="text-lg md:text-xl font-semibold">
            Bihar Jharkhand Sabha of Australia and New Zealand
          </h1>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full h-[55vh]">
        <Image
          src="/images/bjsm-hero.jpg"
          alt="BJSM Community Gathering"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Upcoming Events
        </h2>

        {/* EVENT CARD */}
        <div className="max-w-[380px]">

          {/* POSTER */}
          <Image
            src="/images/bihar-diwas-poster.jpg"
            alt="Bihar Diwas Event Poster"
            width={380}
            height={680}
            className="rounded-lg mb-4"
          />

          {/* TEXT BLOCK WITH VISIBLE BACKGROUND */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-4">

            <h3 className="text-xl font-semibold mb-2">
              Bihar Diwas & 15th Anniversary
            </h3>

            <p className="text-gray-800 text-sm mb-3">
              Join us in celebrating Bihar Diwas and 15 years of Bihar Jharkhand Sabha
              with cultural programs, community gathering, and festivities.
            </p>

            <ul className="text-sm space-y-1">
              <li>📅 Sunday, 22 March 2026</li>
              <li>📍 New Lynn Community Centre – Main Hall</li>
              <li>⏰ Program starts at 1:00 PM</li>
            </ul>

          </div>

          {/* RSVP BUTTON */}
          <Link
            href="/rsvp"
            className="inline-block bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-medium"
          >
            View Event / RSVP
          </Link>

        </div>

        {/* NEXT EVENT (HOLI) WILL START BELOW THIS BLOCK */}

      </section>

    </main>
  );
}
