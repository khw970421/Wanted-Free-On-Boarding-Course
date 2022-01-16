import { sliderDataArr } from "../../utils/constant";
import {
  SliderExceptPcMainTextStyle,
  SliderExceptPcSubTextStyle,
  SliderExceptPcShortCutStyle,
  sliderInformationStyle,
} from "./css.js";
import ArrowIcon from "../HeaderIcon/ArrowIcon";
const SliderExceptPc = () => {
  return (
    <div>
      SliderExceptPc
      {sliderDataArr.map(({ idx, mainText, subText }) => {
        return (
          <div key={idx}>
            <img src={idx} />
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
  );
};

export default SliderExceptPc;
