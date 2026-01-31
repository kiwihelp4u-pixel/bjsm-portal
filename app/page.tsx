import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">

      {/* ================= HEADER ================= */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Image
            src="/images/bjsm-logo.png"
            alt="BJSM Logo"
            width={56}
            height={56}
            priority
          />
          <h1 className="text-lg md:text-xl font-semibold">
            Bihar Jharkhand Sabha of Australia and New Zealand
          </h1>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[65vh]">
        <Image
          src="/images/bjsm-hero.jpg"
          alt="BJSM Community Gathering"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Bihar Diwas & 15th Anniversary of BJSM
            </h2>
            <p className="opacity-90">
              Celebrating culture, community, and 15 years together
            </p>
          </div>
        </div>
      </section>

      {/* ================= EVENTS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* ===== EVENT CARD: BIHAR DIWAS ===== */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">

            {/* Poster – no crop */}
            <div className="relative w-full h-[420px] bg-gray-100">
              <Image
                src="/images/bihar-diwas-poster.jpg"
                alt="Bihar Diwas Event"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">
                Bihar Diwas & 15th Anniversary
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                Join us in celebrating Bihar Diwas and 15 years of Bihar Jharkhand Sabha in Auckland.
              </p>

              <ul className="text-sm mb-6 space-y-1">
                <li>📅 Sunday, 22 March 2026</li>
                <li>📍 New Lynn Community Centre – Main Hall</li>
                <li>⏰ Program starts at 1:00 PM</li>
              </ul>

              <div className="mt-auto">
                <Link
                  href="/rsvp"
                  className="inline-block w-full text-center bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-medium transition"
                >
                  View Event / RSVP
                </Link>
              </div>
            </div>
          </div>

          {/* Future events */}
          {/* Holi */}
          {/* Chhath */}
          {/* Diwali */}

        </div>
      </section>
    </main>
  );
}
