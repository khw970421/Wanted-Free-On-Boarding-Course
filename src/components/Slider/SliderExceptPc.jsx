import { useState, useEffect, useRef } from "react";
import { sliderDataArr } from "../../utils/constant";
import {
  sliderContainerStyle,
  sliderImageStyle,
  SliderExceptPcMainTextStyle,
  SliderExceptPcSubTextStyle,
  SliderExceptPcShortCutStyle,
  sliderInformationStyle,
} from "./css.js";
import ArrowIcon from "../HeaderIcon/ArrowIcon";
const SliderExceptPc = () => {
  const [state, setState] = useState(1);
  const sliderRef = useRef(1);
  useEffect(() => {
    setInterval(() => {
      sliderRef.current = (sliderRef.current % sliderDataArr.length) + 1;
      setState(sliderRef.current);
    }, 3000);
  }, []);

 const left = () => {
  sliderRef.current = (sliderRef.current % sliderDataArr.length) - 1;
  setState(sliderRef.current);
 }

 const right = () => {
  sliderRef.current = (sliderRef.current % sliderDataArr.length) + 1;
  setState(sliderRef.current);
 }

  return (
    <div>
      <div style={sliderContainerStyle}>
        {sliderDataArr.map(({ src, idx, mainText, subText }) => {
          return (
            <div
              key={idx}
              style={state === idx ? { display: "block" } : { display: "none" }}
            >
              <div style={{ height: "183px" }}>
                <img src={src} style={sliderImageStyle} />
              </div>
              <div style={sliderInformationStyle}>
                <div style={SliderExceptPcMainTextStyle}>{mainText}</div>
                <div style={SliderExceptPcSubTextStyle}>{subText}</div>
                <div style={SliderExceptPcShortCutStyle}>
                  바로가기
                  <ArrowIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={left}>-</button>
      <button onClick={right}>+</button>
    </div>
  );
};

export default SliderExceptPc;
