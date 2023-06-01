import React from 'react';
import styles from './styles.module.css';
function Header({ lang, setLang }) {
  console.log('qualeh ', lang);
  return (
    <div className={styles.headerContainer}>
      <div></div>
      <header className={styles.header}>CAholidays</header>
      <button onClick={() => setLang((prevVal) => !prevVal)}>
        {lang === true ? 'EN' : 'FR'}
      </button>
    </div>
  );
}

export default Header;
