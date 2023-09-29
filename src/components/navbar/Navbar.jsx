import styled from "styled-components";
import AboutDropdown from "../about-dropdown/AboutDropdown";
import { onDropdown, offDropdown } from "../../features/aboutDropdownSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  background-color: var(--color-primary);
  font-weight: 700;
`;

const LogoContainer = styled.div`
  cursor: pointer;
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
`;

const NavBar = styled.nav``;
const NavList = styled.ul`
  display: flex;
  gap: 2.6rem;
`;
const NavItem = styled(Link)`
  font-size: 2.6rem;
  cursor: pointer;
  color: var(--color-text);
`;
const AboutLi = styled(Link)`
  font-size: 2.6rem;
  cursor: pointer;
  position: relative;
  color: var(--color-text);
`;

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <NavContainer>
      <LogoContainer>
        <Logo to='/'>
          <Span>Show</Span>
          <Span>And</Span>
          <Span>Tell</Span>
        </Logo>
      </LogoContainer>
      <NavBar>
        <NavList>
          <NavItem to='/events'>{`What's on`}</NavItem>
          <AboutLi
            onMouseEnter={() => dispatch(onDropdown())}
            onMouseLeave={() => dispatch(offDropdown())}
            to='about'
          >
            About
            <AboutDropdown />
          </AboutLi>
        </NavList>
      </NavBar>
    </NavContainer>
  );
};

export default Navbar;
