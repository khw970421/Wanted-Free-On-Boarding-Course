import styled from "styled-components";
import { SliderData } from "./data.js";
import { useState, useRef, useEffect } from "react";
const PcSlider = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [firstPageX, setFirstPageX] = useState(0);
  const slideRef = useRef(0);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentImgIdx * 85}vw)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentImgIdx]);

  const mouseUp = ({ pageX }) => {
    setFirstPageX(pageX);
  };

  const mouseDown = ({ pageX }) => {
    if (pageX < firstPageX) {
      console.log("왼쪽이동");
    } else if (pageX > firstPageX) {
      moveRight();
    }
  };

  const moveLeft = () => {};
  const moveRight = () => {
    setCurrentImgIdx(currentImgIdx + 1);
  };

  return (
    <Wrapper>
      <ImageContainer
        onMouseUp={mouseUp}
        onMouseDown={mouseDown}
        ref={slideRef}
      >
        {SliderData.map(({ src, title, subtitle }) => {
          return <Image src={src} draggable={false} />;
        })}
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  margin-left: -77.5vw;
`;

const Image = styled.img`
  width: 80vw;
  margin: 0vh 2.5vw;
`;

export default PcSlider;
