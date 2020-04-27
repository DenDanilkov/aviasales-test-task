import React, { useEffect } from 'react';
import Header from '../Header';
import ControlsPanel from '../ControlsPanel';
import Tabs from '../Tabs';
import Ticket from '../Ticket/Ticket';
// import { mockedTickets } from '../../mockedData/mockedTickets';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { fetchTicketsRequest } from '../../features/app';
import Loading from '../Loading';
import { getTickets } from '../../utils/selectors';

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTicketsRequest());
  }, []);
  const { tickets, loading } = useSelector(state => ({
    tickets: getTickets(state).slice(0, 6),
    loading: state.tickets.loading,
  }));
  // const loading = useSelector(state => state.tickets.loading);

  return !loading ? (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <ControlsPanel />
        <div className={styles.content}>
          <Tabs />
          {tickets.map(({ price, icon, ticketSections }, index) => (
            <Ticket price={price} icon={icon} ticketSections={ticketSections} key={index} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Layout;
