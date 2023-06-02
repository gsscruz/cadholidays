import React from 'react';
import styles from './styles.module.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { canadianHolidays } from '../../utils/holidays';

function HolidayPicker({ setChosenHoliday, lang }) {
  return (
    <div className={styles.holidayPicker}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>Pick a holiday!</DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Arrow />
            <DropdownMenu.Group className={styles.dropdownGroup}>
              {canadianHolidays.map((holiday) => {
                return (
                  <React.Fragment key={holiday.id}>
                    <DropdownMenu.Item
                      onSelect={() => setChosenHoliday(holiday)}
                    >
                      {lang ? holiday.nameFr : holiday.nameEn}
                      <br />
                      {holiday.date}
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator style={{ fontSize: '15px' }}>
                      -------------------------
                    </DropdownMenu.Separator>
                  </React.Fragment>
                );
              })}
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default HolidayPicker;
