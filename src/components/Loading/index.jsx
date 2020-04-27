import React from 'react';
import Loader from 'react-loaders';
import styles from './styles.module.scss';

const Loading = () => {
  return <Loader type="ball-spin-fade-loader" className={styles.spin} />;
};
export default Loading;
