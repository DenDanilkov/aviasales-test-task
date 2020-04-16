import React from 'react';
import styles from './styles.module.scss';
import Header from './components/Header';
import ControlsPanel from './components/ControlsPanel';
import Tabs from './components/Tabs';
import Ticket from './components/Ticket/Ticket';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <ControlsPanel />
        <div className={styles.content}>
          <Tabs />
          <Ticket />
        </div>
      </div>
    </div>
  );
};

export default App;
