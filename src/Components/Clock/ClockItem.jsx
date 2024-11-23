import React from 'react';
import styles from './style.modules/ClockItem.module.css';

const ClockItem = ({type, time}) => {

  return (
    <div className={styles.card}>
      <h2>{time}</h2>
      <p>{type}</p>
    </div>
  );
};

export default ClockItem;