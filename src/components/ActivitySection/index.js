import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  Container,
  ContainerWrap,
  RightContent,
  LeftContent,
  Ul,
  Li,
  A,
} from "./ActivityElements";

const Activites = () => {
  return (
    <>
      <Container>
        <ContainerWrap>
          <RightContent to="/">JJK SERVICES</RightContent>
          <LeftContent>
            <Ul>
              <Li>
                <A
                  href="https://www.facebook.com/profile.php?id=61550491021183"
                  target="_blank">
                  <FontAwesomeIcon icon={faFacebook} />
                </A>
              </Li>
              <Li>
                <A
                  href="https://twitter.com/JJKCO225"
                  target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </A>
              </Li>
              <Li>
                <A
                  href="https://www.instagram.com/jjkdevtech/"
                  target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </A>
              </Li>
              <Li>
                <A
                  href="https://www.linkedin.com/in/jean-jacques-kouam%C3%A9-5515a5273/"
                  target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </A>
              </Li>
            </Ul>
          </LeftContent>
        </ContainerWrap>
      </Container>
    </>
  );
};

export default Activites;
