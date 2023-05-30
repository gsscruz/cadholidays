import React from 'react';
import styles from './styles.module.css';

function Layout({ children }) {
  return <main className={styles.main}>{children}</main>;
}

export default Layout;
