"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const SPONSOR_TIERS = [
  {
    tier: "Logo Sponsor",
    price: "$200",
    period: "per issue / per month",
    featured: false,
    features: [
      "Logo in newsletter footer",
      "Link to your website",
      "Listed in "This Issue's Partners" section",
      "One issue minimum",
    ],
  },
  {
    tier: "Feature Sponsor",
    price: "$400",
    period: "per issue / per month",
    featured: true,
    features: [
      "Dedicated sponsor spotlight section",
      "Your logo + 60-word description",
      "Link to your website or offer",
      "Highlighted in newsletter header",
      "Social mention included",
    ],
  },
  {
    tier: "Annual Partner",
    price: "$3,600",
    period: "per year (12 issues)",
    featured: false,
    features: [
      "Feature sponsor in all 12 issues",
      "Permanent partner listing on website",
      "Priority placement every month",
      "Quarterly performance summary",
      "Save $1,200 vs. monthly rate",
    ],
  },
];

const SERVICES = [
  { num: "I",   title: "Market Consulting Call",      body: "A focused one-hour call covering the Gulf Coast market as it applies to your situation — whether you're deciding to sell, hold, rent, or invest in the Tampa–Naples corridor.", detail: "Paid · 1 Hour · Via Calendly" },
  { num: "II",  title: "Vendor & Contractor Referrals", body: "Need a reliable contractor, inspector, cleaner, or property service in Venice or Southwest Florida? We can connect you with vetted local trades we've worked with directly.", detail: "Free · Response within 48hrs" },
  { num: "III", title: "Landlord Strategy Session",   body: "Thinking about pricing your rental, preparing for tenant turnover, or repositioning a property? A focused call to work through your specific rental situation in the current SW FL market.", detail: "Paid · 1 Hour · Via Calendly" },
  { num: "IV",  title: "Custom Market Report",        body: "Need a deeper dive on a specific city or submarket — North Port, Wellen Park, Naples, Fort Myers? We can pull and analyze targeted data beyond what's covered in the monthly issue.", detail: "Paid · Delivered in 5 Business Days" },
];

const SPONSOR_TYPES = ["Mortgage Brokers","General Contractors","Title Companies","Home Inspectors","Insurance Agents","Property Managers","Landscapers","HVAC & Plumbing","Real Estate Attorneys","Moving Companies"];

