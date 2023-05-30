import React from 'react';
import styles from './styles.module.css';
import Map from '../Map/Map';
import Layout from '../Layout/Layout';
import HolidayPicker from '../HolidayPicker/HolidayPicker';
import Header from '../Header/Header';
import AppContainer from '../AppContainer/AppContainer';

function App() {
  return (
    <AppContainer>
      <Header />
      <Layout>
        <Map />
        <HolidayPicker />
      </Layout>
    </AppContainer>
  );
}

export default App;
