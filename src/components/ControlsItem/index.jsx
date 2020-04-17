import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import CheckBox from '../CheckBox';

const ControlsItem = ({ name }) => {
  return (
    <div className={styles.controlsItem}>
      <CheckBox />
      <div className={styles.title}>{name}</div>
    </div>
  );
};

ControlsItem.propTypes = {
  name: PropTypes.array,
};

export default ControlsItem;
