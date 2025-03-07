import React from 'react';
import styles from './style.modules/Image.module.css';

const Image = ({ type, src, id }) => {
  const handleError = (id) => {
    console.error(`Erro ao carregar a mídia com id: ${id}`);
  };

  return (
    <>
      {type === '.jpg' ? (
        <img
          src={src}
          className={styles.image}
          alt={`Imagem ${id}`}
          onError={() => handleError(id)}
        />
      ) : type === '.mp4' ? (
        <video
          src={src}
          className={styles.image}
          autoPlay
          loop
          muted
          playsInline
          onError={() => handleError(id)}
        />
      ) : (
        <p>Tipo de mídia não suportado</p> 
      )}
    </>
  );
};

export default Image;