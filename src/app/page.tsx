import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homepage_layer}>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
      <div className={styles.card}></div>
    </div>
  );
}
