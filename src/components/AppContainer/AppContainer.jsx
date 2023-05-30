import React from 'react';
import styles from './styles.module.css';

function AppContainer({ children }) {
  return <div className={styles.appContainer}>{children}</div>;
}

export default AppContainer;
