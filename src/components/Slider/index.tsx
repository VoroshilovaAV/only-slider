import { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';
import { events } from '../../constants';
import Lines from '../Lines';
import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';
import SwiperCarousel from '../SwiperCarousel';

function Slider() {
  const [periodId, setPeriodId] = useState(0);
  const [isDelay, setIsDelay] = useState(false);

  const getDelay = () => {
    setIsDelay(true);
    setTimeout(() => {
      setIsDelay(false);
    }, 1000);
  };

  const handleLeftClick = () => {
    getDelay();
    setPeriodId(periodId - 1);
  };

  const handleRightClick = () => {
    getDelay();
    setPeriodId(periodId + 1);
  };

  return (
    <section className="slider">
      <h3 className="slider__title">
        Исторические <br /> даты
      </h3>
      <h2 className="slider__years">
        <span className="slider__year_purple">{events[periodId].yearStart}</span>
        &ensp;
        <span className="slider__year_pink">{events[periodId].yearEnd}</span>
      </h2>
      <p className="slider__text_small">
        {'0' + events[periodId].point}/{'0' + events.length}
      </p>
      <div className="slider__arrows">
        <button disabled={periodId === 0} onClick={handleLeftClick}>
          <ArrowLeft />
        </button>
        <button disabled={periodId === 5} onClick={handleRightClick}>
          <ArrowRight />
        </button>
      </div>
      <SwiperCarousel isDelay={isDelay} periodId={periodId} />
      <Lines />
    </section>
  );
}

export default Slider;
