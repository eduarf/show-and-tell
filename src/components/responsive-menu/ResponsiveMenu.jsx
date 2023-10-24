import { useSelector } from "react-redux";
import styled from "styled-components";
import { navLinks } from "../../../data";
import { Link } from "react-router-dom";

const StyledResponsiveMenu = styled.div`
  min-height: 21rem;
  width: 18rem;
  background-color: var(--color-pink);
  position: absolute;
  top: ${(props) => (props.$isOpen ? "-60%" : "-450%")};
  right: ${(props) => (props.$isOpen ? "-5%" : "-100%")};
  transform: ${(props) => (props.$isOpen ? "rotate(20deg)" : "rotate(0)")};
  z-index: 101;
  /* opacity: ${(props) => (props.$isOpen ? 1 : 0)}; */
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
  transform-origin: left;
`;
const StyledNavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const StyledNavItems = styled.li``;
const StyledNavLink = styled(Link)`
    color: var(--color-text);
    font-size: 1.8rem;
    font-weight: 700;
`;

export default function ResponsiveMenu() {
  const isOpen = useSelector((state) => state.menuDropdown.isOpen);
  return (
    <StyledResponsiveMenu $isOpen={isOpen}>
      <StyledNavList>
        {navLinks.map((item) => {
          return (
            <StyledNavItems key={item.id}>
              <StyledNavLink to={item.link}>{item.name}</StyledNavLink>
            </StyledNavItems>
          );
        })}
      </StyledNavList>
    </StyledResponsiveMenu>
  );
}
