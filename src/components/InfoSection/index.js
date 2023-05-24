import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRows,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  topLine,
  headLine,
  darkText,
  description,
  img,
  alt,
  buttonLabel,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer
        lightBg={lightBg}
        id={id}>
        <InfoWrapper>
          <InfoRows imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button
                    to="toTop"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}>
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={img}
                  alt={alt}
                />
              </ImgWrap>
            </Column2>
          </InfoRows>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
