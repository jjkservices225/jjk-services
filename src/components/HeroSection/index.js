import React from "react";
import Typical from "react-typical";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroP1,
} from "./HeroElements";
import Slideshow from "./Slider";

const HeroSection = () => {
  return (
    <HeroContainer id="toTop">
      <HeroBg>
        <Slideshow/>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Entrez dans une Nouvelle ère avec
          <br />
          <span className="title-color">JJK SERVICES</span>
        </HeroH1>
        <HeroP>
          Votre agence de création numérique axée sur le professionnalisme, la
          créativité et son innovation
        </HeroP>
        <HeroP1>
          <Typical
            loop={Infinity}
            steps={[
              "Web_",
              1000,
              "Mobile_",
              2000,
              "SEO_",
              3000,
              "Marketing_",
              4000,
            ]}
          />
        </HeroP1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
