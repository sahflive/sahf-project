import styles from './Past_glimpses.module.css';
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
const Past_Glimpses = ({ photos }) => {

   const scrollRef = useRef(null);

useEffect(() => {
  const scrollContainer = scrollRef.current;
  const speed = 1; // pixels per tick
  const intervalTime = 20; // ms
  let direction = 1; // 1 = forward, -1 = backward

  const interval = setInterval(() => {
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: speed * direction,
        behavior: "smooth",
      });

      const atEnd =
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 1;
      const atStart = scrollContainer.scrollLeft <= 0;

      if (atEnd) direction = -1; // reverse to backward
      if (atStart) direction = 1; // reverse to forward
    }
  }, intervalTime);

  return () => clearInterval(interval);
}, []);


  return (
    <section className={styles.carouselContainer}>
      <h2 className={styles.heading}>Past Glimpses</h2>
      <div ref={scrollRef} className={styles.scrollContainer}>
        {photos.map((photo, idx) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={idx}
            className={styles.card}
          >
            <img src={photo.src} alt={photo.title} className={styles.image} />
            <div className={styles.overlay}>
              <p className={styles.title}>{photo.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Past_Glimpses