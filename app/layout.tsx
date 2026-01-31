// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "BJSM Portal",
  description: "Bihar Jharkhand Sabha of Australia and New Zealand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* TOP NAVIGATION */}
        <header className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-red-700">Home</Link>
            <Link href="/about" className="hover:text-red-700">About</Link>
            <Link href="/executive-members" className="hover:text-red-700">
              Executive Members
            </Link>
            <Link href="/gallery" className="hover:text-red-700">Gallery</Link>
            <Link href="/rsvp" className="hover:text-red-700">RSVP</Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
