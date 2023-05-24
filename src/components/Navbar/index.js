import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo
              to="/"
              onClick={toggleHome}>
              JJK SERVICES
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks
                  to="accueil"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Accueil
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Nos Services
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLink to="/Activity">Mon Portfolio</NavLink>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="competences"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Mes Compétences
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}>
                  Contact
                </NavLinks>
              </NavItems>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/Connect">Connexion</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
