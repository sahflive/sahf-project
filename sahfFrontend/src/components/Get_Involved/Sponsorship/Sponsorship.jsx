import styles from './Sponsorship.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../../assets/Get Involved/join_us1.jpg'
import img2 from '../../../assets/Get Involved/join_us2.jpg'
import img3 from '../../../assets/Get Involved/join_us3.jpg'

const Sponsorship = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>SPONSORSHIP</h1>
        <p>
          SAFEZONE Active Humanity Foundation <span>welcomes partnerships, collaborations and sponsorship </span> 
          to further its mission of empowering students and building a brighter future. Through this coaching institute, 
          the foundation strives to unlock the potential of every child and foster a more inclusive educational landscape.
        </p>

        <div className={styles.carousel}>
          <Swiper
            modules={[Autoplay, Pagination,Navigation]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="Slide 3" /></SwiperSlide>
             <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="Slide 3" /></SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.contactBox}>
          <h2>SHARE YOUR CONTACT INFORMATION</h2>
          <button>Click Here</button>
        </div>
      </div>
    </>
  );
};

export default Sponsorship;
