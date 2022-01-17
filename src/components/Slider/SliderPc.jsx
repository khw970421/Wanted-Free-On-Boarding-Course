import { useState, useEffect, useRef } from "react";
import LeftArrow from "../SliderIcon/LeftArrow";
import RightArrow from "../SliderIcon/RightArrow";
import { sliderDataArr } from "../../utils/constant";
import {
  sliderContainerStyle,
  sliderImageStyle,
  SliderExceptPcMainTextStyle,
  SliderExceptPcSubTextStyle,
  SliderExceptPcShortCutStyle,
  sliderInformationStyle,
  sliderClickButtonStyle,
  sliderContainerPcStyle,
  sliderInformationPcStyle,
  SliderPcMainTextStyle,
  SliderPcSubTextStyle,
  SliderPcShortCutStyle,
  SliderPcHrStyle,
} from "./css.js";
import ArrowIcon from "../HeaderIcon/ArrowIcon";
const SliderPc = () => {
  const [state, setState] = useState(1);
  const sliderRef = useRef(1);
  useEffect(() => {
    setInterval(() => {
      sliderRef.current = (sliderRef.current % sliderDataArr.length) + 1;
      setState(sliderRef.current);
    }, 20000);
  }, []);

  const left = () => {
    if ((sliderRef.current % sliderDataArr.length) - 1 < 1)
      sliderRef.current =
        (sliderRef.current % sliderDataArr.length) - 1 + sliderDataArr.length;
    else sliderRef.current = (sliderRef.current % sliderDataArr.length) - 1;
    setState(sliderRef.current);
  };

  const right = () => {
    sliderRef.current = (sliderRef.current % sliderDataArr.length) + 1;
    setState(sliderRef.current);
  };

  return (
    <div>
      <div style={sliderContainerPcStyle}>
        <div>
          <button onClick={left} style={sliderClickButtonStyle}>
            <LeftArrow />
          </button>
        </div>
        {sliderDataArr.map(({ src, idx, mainText, subText }) => {
          return (
            <div
              key={idx}
              style={
                state === idx
                  ? {
                      display: "block",
                      position: "relative",
                      width: "1030px",
                      height: "300px",
                    }
                  : { display: "none" }
              }
            >
              <img src={src} style={sliderImageStyle} />
              <div style={sliderInformationPcStyle}>
                <div style={SliderPcMainTextStyle}>{mainText}</div>
                <div style={SliderPcSubTextStyle}>{subText}</div>
                <hr style={SliderPcHrStyle}></hr>
                <div style={SliderPcShortCutStyle}>
                  바로가기
                  <ArrowIcon />
                </div>
              </div>
            </div>
          );
        })}
        <div>
          <button onClick={right} style={sliderClickButtonStyle}>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderPc;
