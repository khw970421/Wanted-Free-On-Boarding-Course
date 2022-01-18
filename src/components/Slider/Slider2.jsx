import React, { useEffect, useRef, useState } from "react";
import "./css2.css";
import LeftArrow from "../SliderIcon/LeftArrow";
import RightArrow from "../SliderIcon/RightArrow";
import { sliderDataArr } from "../../utils/constant";
const TOTAL_SLIDES = sliderDataArr.length - 1;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseDownPageX, setMouseDownPageX] = useState(0);
  const slideRef = useRef(null);

  const clickRightSliderBtn = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const clickLeftSliderBtn = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

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
    <div className="Container">
      <div>
        <button className="leftBtn" onClick={clickLeftSliderBtn}>
          <LeftArrow />
        </button>
      </div>
      <div ref={slideRef} className="SliderContainer">
        {sliderDataArr.map(({ src, idx, mainText, subText }) => {
          return (
            <img
              src={src}
              draggable="false"
              className="SliderImg"
              onMouseDown={mouseDownEvent}
              onMouseUp={mouseUpEvent}
            />
          );
        })}
      </div>
      <div>
        <button className="rightBtn" onClick={clickRightSliderBtn}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
