import React from 'react';
import styles from './styles.module.css';

import ComponentA from '../ComponentA/ComponentA';
import ComponentB from '../ComponentB/ComponentB';

function App() {
  return (
    <>
      <h1 className={styles.example0}>Vite + React</h1>
      <ComponentA />
      <ComponentB />
    </>
  );
}

export default App;
