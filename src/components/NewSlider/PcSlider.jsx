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
