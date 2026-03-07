"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Ticker from "../../components/Ticker";
import styles from "./page.module.css";

const WYG_CARDS = [
  { num: "Section I",   title: "Market Snapshot",  body: "Median prices, days on market, and pending sales across key Gulf Coast metros — pulled fresh from RASM and Florida Realtors." },
  { num: "Section II",  title: "Rental Trends",    body: "Vacancy rates, median rents, and landlord intelligence from Venice to Fort Myers. What to price, what to watch, what to do." },
  { num: "Section III", title: "Area Spotlight",   body: "One market in depth each month — Wellen Park, North Port, Naples, Sarasota. What's moving, what's sitting, and why." },
  { num: "Section IV",  title: "What To Watch",    body: "Three forward-looking signals before next month's issue. Rate forecasts, policy changes, local development — the things that move markets." },
];

export default function Report() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (email) setSubmitted(true);
    // TODO: Replace with Beehiiv embed
  };

  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              The Newsletter
            </div>
            <h1 className={styles.pageTitle}>
              The ZenHaus<br /><em>Report</em>
            </h1>
            <p className={styles.pageBody}>
              Monthly Gulf Coast real estate intelligence — market data, rental trends,
              and area spotlights from Tampa Bay to Naples. Free, independent, no agent agenda.
            </p>
          </div>

          {/* SUBSCRIBE CARD */}
          <div className={styles.subscribeCard} id="subscribe">
            <div className={styles.scEyebrow}>Subscribe Free</div>
            <div className={styles.scTitle}>Join the ZenHaus Report</div>
            <p className={styles.scBody}>One email per month. Data you&apos;ll actually use. Unsubscribe anytime.</p>
            {submitted ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✦</div>
                <p>You&apos;re in. Issue No. 1 is on its way.</p>
              </div>
            ) : (
              <>
                {/* TODO: Replace with Beehiiv embed code */}
                <input
                  type="email"
                  className={styles.scInput}
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className={styles.scBtn} onClick={handleSubscribe}>
                  Subscribe Free →
                </button>
                <p className={styles.scNote}>Free forever · No spam · Unsubscribe anytime</p>
              </>
            )}
          </div>
        </div>
      </section>

      <Ticker />

      {/* WHAT YOU GET */}
      <section className={styles.wygSection}>
        <div className={styles.wygInner}>
          <div className={styles.wygHeader}>
            <div className="section-eyebrow">Every Issue Includes</div>
            <h2 className="section-title">Four sections.<br /><em>No filler.</em></h2>
          </div>
          <div className={styles.wygGrid}>
            {WYG_CARDS.map((c) => (
              <div key={c.num} className={styles.wygCard}>
                <div className={styles.wygNum}>{c.num}</div>
                <div className={styles.wygTitle}>{c.title}</div>
                <p className={styles.wygBody}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section className={styles.archive}>
        <div className={styles.archiveInner}>
          <div className={styles.archiveHeader}>
            <div>
              <div className="section-eyebrow">Issue Archive</div>
              <h2 className="section-title">All <em>Issues</em></h2>
            </div>
            <div className={styles.archiveCount}>1 issue published</div>
          </div>

          {/* FEATURED ISSUE */}
          <div className={styles.issueFeatured}>
            <div>
              <div className={styles.ifBadge}>Latest — March 2026</div>
              <div className={styles.ifHeadline}>
                The Market Is Finding Its Footing — What That Means for Landlords &amp; Buyers Across the Gulf Coast
              </div>
              <p className={styles.ifTeaser}>
                Pending sales up 33.9% year-over-year. Condo volume surging. Prices still adjusting
                but decelerating fast. Here&apos;s what the January 2026 data actually means if you own
                property between Tampa and Naples.
              </p>
              <div className={styles.ifMetaRow}>
                <span className={styles.ifMetaItem}>Issue No. 1</span>
                <span className={styles.ifMetaItem}>Market Update</span>
                <span className={styles.ifMetaItem}>Spotlight: Wellen Park</span>
              </div>
            </div>
            <a href="/report/march-2026" className={styles.readBtn}>
              <span className={styles.readBtnArrow}>→</span>
              Read Issue
            </a>
          </div>

          {/* UPCOMING */}
          <div className={styles.archiveGrid}>
            <div className={`${styles.archiveCard} ${styles.coming}`}>
              <div className={styles.acMeta}>
                <span className={styles.acTag}>Coming Soon</span>
                <span className={styles.acDate}>April 2026</span>
              </div>
              <div className={styles.acHeadline}>Issue No. 2 — Coming April 2026</div>
              <p className={styles.acTeaser}>Subscribe to get it in your inbox the day it drops.</p>
            </div>
            <div className={`${styles.archiveCard} ${styles.coming}`}>
              <div className={styles.acMeta}>
                <span className={styles.acTag}>Coming Soon</span>
                <span className={styles.acDate}>May 2026</span>
              </div>
              <div className={styles.acHeadline}>Issue No. 3 — Coming May 2026</div>
              <p className={styles.acTeaser}>Subscribe to get it in your inbox the day it drops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSOR STRIP */}
      <div className={styles.sponsorStrip}>
        <div className={styles.sponsorStripInner}>
          <div>
            <div className={styles.ssEyebrow}>Sponsorship</div>
            <div className={styles.ssTitle}>
              Put your business in front of<br /><em>Gulf Coast property owners.</em>
            </div>
            <p className={styles.ssBody}>
              Monthly sponsorship spots available for mortgage brokers, contractors, title companies,
              inspectors, and insurance agents serving the Tampa–Naples corridor.
            </p>
          </div>
          <a href="/work-with-us#sponsor" className={styles.ssBtn}>View Options →</a>
        </div>
      </div>

      <Footer />
    </>
  );
}
