export default function Page() {
  return (
    <main className="container">
      <header>
        <img src="/logo-header.png" alt="ZenHaus Estates Logo" width="200" />
      </header>

      <h1>Value-Driven Real Estate in Southwest Florida</h1>

      <p>
        ZenHaus Estates LLC acquires and operates small residential properties across
        Southwest Florida — from Tampa Bay to Naples. We focus on improving what already
        exists, creating stable cash flow, and building lasting value over time.
      </p>

      <h2>Our Focus</h2>
      <ul>
        <li><strong>Acquire:</strong> Selective, off-market, and locally sourced properties with clear potential.</li>
        <li><strong>Improve:</strong> Targeted renovations that enhance livability, efficiency, and long-term durability.</li>
        <li><strong>Rent:</strong> Resident-first management that prioritizes retention and reliability.</li>
        <li><strong>Operate:</strong> Data-informed decisions, clean systems, and strong local vendor relationships.</li>
      </ul>

      <h2>Our Region</h2>
      <p>
        Based in Venice, Florida, ZenHaus focuses on residential neighborhoods throughout
        Sarasota, Charlotte, Lee, and Hillsborough counties. We understand the
        submarkets, the tenants, and the small details that make assets perform here.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <a href="/strategy"><button>Our Strategy</button></a>
        <a href="https://calendly.com/zenhaus/new-meeting" style={{ marginLeft: '1rem' }}>
          <button>Book a Call</button>
        </a>
      </div>

      <footer style={{ marginTop: '3rem' }}>
        © {new Date().getFullYear()} ZenHaus Estates LLC. All rights reserved.
      </footer>
    </main>
  );
}
