"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Executive Members", href: "/executive-members" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="w-full border-b bg-white sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/bjsm-logo.png"
            alt="BJSM Logo"
            width={40}
            height={40}
          />
          <span className="font-semibold text-sm md:text-base">
            Bihar Jharkhand Sabha of Australia and New Zealand
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-700 hover:text-black
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-red-700
                after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}

          <Link href="/rsvp">
            <span className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md font-semibold">
              RSVP
            </span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
          <span className="w-6 h-[2px] bg-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/rsvp" onClick={() => setOpen(false)}>
              <span className="inline-block bg-red-700 text-white px-4 py-2 rounded-md font-semibold">
                RSVP
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
