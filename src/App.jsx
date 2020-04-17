import React from 'react';
import Header from './components/Header';
import ControlsPanel from './components/ControlsPanel';
import Tabs from './components/Tabs';
import Ticket from './components/Ticket/Ticket';
import styles from './styles.module.scss';
import { mockedTickets } from './mockedData/mockedTickets';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <ControlsPanel />
        <div className={styles.content}>
          <Tabs />
          {mockedTickets.map(({ price, icon, ticketSections }, index) => (
            <Ticket price={price} icon={icon} ticketSections={ticketSections} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
