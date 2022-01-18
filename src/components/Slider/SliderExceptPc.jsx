import React, { useEffect, useRef, useState } from "react";
import "./css2.css";
import LeftArrow from "../SliderIcon/LeftArrow";
import RightArrow from "../SliderIcon/RightArrow";
import { sliderDataArr } from "../../utils/constant";
import ArrowIcon from "../HeaderIcon/ArrowIcon";
const TOTAL_SLIDES = sliderDataArr.length - 1;

const SliderExceptPc = () => {
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
    <div className="exceptPcContainer">
      <div ref={slideRef} className="exceptPcSliderContainer">
        {sliderDataArr.map(({ src, idx, mainText, subText }) => {
          return (
            <div className="SliderSubContainer">
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

// import { useState, useEffect, useRef } from "react";
// import { sliderDataArr } from "../../utils/constant";
// import {
//   sliderContainerStyle,
//   sliderImageStyle,
//   SliderExceptPcMainTextStyle,
//   SliderExceptPcSubTextStyle,
//   SliderExceptPcShortCutStyle,
//   sliderInformationStyle,
// } from "./css.js";
// import ArrowIcon from "../HeaderIcon/ArrowIcon";
// const SliderExceptPc = () => {
//   const [state, setState] = useState(1);
//   const sliderRef = useRef(1);
//   useEffect(() => {
//     setInterval(() => {
//       sliderRef.current = (sliderRef.current % sliderDataArr.length) + 1;
//       setState(sliderRef.current);
//     }, 3000);
//   }, []);

//  const left = () => {
//   sliderRef.current = (sliderRef.current % sliderDataArr.length) - 1;
//   setState(sliderRef.current);
//  }

//  const right = () => {
//   sliderRef.current = (sliderRef.current % sliderDataArr.length) + 1;
//   setState(sliderRef.current);
//  }

//   return (
//     <div>
//       <div style={sliderContainerStyle}>
//         {sliderDataArr.map(({ src, idx, mainText, subText }) => {
//           return (
//             <div
//               key={idx}
//               style={state === idx ? { display: "block" } : { display: "none" } }
//             >
//               <div style={{ height: "183px" }}>
//                 <img src={src} style={sliderImageStyle} />
//               </div>
//               <div style={sliderInformationStyle}>
//                 <div style={SliderExceptPcMainTextStyle}>{mainText}</div>
//                 <div style={SliderExceptPcSubTextStyle}>{subText}</div>
//                 <div style={SliderExceptPcShortCutStyle}>
//                   바로가기
//                   <ArrowIcon />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SliderExceptPc;
