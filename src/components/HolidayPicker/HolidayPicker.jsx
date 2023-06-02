import React from 'react';
import styles from './styles.module.css';
import { canadianHolidays } from '../../utils/holidays';
import Holiday from '../Holiday/Holiday';

function HolidayPicker({ setChosenHoliday, lang }) {
  const [isActive, setIsActive] = React.useState(false);

  const [activeButton, setActiveButton] = React.useState(null);
  const handleClick = (buttonId) => setActiveButton(buttonId);

  return (
    <div className={styles.holidayPicker}>
      <h1 className={styles.holidaysTitle}>
        {lang
          ? 'Découvrez quelles provinces célèbrent les jours fériés ci-dessous.'
          : 'Find out which provinces celebrate the holidays below'}
      </h1>
      <div className={styles.holidays}>
        {canadianHolidays.map((holiday) => {
          return (
            <Holiday
              key={holiday.id}
              pressedBtn={activeButton === holiday.id ? '#D81A0D' : '#fbeee0'}
              onClick={() => {
                handleClick(holiday.id);
                setChosenHoliday(holiday);
              }}
            >
              {lang ? holiday.nameFr : holiday.nameEn}
              <br />
              {holiday.date}
            </Holiday>
          );
        })}
      </div>
    </div>
  );
}

export default HolidayPicker;
