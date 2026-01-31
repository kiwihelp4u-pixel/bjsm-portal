import "./globals.css";

export const metadata = {
  title: "BJSM RSVP",
  description: "RSVP for Bihar Diwas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
