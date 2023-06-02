import React from 'react';
import styles from './styles.module.css';

function Holiday({ children, onClick, pressedBtn }) {
  return (
    <button
      onClick={onClick}
      className={styles.button74}
      style={{ background: pressedBtn }}
    >
      {children}
    </button>
  );
}

export default Holiday;
