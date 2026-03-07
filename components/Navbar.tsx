"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        <span className={styles.brandMark}>⌂</span>
        <span className={styles.brandText}>
          <span className={styles.brandName}>ZenHaus</span>
          <span className={styles.brandSub}>ESTATES</span>
        </span>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/report" className={pathname === "/report" ? styles.active : ""}>
            The Report
          </Link>
        </li>
        <li>
          <Link href="/work-with-us" className={pathname === "/work-with-us" ? styles.active : ""}>
            Work With Us
          </Link>
        </li>
        <li>
          <Link href="/report#subscribe" className={styles.subscribe}>
            Subscribe Free
          </Link>
        </li>
      </ul>
    </nav>
  );
}
