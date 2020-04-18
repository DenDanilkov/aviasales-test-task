import React from 'react';
import styles from './styles.module.scss';
import ControlsItem from '../ControlsItem';
import { controlsItems } from '../../mockedData/controlsItems';

const ControlsPanel = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.title}>Количество пересадок</div>
      <div className={styles['control-items']}>
        {controlsItems.map((item, index) => (
          <ControlsItem name={item} key={index} labelNumber={index} />
        ))}
      </div>
    </div>
  );
};

export default ControlsPanel;
