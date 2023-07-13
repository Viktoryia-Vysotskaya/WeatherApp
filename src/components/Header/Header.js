import styles from './Header.module.scss';

const Header = () => (
  <header>
    <h1 className={styles.title}>
      <span className={styles.wave}>W</span>
      <span className={styles.wave}>e</span>
      <span className={styles.wave}>a</span>
      <span className={styles.wave}>t</span>
      <span className={styles.wave}>h</span>
      <span className={styles.wave}>e</span>
      <span className={styles.wave}>r</span>
      <span className={styles.wave}>A</span>
      <span className={styles.wave}>p</span>
      <span className={styles.wave}>p</span>
    </h1>
  </header>
);

export default Header;
