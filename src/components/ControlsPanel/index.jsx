import React from 'react';
import styles from './styles.module.scss';
import ControlsItem from '../ControlsItem';

const ControlsPanel = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.title}>Количество пересадок</div>
      <div className={styles.controls}>
        <ControlsItem />
      </div>
    </div>
  );
};

export default ControlsPanel;
