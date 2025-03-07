import React from 'react'
import Image from './Image'
import styles from './style.modules/ImageContainer.module.css'
import { register } from 'swiper/element/bundle'
import  'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import imagens from './imagens'
register();

const ImageContainer = () => {
  const containerRef = React.useRef(null);
  const data = imagens;

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
    <div ref={containerRef} className={`${styles.slideContainer} animeLeft`}>
      <Swiper
        slidesPerView={'auto'}
        effect='coverflow'
        grabCursor={true}
        coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        navigation={true}
        pagination={{ clickable: true, type: 'none'}}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {data && data.map(({src, type}, index) => (
          <SwiperSlide key={index}>
            <Image id={src} src={src+type}  type={type}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageContainer