import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-zenhaus-black sticky top-0 z-50 border-b border-zenhaus-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="ZenHaus Estates"
              width={48}
              height={48}
              className="rounded"
              priority
            />
            <span className="text-zenhaus-gold text-xl font-medium tracking-tight">
              ZenHaus
            </span>
          </div>
          <a
            href="#contact"
            className="text-zenhaus-gold text-sm border-b border-zenhaus-gold pb-0.5 hover:opacity-80 transition-opacity"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-medium leading-tight mb-6 text-zenhaus-black">
            Real estate investment across Southwest Florida
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            ZenHaus LLC acquires and manages investment properties throughout
            the Gulf Coast region. We source opportunities through multiple
            channels, conduct rigorous analysis, and execute strategic
            acquisitions aligned with long-term portfolio objectives.
          </p>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-zenhaus-black">
            Our investment criteria
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <CriteriaCard
              title="Property types"
              description="Single-family homes, multi-family buildings, vacant land, and commercial properties suitable for conversion."
            />
            <CriteriaCard
              title="Condition"
              description="Move-in ready, light renovations, major rehabs, and distressed properties. We evaluate every condition."
            />
            <CriteriaCard
              title="Geography"
              description="50-mile radius of Venice, FL. Tampa Bay through Naples corridor. Deep local market knowledge."
            />
            <CriteriaCard
              title="Deal sources"
              description="MLS listings, pocket deals, auctions, foreclosures, estate sales, and bank-owned properties."
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-medium mb-8 text-zenhaus-black">
            Why work with ZenHaus
          </h2>
          <div className="space-y-6">
            <WhyItem
              title="Serious capital and commitment"
              description="We operate with available funds and a defined investment strategy. Quick analysis, decisive action, reliable closings."
            />
            <WhyItem
              title="Market expertise"
              description="Extensive knowledge of Southwest Florida neighborhoods, rental economics, appreciation potential, and development corridors."
            />
            <WhyItem
              title="Direct engagement"
              description="Professional relationships with agents, wholesalers, and off-market sources. Transparent communication throughout the process."
            />
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="contact" className="bg-zenhaus-black py-16 px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-medium text-zenhaus-gold mb-4">
            Have an opportunity?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Schedule a consultation to discuss the property. We evaluate
            opportunities promptly and provide fair, professional offers.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/zenhaus"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/images/logo.jpeg"
            alt="ZenHaus Estates"
            width={60}
            height={60}
            className="mx-auto mb-4 rounded"
          />
          <p className="text-sm text-gray-600 mb-2">ZenHaus LLC</p>
          <a
            href="mailto:hello@zenhausestates.com"
            className="text-sm text-gray-500 hover:text-zenhaus-gold transition-colors"
          >
            hello@zenhausestates.com
          </a>
          <p className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} ZenHaus LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function CriteriaCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-zenhaus-gold text-sm font-medium uppercase tracking-wider mb-3">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

function WhyItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-l-4 border-zenhaus-gold pl-6">
      <h3 className="font-medium mb-2 text-zenhaus-black">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
