import styles from "./Ticker.module.css";

const ITEMS = [
  "Sarasota Pending Sales +33.9% YOY",
  "SW FL Median Rent ~$2,400/mo",
  "Sarasota SFH Median $490K",
  "Fort Myers / Naples Inventory 8.7 Months",
  "48% of North Port Listings With Price Cuts",
  "Rates Forecast 5.8–6.0% by Year-End",
  "Condo Sales +9.1% in Sarasota County",
];

export default function Ticker() {
  // Duplicate for seamless loop
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {allItems.map((item, i) => (
          <span key={i}>
            <span className={styles.item}>{item}</span>
            <span className={styles.sep}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
