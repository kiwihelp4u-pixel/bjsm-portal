// app/layout.tsx
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BJSM Portal",
  description: "Bihar Jharkhand Sabha of Australia and New Zealand",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Executive Members", href: "/executive-members" },
  { label: "Gallery", href: "/gallery" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* GLOBAL HEADER */}
        <header
          id="site-header"
          className="sticky top-0 z-30 bg-white border-b transition-shadow duration-300"
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/bjsm-logo.png"
                alt="BJSM Logo"
                width={44}
                height={44}
                priority
              />
              <span className="font-semibold text-sm md:text-base whitespace-nowrap">
                Bihar Jharkhand Sabha of Australia and New Zealand
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2 bg-gray-50 border rounded-full px-3 py-1 shadow-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition"
                >
                  {item.label}

                  {/* Red underline animation */}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}

              {/* RSVP */}
              <Link href="/rsvp">
                <span className="ml-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
                  RSVP
                </span>
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* Scroll shadow */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const header = document.getElementById("site-header");
              window.addEventListener("scroll", () => {
                if (window.scrollY > 10) {
                  header.classList.add("shadow-md");
                } else {
                  header.classList.remove("shadow-md");
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