export default function WorkWithUs() {
  const [formData, setFormData] = useState({ name: "", email: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email) setSent(true);
    // TODO: Wire up to Formspree or Resend
  };

  return (
    <>
      <Navbar />

      {/* PAGE HEADER */}
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Partner &amp; Connect
          </div>
          <h1 className={styles.pageTitle}>
            Work With<br /><em>ZenHaus</em>
          </h1>
          <p className={styles.pageBody}>
            Sponsor the ZenHaus Report and reach Gulf Coast landlords and investors.
            Or reach out directly for consulting, vendor referrals, and market questions.
          </p>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section className={styles.sponsorSection} id="sponsor">
        <div className={styles.sponsorInner}>
          <div className={styles.sponsorHeader}>
            <div>
              <div className="section-eyebrow">Sponsorship</div>
              <h2 className="section-title">Reach <em>Gulf Coast</em><br />property owners.</h2>
            </div>
            <p className={styles.sponsorHeaderBody}>
              The ZenHaus Report goes out monthly to landlords, investors, and property owners across
              the Tampa–Naples corridor. These are people who make purchasing decisions — contractors,
              inspectors, lenders, and more.
            </p>
          </div>

          <div className={styles.sponsorGrid}>
            {SPONSOR_TIERS.map((t) => (
              <div key={t.tier} className={`${styles.sponsorCard} ${t.featured ? styles.featured : ""}`}>
                {t.featured && <div className={styles.featuredBadge}>Most Popular</div>}
                <div className={styles.scTier}>{t.tier}</div>
                <div className={styles.scPrice}>{t.price}</div>
                <div className={styles.scPeriod}>{t.period}</div>
                <div className={styles.scDivider} />
                <ul className={styles.scFeatures}>
                  {t.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <a href="#contact" className={styles.scBtn}>Inquire →</a>
              </div>
            ))}
          </div>

          <div className={styles.sponsorTypesWrap}>
            <div className={styles.stt}>Who Typically Sponsors</div>
            <div className={styles.sponsorTypes}>
              {SPONSOR_TYPES.map((t) => <span key={t} className={styles.sponsorTypeTag}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.servicesInner}>
          <div className={styles.servicesHeader}>
            <div className="section-eyebrow" style={{ color: "var(--gold)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: "14px", display: "flex", alignItems: "center", gap: "12px" }}>
              Other Ways to Work Together
              <span style={{ flex: 1, height: "1px", background: "var(--rule)", display: "block" }} />
            </div>
            <h2 className={styles.servicesTitle}>Beyond the <em>newsletter.</em></h2>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <div key={s.num} className={styles.serviceCard}>
                <div className={styles.serviceNum}>{s.num}</div>
                <div className={styles.serviceTitle}>{s.title}</div>
                <p className={styles.serviceBody}>{s.body}</p>
                <div className={styles.serviceDetail}>{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.contactInner}>
          <div>
            <div className="section-eyebrow">Get In Touch</div>
            <h2 className={styles.contactTitle}>Let&apos;s talk<br /><em>Gulf Coast.</em></h2>
            <p className={styles.contactBody}>
              Whether you&apos;re interested in sponsoring the newsletter, have a market question,
              or want to explore consulting — reach out and we&apos;ll get back to you within 48 hours.
            </p>
            <ul className={styles.contactDetails}>
              <li className={styles.contactItem}>
                <span className={styles.cdIcon}>◆</span>
                <div>
                  <div className={styles.cdLabel}>Email</div>
                  <div className={styles.cdValue}><a href="mailto:hello@zenhausestates.com">hello@zenhausestates.com</a></div>
                </div>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.cdIcon}>◆</span>
                <div>
                  <div className={styles.cdLabel}>Coverage Area</div>
                  <div className={styles.cdValue}>Tampa Bay · Sarasota · Venice · Fort Myers · Naples</div>
                </div>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.cdIcon}>◆</span>
                <div>
                  <div className={styles.cdLabel}>Response Time</div>
                  <div className={styles.cdValue}>Within 48 business hours</div>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.contactForm}>
            <div className={styles.cfTitle}>Send a Message</div>
            {sent ? (
              <div className={styles.cfSuccess}>
                <div className={styles.cfSuccessIcon}>✦</div>
                <p>Message received. We&apos;ll be in touch within 48 hours.</p>
              </div>
            ) : (
              <>
                <div className={styles.cfRow}>
                  <label className={styles.cfLabel}>Your Name</label>
                  <input name="name" type="text" className={styles.cfInput} placeholder="Jane Smith" value={formData.name} onChange={handleChange} />
                </div>
                <div className={styles.cfRow}>
                  <label className={styles.cfLabel}>Email Address</label>
                  <input name="email" type="email" className={styles.cfInput} placeholder="jane@example.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className={styles.cfRow}>
                  <label className={styles.cfLabel}>I&apos;m Interested In</label>
                  <select name="interest" className={styles.cfSelect} value={formData.interest} onChange={handleChange}>
                    <option value="" disabled>Select an option</option>
                    <option>Newsletter Sponsorship</option>
                    <option>Market Consulting Call</option>
                    <option>Landlord Strategy Session</option>
                    <option>Vendor / Contractor Referral</option>
                    <option>Custom Market Report</option>
                    <option>Something Else</option>
                  </select>
                </div>
                <div className={styles.cfRow}>
                  <label className={styles.cfLabel}>Message</label>
                  <textarea name="message" className={styles.cfTextarea} placeholder="Tell us a bit about what you're looking for..." value={formData.message} onChange={handleChange} />
                </div>
                <button className={styles.cfSubmit} onClick={handleSubmit}>Send Message →</button>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
