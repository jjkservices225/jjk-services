import React from "react";
import {
  SidebarrContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarLinks,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarrContainer
      isOpen={isOpen}
      onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="accueil"
            onClick={toggle}>
            Accueil
          </SidebarLink>
          <SidebarLink
            to="services"
            onClick={toggle}>
            Nos Services
          </SidebarLink>
          <SidebarLinks
            to="/Activity"
            onClick={toggle}>
            Mon Portfolio
          </SidebarLinks>
          <SidebarLink
            to="competences"
            onClick={toggle}>
            Mes Compétences
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/Connect">Connexion</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarrContainer>
  );
};

export default Sidebar;
