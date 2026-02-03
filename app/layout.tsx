// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
