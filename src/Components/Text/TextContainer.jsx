import React from 'react'
import TitleText from './TitleText'
import Text from './Text'
import styles from './style.modules/TextContainer.module.css'


const TextContainer = () => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animeLeft');
          } else {
            entry.target.classList.remove('animeLeft');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className={`${styles.container} animeLeft`}>
      <TitleText title="Kesia & Victor" />
      <Text />
    </section>
  )
}

export default TextContainer