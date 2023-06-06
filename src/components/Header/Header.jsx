import React from 'react';
import styles from './styles.module.css';
function Header({ lang, setLang }) {
  return (
    <div className={styles.headerContainer}>
      <div></div>
      <header className={styles.header}>CANholidays</header>
      <button
        className={styles.langBtn}
        onClick={() => setLang((prevVal) => !prevVal)}
      >
        {lang === true ? 'EN' : 'FR'}
      </button>
    </div>
  );
}

export default Header;
