import React from 'react';
import styles from './style.modules/Music.module.css';

const Music = () => {
  return (
    <div className={styles.container}>
      <audio controls autoPlay loop>
        <source src="/JaneiroaJaneiro.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
};

export default Music;