import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZenHaus Estates — Gulf Coast Real Estate Intelligence",
  description:
    "Monthly real estate intelligence for landlords, investors, and property owners from Tampa Bay to Naples. Local data, no agent agenda.",
  openGraph: {
    title: "ZenHaus Estates — Gulf Coast Real Estate Intelligence",
    description:
      "Monthly real estate intelligence for landlords, investors, and property owners from Tampa Bay to Naples.",
    url: "https://zenhausestates.com",
    siteName: "ZenHaus Estates",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
