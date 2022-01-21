import styled from "styled-components";
import { SliderData } from "./data.js";
const PcSlider = () => {
  return (
    <Wrapper>
      <ImageContainer>
        {SliderData.map(({ src, title, subtitle }) => {
          return <Image src={src} draggable={false} />;
        })}
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%; //;추가 주의
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
`;

const Image = styled.img`
  width: 96%;
  margin: 0% 2%;
`;

export default PcSlider;
