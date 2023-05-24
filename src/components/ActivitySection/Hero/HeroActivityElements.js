import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  color: #000;
  background: linear-gradient(90deg, hsla(45, 100%, 88%, 1) 0%, hsla(283, 33%, 46%, 1) 100%);
  height: 600px;


  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 800px;
  }

  @media screen and (max-width: 480px) {
    height: 800px;
  }
`;

export const HeroRows = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const HeroInfo = styled.div`
  max-width: 440px;
  padding-top: 0;
  padding-bottom: 60px;
  display: flex;
  align-items: center;

    
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;


export const HeroH2 = styled.h2`
  font-size: 22px;
`;

export const HeroImg = styled.div`
  max-width: 650px;
  height: 100%;

  @media screen and (max-width: 768px) {
    max-width: 450px;
  }
`;

export const ImgContent = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;


export const VisitBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const VisitBtnLink = styled(Link)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
