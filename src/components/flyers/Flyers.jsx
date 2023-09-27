import styled from "styled-components";
import { flyersItems } from "../../../data";

const StyledFlyers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(34%, 1fr));
  gap: 1rem;
  width: 100%;
`;

const StyledFlyersItem = styled.div`
  background-color: ${(props) => props.$color};
  height: 60rem;
  transform: ${(props) => {
    let transformValue = "rotate(0deg)";
    if (props.$heading === "Show")
      transformValue = "rotate(-10deg) translate(-5%, 10%)";
    else if (props.$heading === "And")
      transformValue = "rotate(10deg) translate(0%, 50%)";
    else if (props.$heading === "Tell")
      transformValue = "rotate(-10deg) translate(-10%, 15%)";
    return transformValue;
  }};
  cursor: pointer;
  transition: all .3s ease-in-out;
  transform-origin: right;
  &:hover {
    transform: ${(props) => {
    let transformValue = "rotate(0deg)";
    if (props.$heading === "Show")
      transformValue = "rotate(-4deg) translate(-5%, 5%)";
    else if (props.$heading === "And")
      transformValue = "rotate(5deg) translate(0%, 40%)";
    else if (props.$heading === "Tell")
      transformValue = "rotate(-5deg) translate(-0%, 10%)";
    return transformValue;
  }};
  }
`;

const StyledHeading = styled.h1`
  font-size: calc(12rem + 4vw);
  color: var(--color-text);
  font-weight: 700;
  text-align: center;
  letter-spacing: -15px;
`;

const Flyers = () => {
  return (
    <StyledFlyers>
      {flyersItems.map((item) => {
        return (
          <StyledFlyersItem
            key={item.id}
            $color={item.color}
            $heading={item.heading}
          >
            <StyledHeading>{item.heading}</StyledHeading>
          </StyledFlyersItem>
        );
      })}
    </StyledFlyers>
  );
};

export default Flyers;
