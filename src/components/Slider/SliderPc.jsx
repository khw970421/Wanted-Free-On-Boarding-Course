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
} from "./css.js";
import ArrowIcon from "../HeaderIcon/ArrowIcon";
const SliderPc = () => {
  const [state, setState] = useState(1);
  const sliderRef = useRef(1);
  useEffect(() => {
    setInterval(() => {
      sliderRef.current = (sliderRef.current % sliderDataArr.length) + 1;
      setState(sliderRef.current);
    }, 10000);
  }, []);

 const left = () => {
     if((sliderRef.current % sliderDataArr.length) - 1 < 1)
     sliderRef.current = (sliderRef.current % sliderDataArr.length) - 1 + sliderDataArr.length;
     else
  sliderRef.current = (sliderRef.current % sliderDataArr.length) - 1;
  setState(sliderRef.current);
 }

 const right = () => {
  sliderRef.current = (sliderRef.current % sliderDataArr.length) + 1;
  setState(sliderRef.current);
 }

  return (
    <div>
      <div style={sliderContainerPcStyle}>
        {sliderDataArr.map(({ src, idx, mainText, subText }) => {
          return (
            <div
              key={idx}
              style={state === idx ? { display: "block" } : { display: "none" }}
            >
              <div >
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
      
      <button onClick={left} style={sliderClickButtonStyle}><LeftArrow/></button>
      <button onClick={right} style={sliderClickButtonStyle}><RightArrow/></button>
    </div>
  );
};

export default SliderPc;
