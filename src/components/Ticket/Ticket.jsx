import React from 'react';
import styles from './styles.module.scss';
import TicketSection from '../TicketSection';
import PropTypes from 'prop-types';

const Ticket = ({ price, header, content }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.price}>{price}</div>
      <div className={styles.sections}>
        <TicketSection header={header} content={content} />
      </div>
    </div>
  );
};

Ticket.propTypes = {
  price: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
};

export default Ticket;
