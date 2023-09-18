import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkSocial,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Appropos de Nous</FooterLinkTitle>
              <FooterLink to="accueil">Decouvrir</FooterLink>
              <FooterLink to="services">En Savoir Plus</FooterLink>
              <FooterLink to="contact">Nous Contacter</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Technologies</FooterLinkTitle>
              <FooterLink to="competences">React JS</FooterLink>
              <FooterLink to="competences">Node JS</FooterLink>
              <FooterLink to="competences">React Native</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Réseaux Social</FooterLinkTitle>
              <FooterLinkSocial
                to="https://www.facebook.com/profile.php?id=100004654455069"
                target="_blank">
                Facebook
              </FooterLinkSocial>
              <FooterLinkSocial
                to="https://twitter.com/JJKCO225"
                target="_blank">
                Twitter
              </FooterLinkSocial>
              <FooterLinkSocial
                to="https://www.instagram.com/jeanjacqueskouamekouassi/"
                target="_blank">
                Instagram
              </FooterLinkSocial>
              <FooterLinkSocial
                to="https://www.linkedin.com/in/jean-jacques-kouam%C3%A9-kouassi-5515a5273/"
                target="_blank">
                Linkedin
              </FooterLinkSocial>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="/"
              onClick={toggleHome}>
              JJK SERVICES
            </SocialLogo>
            <WebsiteRights>
              JJK & CO, © {new Date().getUTCFullYear()} Tous Droits Réservés.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/profile.php?id=61550491021183"
                target="_blank"
                aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/jjkdevtech/"
                target="_blank"
                aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/jean-jacques-kouam%C3%A9-5515a5273/"
                target="_blank"
                aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/JJKCO225"
                target="_blank"
                aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
