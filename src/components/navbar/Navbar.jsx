import styled from "styled-components";
import AboutDropdown from "../about-dropdown/AboutDropdown";
import { onDropdown, offDropdown } from "../../features/aboutDropdownSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ResponsiveMenu from "../responsive-menu/ResponsiveMenu";
import { toggleMenuDropdown } from "../../features/menuDropdownSlice";
import { useEffect, useState } from "react";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.$isFixed ? '1rem 3rem' : '3rem'};
  background-color: ${(props) => props.$themeColor};
  font-weight: 700;
  position: ${props => props.$isFixed && !props.$location ? 'fixed' : 'relative'};
  width: 100%;
  z-index: 999;
  transition: all .15s ease-in-out;
`;

const LogoContainer = styled.div`
  /* cursor: pointer; */
  &:hover span:first-child {
    transform: rotate(25deg);
  }
  &:hover span:nth-child(2) {
    transform: rotate(-20deg);
  }
  &:hover span:nth-child(3) {
    transform: rotate(18deg);
  }
`;

const Logo = styled(Link)`
  display: flex;
  gap: 0.8rem;
`;

const Span = styled.span`
  font-size: 2.8rem;
  letter-spacing: -1px;
  color: var(--color-text);
  transition: all 0.15s ease-in-out;
  @media only screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
`;

const NavBar = styled.nav``;
const NavList = styled.ul`
  display: flex;
  gap: 2.6rem;
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
const NavItem = styled(Link)`
  font-size: 2.6rem;
  /* cursor: pointer; */
  color: var(--color-text);
  border-bottom: ${(props) =>
    props.$location ? "2px solid var(--color-text)" : "none"};
`;
const AboutLi = styled(Link)`
  font-size: 2.6rem;
  position: relative;
  color: var(--color-text);
`;

const ResponsiveLink = styled.a`
  font-size: 2.6rem;
  display: block;
  /* cursor: pointer; */
  color: var(--color-text);
  position: relative;
  z-index: 9999;
  transform: ${(props) => (props.$isOpen ? "rotate(20deg)" : "rotate(0)")};
  transition: all 0.3s ease-in-out;
  transform-origin: right;
  @media only screen and (min-width: 720px) {
    display: none;
  }
  @media only screen and (max-width: 720px) {
    font-size: 2.2rem;
  }
`;

const StyledAboutSpan = styled.span`
    cursor: pointer;
    display: inline-block;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menuDropdown.isOpen);
  const themeColor = useSelector((state) => state.theme.color);
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (window.scrollY > 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <NavContainer $themeColor={themeColor} $isFixed={isFixed} $location={location.pathname === '/'} >
      <LogoContainer >
        <Logo to="/">
          <Span>Show</Span>
          <Span>And</Span>
          <Span>Tell</Span>
        </Logo>
      </LogoContainer>
      <NavBar>
        <NavList>
          <NavItem
            to="/events"
            $location={location.pathname.startsWith("/events")}
          >{`What's On`}</NavItem>
          <AboutLi to="/about">
            <StyledAboutSpan
              onMouseEnter={() => dispatch(onDropdown())}
              onMouseLeave={() => dispatch(offDropdown())}
            >
              About
            </StyledAboutSpan>
            <AboutDropdown />
          </AboutLi>
        </NavList>
        <ResponsiveLink
          $isOpen={isOpen}
          onClick={() => dispatch(toggleMenuDropdown())}
        >
          {!isOpen ? "Menu" : "Close"}
        </ResponsiveLink>
      </NavBar>
      <ResponsiveMenu />
    </NavContainer>
  );
};

export default Navbar;
