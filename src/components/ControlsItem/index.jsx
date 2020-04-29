import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import CheckBox from '../CheckBox';

const ControlsItem = ({ name, labelNumber, filtersMember }) => {
  return (
    <div className={styles.controlsItem}>
      <CheckBox labelNumber={labelNumber} filtersMember={filtersMember} />
      <div className={styles.title}>{name}</div>
    </div>
  );
};

ControlsItem.propTypes = {
  filtersMember: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  name: PropTypes.string,
  labelNumber: PropTypes.number,
};

export default ControlsItem;
