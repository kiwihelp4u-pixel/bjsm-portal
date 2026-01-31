import Image from "next/image";
import Link from "next/link";

export default function Page() {
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

      {/* EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Upcoming Events
        </h2>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* POSTER */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/bihar-diwas-poster.jpg"
                alt="Bihar Diwas Event Poster"
                width={420}
                height={650}
                className="object-contain"
              />
            </div>

            {/* TEXT + RSVP (STAYS TOGETHER) */}
            <div className="flex flex-col">

              <h3 className="text-2xl font-semibold mb-4">
                Bihar Diwas & 15th Anniversary
              </h3>

              <p className="text-gray-600 mb-6">
                Join us in celebrating Bihar Diwas and 15 years of Bihar Jharkhand Sabha
                with cultural programs, community gathering, and festivities.
              </p>

              <ul className="text-sm mb-8 space-y-2">
                <li>📅 <strong>Sunday, 22 March 2026</strong></li>
                <li>📍 New Lynn Community Centre – Main Hall</li>
                <li>⏰ Program starts at 1:00 PM</li>
              </ul>

              <Link
                href="/rsvp"
                className="inline-block w-fit bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-medium transition"
              >
                View Event / RSVP
              </Link>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
