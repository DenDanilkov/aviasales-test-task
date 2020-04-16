import React from 'react';
import styles from './styles.module.scss';
import Tab from '../Tab';

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <Tab text={'Cамый дешевый'} />
      <Tab text={'Самый быстрый'} />
    </div>
  );
};

export default Tabs;
