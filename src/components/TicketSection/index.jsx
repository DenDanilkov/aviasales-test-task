import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const TicketSection = ({ header, content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{header}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

TicketSection.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
};

export default TicketSection;
