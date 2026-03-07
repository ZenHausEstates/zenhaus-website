import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.logo}>
              <Image
                src="/logo_black.jpeg"
                alt="ZenHaus Estates"
                width={160}
                height={56}
                style={{ height: "56px", width: "auto" }}
              />
            </div>
            <p className={styles.tagline}>
              Gulf Coast real estate intelligence — published monthly for
              landlords, investors, and property owners from Tampa Bay to Naples.
            </p>
            <div className={styles.rule} />
          </div>

          <div>
            <div className={styles.colTitle}>Navigate</div>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/report">The ZenHaus Report</Link></li>
              <li><Link href="/work-with-us">Work With Us</Link></li>
            </ul>
          </div>

          <div>
            <div className={styles.colTitle}>Contact</div>
            <ul className={styles.links}>
              <li><a href="mailto:hello@zenhausestates.com">hello@zenhausestates.com</a></li>
              <li><Link href="/work-with-us#sponsor">Sponsorship Options</Link></li>
              <li><Link href="/report#subscribe">Subscribe Free</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 ZenHaus Estates LLC · All rights reserved</span>
          <span className={styles.location}>Venice, Florida</span>
        </div>
      </div>
    </footer>
  );
}
