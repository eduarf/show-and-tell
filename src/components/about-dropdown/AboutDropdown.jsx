import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

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

  // useMemo kullanarak bileşenin sadece isOpen değiştiğinde yeniden render edilmesini sağlama
  const memoizedComponent = useMemo(() => {
    return (
      <StyledAboutDropdown $isOpen={isOpen}>
        <StyledList>
          <StyledItem>Jobs</StyledItem>
          <StyledItem>Archive</StyledItem>
        </StyledList>
      </StyledAboutDropdown>
    );
  }, [isOpen]);

  return memoizedComponent;
};

export default AboutDropdown;
