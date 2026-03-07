"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ticker from "../components/Ticker";
import styles from "./page.module.css";

const CITIES = ["Tampa", "St. Pete", "Sarasota", "Venice", "North Port", "Wellen Park", "Fort Myers", "Naples"];

const GEO_CITIES = [
  { name: "Tampa Bay",   county: "Hillsborough" },
  { name: "St. Pete",    county: "Pinellas" },
  { name: "Sarasota",    county: "Sarasota Co." },
  { name: "Venice",      county: "Sarasota Co." },
  { name: "North Port",  county: "Sarasota Co." },
  { name: "Wellen Park", county: "Charlotte Co." },
  { name: "Fort Myers",  county: "Lee County" },
  { name: "Naples",      county: "Collier Co." },
];

const PILLARS = [
  { num: "01", title: "Real Local Data",      body: "Sourced monthly from RASM, Florida Realtors, Redfin, and Rentometer. Actual Gulf Coast numbers — not national averages that don't apply here." },
  { num: "02", title: "No Agent Agenda",      body: "Independent analysis. No listings to push, no commissions to earn. Just the data that matters to landlords, investors, and owners in this market." },
  { num: "03", title: "Actionable Every Month", body: "Each issue closes with what the data means for you — whether you own one rental in Venice or a portfolio from Tampa to Naples." },
];

