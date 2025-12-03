export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* Header with Logo */}
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"   // <-- put your logo file in /public/logo.png 
              alt="ZenHaus Estates"
              className="h-8 w-auto"
            />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase mb-3">
          ZenHaus Estates · Southwest Florida
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
          Sell. Renovate. Invest.
        </h1>
        <p className="text-base md:text-lg text-slate-700 mb-6">
          ZenHaus Estates buys and improves residential properties across Southwest Florida.
          Homeowners get a simple, direct selling option. Contractors get steady renovation work
          with clear communication and fast pay.
        </p>
        <a
          href="https://calendly.com/zenhaus"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-900 hover:text-white transition"
        >
          Book a Call
        </a>
      </section>

      {/* What We Do */}
      <section className="px-6 py-10 md:py-12 border-t border-slate-100 bg-slate-50/60">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">What We Do</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-2">Buy Homes As-Is</h3>
              <p className="text-sm text-slate-700">
                Fast, fair offers. No repairs. No showings. No agent fees.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Renovate Properties</h3>
              <p className="text-sm text-slate-700">
                Reliable local contractors, clear scope of work, streamlined projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Build Long-Term Rentals</h3>
              <p className="text-sm text-slate-700">
                Value-add projects from Tampa Bay to Naples, creating quality rental housing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="px-6 py-10 md:py-12 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Who We Work With</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Homeowners */}
            <div className="border border-slate-200 rounded-2xl p-5 md:p-6">
              <h3 className="font-semibold mb-2">Homeowners</h3>
              <p className="text-sm text-slate-700 mb-4">
                Need a quick or private sale? Want to avoid repairs and uncertainty? We make direct,
                no-pressure offers on your timeline.
              </p>
              <a
                href="https://calendly.com/zenhaus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium underline underline-offset-4"
              >
                Schedule a Seller Call
              </a>
            </div>

            {/* Contractors */}
            <div className="border border-slate-200 rounded-2xl p-5 md:p-6">
              <h3 className="font-semibold mb-2">Contractors</h3>
              <p className="text-sm text-slate-700 mb-4">
                Looking for repeat projects, dependable pay, and straightforward expectations?
                We partner with skilled trades across all renovation scopes.
              </p>
              <a
                href="https://calendly.com/zenhaus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium underline underline-offset-4"
              >
                Schedule a Contractor Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZenHaus */}
      <section className="px-6 py-10 md:py-12 border-t border-slate-100 bg-slate-50/60">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Why ZenHaus</h2>
          <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            <li>Local Southwest Florida investor</li>
            <li>Quick decisions and clear communication</li>
            <li>No-pressure offers for homeowners</li>
            <li>Long-term relationships with reliable contractors</li>
            <li>Focus on value-add and neighborhood improvement</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-12 md:py-16 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">Ready to Connect?</h2>
          <p className="text-sm md:text-base text-slate-700 mb-6">
            Sellers and contractors can book a quick call to see if working with ZenHaus Estates
            is a fit.
          </p>
          <a
            href="https://calendly.com/zenhaus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-900 hover:text-white transition"
          >
            Book on Calendly
          </a>
        </div>
      </section>

    </main>
  );
}
