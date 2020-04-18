import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const CheckBox = ({ labelNumber }) => {
  return (
    <div className={styles.checkbox}>
      <label htmlFor={`checkbox-${labelNumber}`}>
        <input name={`checkbox-${labelNumber}`} type="checkbox" id={`checkbox-${labelNumber}`} />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  labelNumber: PropTypes.number,
};

export default CheckBox;
