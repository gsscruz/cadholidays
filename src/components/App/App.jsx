import React from 'react';
import styles from './styles.module.css';
import Map from '../Map/Map';
import Layout from '../Layout/Layout';
import HolidayPicker from '../HolidayPicker/HolidayPicker';
import Header from '../Header/Header';
import AppContainer from '../AppContainer/AppContainer';

function App() {
  const [chosenHoliday, setChosenHoliday] = React.useState('');
  const [lang, setLang] = React.useState(false);

  return (
    <AppContainer>
      <Header setLang={setLang} lang={lang} />
      <Layout>
        <Map chosenHoliday={chosenHoliday} />
        <HolidayPicker lang={lang} setChosenHoliday={setChosenHoliday} />
      </Layout>
    </AppContainer>
  );
}

export default App;
