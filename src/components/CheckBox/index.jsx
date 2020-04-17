import React from 'react';
import styles from './styles.module.scss';

const CheckBox = () => {
  return (
    <div className={styles.checkbox}>
      <label htmlFor="checkbox">
        <span className={styles.checkmark}></span>
        <input name="checkbox" type="checkbox" id="checkbox" />
      </label>
    </div>
  );
};

export default CheckBox;
