export default function Page() {
  return (
    <main className="container">
      <header>
        <img src="/logo-header.png" alt="ZenHaus Estates Logo" width="200" />
      </header>
      <h1>Value-Driven Real Estate Investing in Southwest Florida</h1>
      <p>ZenHaus Estates LLC acquires, improves, and scales residential properties across Southwest Florida — from Tampa Bay to Naples.</p>
      <a href="/strategy"><button>Our Strategy</button></a>
      <a href="/contact" style={{ marginLeft: '1rem' }}><button>Book a Call</button></a>
      <footer>© {new Date().getFullYear()} ZenHaus Estates LLC. All rights reserved.</footer>
    </main>
  );
}
