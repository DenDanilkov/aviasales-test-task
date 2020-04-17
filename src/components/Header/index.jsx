import React from 'react';
import styles from './styles.module.scss';
import img from '../../files/images/logoHead.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={img} alt="" />
    </div>
  );
};

export default Header;
