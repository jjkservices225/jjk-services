import React from "react";
import Icon1 from "../../images/Icon1.png";
import Icon2 from "../../images/Icon2.png";
import Icon3 from "../../images/Icon3.png";
import Icon4 from "../../images/Icon4.png";
import {
  SkillsContainer,
  SkillsH1,
  SkillsWrapper,
  SkillsCard,
  SkillsIcon,
  SkillsH2,
  SkillsP,
} from "./SkillsElements";

const Skills = () => {
  return (
    <SkillsContainer id="competences">
      <SkillsH1>Nos Compétences</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon src={Icon1} />
          <SkillsH2>Interface Web</SkillsH2>
          <SkillsP>
            Une interface web moderne et élégante pour une expérience
            utilisateur inoubliable
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon2} />
          <SkillsH2>Application Mobile</SkillsH2>
          <SkillsP>
            Développez votre entreprise avec une application cross-plateforme :
            Android et iOS
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon3} />
          <SkillsH2>Design Graphique</SkillsH2>
          <SkillsP>
            Donnez vie à votre marque grâce à des designs graphiques
            professionnels et de qualité
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon4} />
          <SkillsH2>Marketing Digital</SkillsH2>
          <SkillsP>
            Notre agence de marketing digital : votre levier pour booster votre
            visibilité en ligne
          </SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
}

export default Skills;
