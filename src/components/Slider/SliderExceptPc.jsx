import React, { useEffect, useRef, useState } from "react";
import "./css2.css";
import { sliderDataArr } from "../../utils/constant";
import ArrowIcon from "../HeaderIcon/ArrowIcon";
const TOTAL_SLIDES = sliderDataArr.length - 1;

const SliderExceptPc = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseDownPageX, setMouseDownPageX] = useState(0);
  const slideRef = useRef(null);

  const mouseDownEvent = (e) => {
    setMouseDownPageX(e.pageX);
  };

  const mouseUpEvent = (e) => {
    if (e.pageX > mouseDownPageX) {
      if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    } else {
      if (currentSlide >= TOTAL_SLIDES) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <div className="exceptPcContainer">
      <div ref={slideRef} className="exceptPcSliderContainer">
        {sliderDataArr.map(({ src, idx, mainText, subText }) => {
          return (
            <div >
              <img
                src={src}
                draggable="false"
                className="SlideExceptPcImg"
                onMouseDown={mouseDownEvent}
                onMouseUp={mouseUpEvent}
              />
              <div className="SliderExceptPcTextContainer">
              <div className="SliderExceptPcMainText">{mainText}</div>
              <div className="SliderExceptPcSubText">{subText}</div>
              <div className="SliderExceptPcShortCutText">
                바로가기
                <ArrowIcon />
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderExceptPc;

