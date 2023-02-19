import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { events } from '../../constants';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';

type SwiperCarouselType = {
  isDelay: boolean;
  periodId: number;
};

function SwiperCarousel(props: SwiperCarouselType) {
  const { isDelay, periodId } = props;
  return (
    <Swiper spaceBetween={30} slidesPerView={3} navigation={true} modules={[Navigation]}>
      {!isDelay &&
        events[periodId].description.map((item) => (
          <SwiperSlide key={item.id}>
            <h4 className="slider__slide-header">{item.year}</h4>
            <p className="slider__slide-text">{item.text}</p>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default SwiperCarousel;
