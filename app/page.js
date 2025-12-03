import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/zenhaus-logo.png" // <-- change to your actual logo path if different
              alt="ZenHaus Estates"
              width={260}
              height={120}
              className="mx-auto h-auto w-auto"
              priority
            />
          </div>

          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
            ZenHaus Estates · Southwest Florida
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Sell. Renovate. Invest.
          </h1>

          <p className="text-base md:text-lg text-zinc-300 mb-8 leading-relaxed">
            ZenHaus Estates buys and improves residential properties across Southwest Florida.
            Homeowners get a simple, direct selling option. Contractors get steady renovation
            work with clear communication and fast pay.
          </p>

          <a
            href="https://calendly.com/zenhaus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-100 px-6 py-2.5 text-sm font-medium hover:bg-zinc-100 hover:text-black transition"
          >
            Book a Call
          </a>
        </div>
      </section>

      {/* Content wrapper */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start">
          {/* Left column: What We Do + Why */}
          <div className="space-y-10">
            {/* What We Do */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">What We Do</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <h3 className="font-semibold mb-2 text-sm md:text-base">
                    Buy Homes As-Is
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-300">
                    Fast, fair offers. No repairs. No showings. No agent fees.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <h3 className="font-semibold mb-2 text-sm md:text-base">
                    Renovate Properties
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-300">
                    Reliable local contractors, clear scope of work, streamlined projects.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
                  <h3 className="font-semibold mb-2 text-sm md:text-base">
                    Build Long-Term Rentals
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-300">
                    Value-add projects from Tampa Bay to Naples, creating quality rental housing.
                  </p>
                </div>
              </div>
            </div>

            {/* Why ZenHaus */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Why ZenHaus</h2>
              <ul className="grid gap-2 text-xs md:text-sm text-zinc-300 md:grid-cols-2">
                <li>Local Southwest Florida investor</li>
                <li>Quick decisions and clear communication</li>
                <li>No-pressure offers for homeowners</li>
                <li>Long-term relationships with reliable contractors</li>
                <li>Focus on value-add and neighborhood improvement</li>
              </ul>
            </div>
          </div>

          {/* Right column: Who We Work With */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Who We Work With</h2>

            {/* Homeowners card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h3 className="font-semibold mb-2">Homeowners</h3>
              <p className="text-xs md:text-sm text-zinc-300 mb-4">
                Need a quick or private sale? Want to avoid repairs and uncertainty?
                We make direct, no-pressure offers on your timeline.
              </p>
              <a
                href="https://calendly.com/zenhaus"
                target="_blank"
                rel="noreferrer"
                className="text-xs md:text-sm font-medium underline underline-offset-4"
              >
                Schedule a Seller Call
              </a>
            </div>

            {/* Contractors card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
              <h3 className="font-semibold mb-2">Contractors</h3>
              <p className="text-xs md:text-sm text-zinc-300 mb-4">
                Looking for repeat projects, dependable pay, and straightforward expectations?
                We partner with skilled trades across all renovation scopes.
              </p>
              <a
                href="https://calendly.com/zenhaus"
                target="_blank"
                rel="noreferrer"
                className="text-xs md:text-sm font-medium underline underline-offset-4"
              >
                Schedule a Contractor Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Ready to Connect?</h2>
          <p className="text-xs md:text-sm text-zinc-300 mb-5">
            Sellers and contractors can book a quick call to see if working with ZenHaus Estates is a fit.
          </p>
          <a
            href="https://calendly.com/zenhaus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-zinc-100 px-6 py-2.5 text-sm font-medium hover:bg-zinc-100 hover:text-black transition"
          >
            Book on Calendly
          </a>
        </div>
      </section>
    </main>
  );
}
