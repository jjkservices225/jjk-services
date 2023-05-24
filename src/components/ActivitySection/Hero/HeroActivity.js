import React from "react";
import Img from "../../../images/Portfolio.png";
import {
  HeroContainer,
  HeroInfo,
  HeroH2,
  HeroImg,
  ImgContent,
  HeroRows,
  HeroWrapper,
  Column1,
  Column2,
  VisitBtn,
  VisitBtnLink,
} from "./HeroActivityElements";

const HeroActivity = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroRows>
          <Column1>
            <HeroInfo>
              <HeroH2>Visitez mon Portfolio Personnel pour en savoir plus ...</HeroH2>
            </HeroInfo>
            <VisitBtn>
              <VisitBtnLink to="https://jjkservices225.netlify.app/" target="_blank">Visitez le Portfolio</VisitBtnLink>
            </VisitBtn>
          </Column1>
          <Column2>
            <HeroImg>
              <ImgContent src={Img} />
            </HeroImg>
          </Column2>
        </HeroRows>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroActivity;
