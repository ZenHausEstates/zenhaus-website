import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZenHaus LLC | Real Estate Investment Southwest Florida",
  description:
    "ZenHaus LLC acquires investment properties throughout the Gulf Coast region. Single family, multi-family, and land within a 50-mile radius of Venice, FL.",
  keywords: [
    "real estate investment",
    "Southwest Florida",
    "Gulf Coast",
    "Venice FL",
    "property buyer",
    "ZenHaus",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zenhaus-black">{children}</body>
    </html>
  );
}