const WHY_ITEMS = [
  { num: "I",   title: "Market Snapshot",  body: "Median prices, days on market, and pending sales across key Gulf Coast metros." },
  { num: "II",  title: "Rental Trends",    body: "Vacancy rates, median rents, and landlord intel from Venice to Fort Myers." },
  { num: "III", title: "Area Spotlight",   body: "One neighborhood or market in depth — Wellen Park, Naples, North Port, and beyond." },
  { num: "IV",  title: "What To Watch",    body: "Three forward-looking signals before next month's issue." },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (email) setSubmitted(true);
    // TODO: Replace with Beehiiv form submission
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Gulf Coast Real Estate Intelligence
          </div>
          <h1 className={styles.heroTitle}>
            <strong>The market report</strong>
            <em>Tampa Bay to Naples</em>
            actually reads.
          </h1>
          <p className={styles.heroSub}>
            Monthly real estate intelligence for landlords, investors, and Gulf Coast
            property owners. Local data, no-fluff analysis, no agent agenda.
          </p>
          <div className={styles.citiesRow}>
            {CITIES.map((c) => <span key={c} className={styles.cityTag}>{c}</span>)}
          </div>
        </div>

        {/* SIGNUP CARD */}
        <div className={styles.signupPanel} id="subscribe">
          <div className={styles.spEyebrow}>Free Monthly Newsletter</div>
          <div className={styles.spTitle}>The ZenHaus Report</div>
          <p className={styles.spDesc}>
            Market data, rental trends, and local insight — delivered once a month.
            No spam. No pitch. Just the numbers that matter on the Gulf Coast.
          </p>
          {submitted ? (
            <div className={styles.successMsg}>
              <div className={styles.successIcon}>✦</div>
              <p>You&apos;re in. Issue No. 1 is on its way to your inbox.</p>
            </div>
          ) : (
            <>
              {/* TODO: Replace input + button with Beehiiv embed code */}
              <label className={styles.formLabel}>Your Email</label>
              <input
                type="email"
                className={styles.formInput}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className={styles.formBtn} onClick={handleSubscribe}>
                Subscribe Free →
              </button>
              <p className={styles.formNote}>Free forever · Unsubscribe anytime</p>
            </>
          )}
          <ul className={styles.spPerks}>
            {[
              "Monthly market snapshots across SW Florida",
              "Rental rate trends & landlord intelligence",
              "Area spotlights from Tampa Bay to Naples",
              "Sponsor opportunities for local businesses",
            ].map((p) => (
              <li key={p}><span className={styles.perkDot}>◆</span>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <Ticker />

      {/* PILLARS */}
      <section className={styles.pillars}>
        <div className={styles.pillarsInner}>
          <div className={styles.pillarsHeader}>
            <div>
              <div className="section-eyebrow">What This Is</div>
              <h2 className="section-title">
                Built for people<br />who <em>own here.</em>
              </h2>
            </div>
            <p className={styles.pillarsHeaderBody}>
              Most real estate coverage is national noise. The ZenHaus Report covers
              the stretch of Gulf Coast between Tampa Bay and Naples — with data pulled
              fresh each month and no brokerage agenda behind it.
            </p>
          </div>
          <div className={styles.pillarsGrid}>
            {PILLARS.map((p) => (
              <div key={p.num} className={styles.pillar}>
                <div className={styles.pillarNum}>{p.num}</div>
                <div className={styles.pillarLine} />
                <div className={styles.pillarTitle}>{p.title}</div>
                <p className={styles.pillarBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ISSUE */}
      <section className={styles.latest}>
        <div className={styles.latestInner}>
          <div className={styles.latestHeader}>
            <div className={styles.latestTitle}>Latest <span>Issue</span></div>
            <a href="/report" className={styles.latestAll}>View All Issues →</a>
          </div>
          <div className={styles.issueCard}>
            <div>
              <div className={styles.issueMeta}>
                <span className={styles.issueTag}>Market Update</span>
                <span className={styles.issueMeta2}>March 2026 · Issue No. 1</span>
              </div>
              <div className={styles.issueHeadline}>
                The Market Is Finding Its Footing — What That Means for Landlords &amp; Buyers Across the Gulf Coast
              </div>
              <p className={styles.issueTeaser}>
                Pending sales up 33.9% year-over-year. Condo volume surging. Prices still adjusting
                but decelerating fast. Here&apos;s what the January 2026 data actually means if you own
                property between Tampa and Naples.
              </p>
            </div>
            <a href="/report/march-2026" className={styles.readBtn}>
              <span className={styles.readBtnArrow}>→</span>
              Read Issue
            </a>
          </div>
        </div>
      </section>

      {/* GEO STRIP */}
      <div className={styles.geoStrip}>
        <div className={styles.geoInner}>
          <div className={styles.geoLeft}>
            <div className={styles.geoLabel}>Coverage Area</div>
            <div className={styles.geoDesc}>The full Gulf Coast corridor, covered every month.</div>
          </div>
          <div className={styles.geoCitiesGrid}>
            {GEO_CITIES.map((c) => (
              <div key={c.name} className={styles.geoCityCard}>
                <div className={styles.geoCityName}>{c.name}</div>
                <div className={styles.geoCityCounty}>{c.county}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div>
            <div className="section-eyebrow">Why This Exists</div>
            <h2 className={styles.whyTitle}>
              No pitch.<br />No listings.<br /><em>Just the data.</em>
            </h2>
            <p className={styles.whyBody}>
              Most market newsletters exist to sell you something — a listing, a loan, a management
              contract. This one doesn&apos;t. The ZenHaus Report is independent Gulf Coast real estate
              intelligence, published monthly for owners who want the numbers without the noise.
            </p>
            <blockquote className={styles.whyQuote}>
              &ldquo;The headlines cover Florida. We cover the 200-mile stretch of Gulf Coast where
              people actually own property.&rdquo;
            </blockquote>
          </div>
          <div className={styles.whyPanel}>
            <div className={styles.whyPanelTitle}>Each Issue Covers</div>
            <ul className={styles.whyItems}>
              {WHY_ITEMS.map((item) => (
                <li key={item.num} className={styles.whyItem}>
                  <span className={styles.whyItemIcon}>{item.num}</span>
                  <div>
                    <strong>{item.title}</strong>
                    {item.body}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPONSOR */}
      <section className={styles.sponsor}>
        <div className={styles.sponsorInner}>
          <div className={styles.sponsorOrnament}>◆</div>
          <div className={styles.sponsorEyebrow}>Partner With Us</div>
          <h2 className={styles.sponsorTitle}>
            Reach Gulf Coast<br /><em>landlords &amp; investors</em>
          </h2>
          <p className={styles.sponsorBody}>
            Sponsor a monthly issue and place your business in front of property owners,
            landlords, and real estate investors across the full Tampa–Naples corridor.
          </p>
          <div className={styles.sponsorTags}>
            {["Mortgage Brokers","Contractors","Title Companies","Property Inspectors","Insurance Agents","Property Managers"].map((t) => (
              <span key={t} className={styles.sponsorTag}>{t}</span>
            ))}
          </div>
          <a href="/work-with-us#sponsor" className={styles.sponsorBtn}>
            Inquire About Sponsorship →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
