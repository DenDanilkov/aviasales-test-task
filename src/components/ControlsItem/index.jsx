import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import CheckBox from '../CheckBox';

const ControlsItem = ({ item }) => {
  return (
    <div className={styles.controlsItem}>
      <CheckBox />
      <div>{item.name}</div>
    </div>
  );
};

ControlsItem.propTypes = {
  item: PropTypes.array,
};

export default ControlsItem;
