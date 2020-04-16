import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Tab = ({ text }) => {
  return <div className={styles.tab}>{text}</div>;
};

Tab.propTypes = {
  text: PropTypes.string,
};

export default Tab;
