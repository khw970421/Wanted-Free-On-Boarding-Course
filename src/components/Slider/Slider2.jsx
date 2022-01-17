import { useState, useEffect, useRef } from "react";
import LeftArrow from "../SliderIcon/LeftArrow";
import RightArrow from "../SliderIcon/RightArrow";
import { sliderDataArr } from "../../utils/constant";
import ArrowIcon from "../HeaderIcon/ArrowIcon";
import "./css.css";
import {
  sliderImageStyle,
  sliderClickButtonStyle,
  sliderContainerPcStyle,
  sliderInformationPcStyle,
  SliderPcMainTextStyle,
  SliderPcSubTextStyle,
  SliderPcShortCutStyle,
  SliderPcHrStyle,
  displayBlockStyle,
  displayNoneStyle,
} from "./css.js";
const Slider2 = () => {
  console.log(document.styleSheets[0].cssRules)
  return (
    <div className="slide">
      <div>
        <button className="leftBtn">
          <LeftArrow />
        </button>
      </div>
      <ul>
        {sliderDataArr.map(({ src, idx, mainText, subText }) => {
          return (
            <li key={idx}>
              <img src={src} style={sliderImageStyle} />
            </li>
          );
        })}
      </ul>
      <button className="rightBtn">
        <RightArrow />
      </button>
    </div>
  );
};

export default Slider2;
