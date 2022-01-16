import React from "react";
import SliderPc from "./SliderPc";
import SliderExceptPc from "./SliderExceptPc";
import { useMediaQuery } from "react-responsive";
const Slider = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1200px)",
  });
  const isExceptPc = useMediaQuery({
    query: "(max-width:1199px)",
  });
  return (
    <div>
      {isPc && <SliderPc />}
      {isExceptPc && <SliderExceptPc />}
    </div>
  );
};

export default Slider;
