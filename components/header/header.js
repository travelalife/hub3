import styles from './header.module.css';
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
          <Link href="/" className={styles.tabItem}>Explore</Link>
          <Link href="/all/my" className={styles.tabItem}>My</Link>
      </div>
    </div>
  );
}
