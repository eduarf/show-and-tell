import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { onDropdown ,offDropdown } from "../../features/aboutDropdownSlice";
import { useDispatch } from "react-redux";

const StyledAboutDropdown = styled.div`
  position: absolute;
  top: 120%;
  left: -30%;
  height: 10rem;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  width: 12rem;
  transform: ${(props) => (props.$isOpen ? "rotate(-8deg)" : "rotate(0)")};
  background-color: var(--color-text);
  transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
  display: grid;
  place-items: center;
  z-index: 10;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  cursor: ${(props) => (props.$isOpen ? "pointer" : "default")};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  &::before {
    content: '';
    height: 3rem;
    width: 100%;
    position: absolute;
    background-color: transparent;
    top: -10%;
  }
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledItem = styled.li`
  font-size: 2.6rem;
  color: var(--color-primary);
  text-align: center;
`;

const AboutDropdown = () => {
  const isOpen = useSelector((state) => state.aboutDropdown.isOpen);
  const dispatch = useDispatch();

  // useMemo kullanarak bileşenin sadece isOpen değiştiğinde yeniden render edilmesini sağlama
  const memoizedComponent = useMemo(() => {
    return (
      <StyledAboutDropdown
        onMouseLeave={() => dispatch(offDropdown())}
        onMouseEnter={() => dispatch(onDropdown())}
        $isOpen={isOpen}
      >
        <StyledList>
          <StyledItem>Jobs</StyledItem>
          <StyledItem>Archive</StyledItem>
        </StyledList>
      </StyledAboutDropdown>
    );
  }, [dispatch, isOpen]);

  return memoizedComponent;
};

export default AboutDropdown;
