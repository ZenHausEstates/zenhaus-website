import './globals.css';

export const metadata = {
  title: 'ZenHaus Estates | Southwest Florida Real Estate Investing',
  description: 'Value-driven real estate investment firm based in Venice, FL — serving Southwest Florida from Tampa Bay to Naples.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
