import {useState} from 'react'
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
  const [state, setState] = useState(2)
  return (
    <div>
      <div style={sliderContainerStyle}>
      {sliderDataArr.map(({ src,idx, mainText, subText }) => {
        return (
          <div key={idx} style={state===idx ? {display:"block"} : {display:"none"} }>
            <div style={{height:"185px"}}>
            <img src={src} style={sliderImageStyle}/>
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
    </div>
  );
};

export default SliderExceptPc;
