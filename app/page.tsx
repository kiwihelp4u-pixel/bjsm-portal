"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Globe } from "lucide-react";
import { useEffect } from "react";

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

      <div className="rounded-2xl border bg-white shadow-md hover:shadow-xl transition overflow-hidden">
        <div className="p-4 flex justify-center">
          <Image
            src={posterSrc}
            alt={posterAlt}
            width={420}
            height={760}
            className="rounded-xl object-cover"
          />
        </div>

        <div className="border-t p-5">
          <h4 className="font-semibold text-base mb-3">{title}</h4>

          {details && (
            <div className="text-sm text-gray-700 space-y-1 mb-4">
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
  useEffect(() => {
    const colors = [
      "rgba(220,38,38,0.85)",   // red
      "rgba(236,72,153,0.85)",  // pink
      "rgba(255,255,255,0.9)",  // white
    ];

    const createHeart = (side: "left" | "right") => {
      const heart = document.createElement("div");
      heart.innerText = "❤";

      const size = Math.random() * 8 + 16;
      const verticalOffset = Math.random() * 120;
      const drift =
        side === "left"
          ? Math.random() * 40
          : Math.random() * -40;

      const horizontalPosition =
        side === "left"
          ? Math.random() * (window.innerWidth * 0.15)
          : window.innerWidth -
            Math.random() * (window.innerWidth * 0.15);

      const color = colors[Math.floor(Math.random() * colors.length)];

      heart.style.position = "fixed";
      heart.style.left = `${horizontalPosition}px`;
      heart.style.bottom = `${verticalOffset}px`;
      heart.style.fontSize = `${size}px`;
      heart.style.color = color;
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";
      heart.style.opacity = "0.95";
      heart.style.animation = "floatUp 4s ease-out forwards";
      heart.style.transform = `translateX(${drift}px)`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    };

    const onScroll = () => {
      createHeart("left");
      if (Math.random() > 0.6) {
        createHeart("right");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="w-full">
      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0.85);
            opacity: 1;
          }
          100% {
            transform: translateY(-140px) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-20">
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
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Celebrating Culture. Building Community.
          </h2>
        </div>
      </section>

      {/* EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
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

          <EventCard
            title="BJSM Event (Details to be announced)"
            posterSrc="/images/bjsm-holi-tbd.png"
            posterAlt="BJSM Upcoming Event Poster"
            showRsvp={false}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Official BJSM links and social channels
          </p>

          <div className="flex justify-center gap-8">
            <a
              href="https://www.bjsm.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BJSM Official Website"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <Globe size={28} />
            </a>

            <a
              href="https://www.facebook.com/biharjharkhand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BJSM Facebook"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Facebook size={28} />
            </a>

            <a
              href="https://www.instagram.com/bjsmanz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BJSM Instagram"
              className="text-gray-600 hover:text-pink-600 transition"
            >
              <Instagram size={28} />
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            © {new Date().getFullYear()} BJSM. Community-led, not-for-profit.
          </p>
        </div>
      </footer>
    </main>
  );
}
