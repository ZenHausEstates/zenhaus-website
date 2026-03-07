import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <Link href="/" className={styles.brand}>
              <span className={styles.brandMark}>⌂</span>
              <span className={styles.brandText}>
                <span className={styles.brandName}>ZenHaus</span>
                <span className={styles.brandSub}>ESTATES</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Gulf Coast real estate intelligence — published monthly for landlords, investors, and property owners from Tampa Bay to Naples.
            </p>
            <div className={styles.rule}></div>
          </div>
          <div>
            <p className={styles.colTitle}>Navigate</p>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/report">The ZenHaus Report</Link></li>
              <li><Link href="/work-with-us">Work With Us</Link></li>
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Contact</p>
            <ul className={styles.links}>
              <li><a href="mailto:hello@zenhausestates.com">hello@zenhausestates.com</a></li>
              <li><Link href="/work-with-us">Sponsorship Options</Link></li>
              <li><Link href="/report#subscribe">Subscribe Free</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2025 ZenHaus Estates LLC. All rights reserved.</span>
          <span className={styles.location}>Venice, Florida</span>
        </div>
      </div>
    </footer>
  );
}
