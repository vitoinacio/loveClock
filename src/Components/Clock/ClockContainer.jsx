import React from 'react';
import ClockItem from './ClockItem';
import styles from './style.modules/ClockContainer.module.css';
import {
  format,
  differenceInSeconds,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from 'date-fns';

const ClockContainer = () => {
  const targetDate = new Date('2023-10-27T18:30:00');
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [difference, setDifference] = React.useState([]);
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

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);

      const diffInYears = differenceInYears(targetDate, now);
      const diffInMonths = differenceInMonths(targetDate, now) % 12;
      const diffInDays = differenceInDays(targetDate, now) % 30;
      const diffInHours = differenceInHours(targetDate, now) % 24;
      const diffInMinutes = differenceInMinutes(targetDate, now) % 60;
      const diffInSeconds = differenceInSeconds(targetDate, now) % 60;

      setDifference([
        { type: 'Anos', time: -diffInYears },
        { type: 'Meses', time: -diffInMonths },
        { type: 'Dias', time: -diffInDays },
        { type: 'Horas', time: -diffInHours },
        { type: 'Minutos', time: -diffInMinutes },
        { type: 'Segundos', time: -diffInSeconds },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div ref={containerRef} className={`${styles.container} animeLeft`}>
      <h1 className={styles.title}>Juntos há</h1>
      {difference.map((item, index) => {
        return (
          <ClockItem key={index} type={item.type} time={item.time} />
        );
      })}
    </div>
  );
};

export default ClockContainer;