import React, { useEffect } from 'react';
import Header from '../Header';
import ControlsPanel from '../ControlsPanel';
import Tabs from '../Tabs';
import Ticket from '../Ticket/Ticket';
import { mockedTickets } from '../../mockedData/mockedTickets';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { fetchTicketsRequest } from '../../features/app';

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTicketsRequest());
  }, []);
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

export default Layout;
