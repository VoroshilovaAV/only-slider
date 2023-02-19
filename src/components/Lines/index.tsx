import { ReactComponent as ColorLine } from '../../assets/icons/color-line.svg';
import './index.scss';

function Lines() {
  return (
    <>
      <div className="slider__circle"></div>
      <div className="slider__line-vertical"></div>
      <div className="slider__line-horizontal"></div>
      <div className="slider__line-vertical slider__line-vertical_middle"></div>
      <div className="slider__line-vertical slider__line-vertical_end"></div>
      <ColorLine className="slider__color-line" />
    </>
  );
}

export default Lines;
