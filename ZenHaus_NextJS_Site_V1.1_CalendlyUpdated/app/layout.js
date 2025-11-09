
import './globals.css';
import Link from 'next/link';
import content from '../content/content.json';

function Nav() {
  return (
    <nav className="nav">
      {content.nav.map(item => (
        item.cta ? (
          <Link key={item.href} href={item.href} className="cta">{item.label}</Link>
        ) : (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        )
      ))}
    </nav>
  )
}

export const metadata = {
  title: 'ZenHaus Estates LLC',
  description: 'Value-add rentals in Southwest Florida—done right.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="banner">Based in {content.site.base_city} • Serving {content.site.service_area}</div>
        <header className="header">
          <div className="header-inner">
            <div className="logo-wrap">
              <img src="/logo-full.svg" alt="ZenHaus logo" className="logo" />
              <div className="mini">ZenHaus Estates LLC</div>
            </div>
            <Nav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="hstack" style={{justifyContent:'space-between', alignItems:'flex-end'}}>
              <div className="vstack">
                <strong>ZenHaus Estates LLC</strong>
                <span className="small">{content.site.base_city} • Serving {content.site.service_area}</span>
                <span className="small">Contact: {content.site.contact_email} • {content.site.phone}</span>
              </div>
              <div className="badges">
                <span>Local</span><span>Data-driven</span><span>Value-add focus</span><span>Long-term owner</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
