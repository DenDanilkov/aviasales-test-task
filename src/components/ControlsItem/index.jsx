import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import CheckBox from '../CheckBox';

const ControlsItem = ({ name, labelNumber }) => {
  return (
    <div className={styles.controlsItem}>
      <CheckBox labelNumber={labelNumber} />
      <div className={styles.title}>{name}</div>
    </div>
  );
};

ControlsItem.propTypes = {
  name: PropTypes.string,
  labelNumber: PropTypes.number,
};

export default ControlsItem;
