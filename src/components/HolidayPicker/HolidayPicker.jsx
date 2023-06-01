import React from 'react';
import styles from './styles.module.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { canadianHolidays } from '../../utils/holidays';

function HolidayPicker({ setChosenHoliday, lang }) {
  return (
    <>
      <div className={styles.holidayPicker}>
        <form>
          <label htmlFor='datePicker'></label>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className={styles.holidayPicker}>
              Pick a holiday!
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className={styles.holidayPicker}>
                <DropdownMenu.Arrow />
                <DropdownMenu.Group>
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
        </form>
      </div>
    </>
  );
}

export default HolidayPicker;
