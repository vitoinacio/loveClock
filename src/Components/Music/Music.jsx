import React from 'react';
import styles from './style.modules/Music.module.css';

const Music = () => {

  return (
    <div className={styles.container}>
      <audio controls>
        <source src='' type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default Music;