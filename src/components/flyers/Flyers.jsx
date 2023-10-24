import styled from "styled-components";
import { flyersItems } from "../../../data";
import { useEffect, useRef } from "react";

const StyledFlyers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(34%, 1fr));
  gap: 1rem;
  width: 100%;
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const StyledFlyersItem = styled.div`
  background-color: ${(props) => props.$color};
  height: 60rem;
  @media only screen and (max-width: 720px) {
    height: 20rem;
    display: grid;
    place-items: center;
  }
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
  transition: all 0.3s ease-in-out;
  transform-origin: right;
  @media only screen and (hover: hover) {
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
  }
  @media only screen and (max-width: 720px) {
    transform: ${(props) => {
      let transformValue = "rotate(0deg)";
      if (props.$heading === "Show")
        transformValue = "rotate(-10deg) translate(-5%, -10%)";
      else if (props.$heading === "And")
        transformValue = "rotate(5deg) translate(0%, 30%)";
      else if (props.$heading === "Tell")
        transformValue = "rotate(-10deg) translate(0%, -30%)";
      return transformValue;
    }};
  }
`;

const StyledHeading = styled.h1`
  font-size: calc(14rem + 2vw);
  color: var(--color-text);
  font-weight: 700;
  text-align: center;
  letter-spacing: -5px;
  @media only screen and (min-width: 1500px) {
    font-size: calc(12rem + 4vw);
  }
  @media only screen and (max-width: 1200px) {
    font-size: calc(12rem + 2vw);
  }
  @media only screen and (max-width: 1100px) {
    font-size: calc(10rem + 2vw);
  }
  @media only screen and (max-width: 1000px) {
    font-size: calc(6rem + 4vw);
  }
  @media only screen and (max-width: 720px) {
    font-size: calc(14rem + 8vw);
  }
  @media only screen and (max-width: 520px) {
    font-size: calc(12rem + 8vw);
  }
  @media only screen and (max-width: 460px) {
    font-size: calc(10rem + 8vw);
  }
  @media only screen and (max-width: 400px) {
    font-size: calc(10rem + 6vw);
    letter-spacing: -10px;
  }
  @media only screen and (max-width: 350px) {
    font-size: calc(8rem + 8vw);
    letter-spacing: -7px;
  }
`;

const Flyers = () => {
  const flyerRefs = useRef([]);

  useEffect(() => {
      flyerRefs.current.forEach((ref, index) => {
        setTimeout(() => {
          ref.style.transform = "translateY(-5%)";
        }, index * 200);
      });
  }, []);


  return (
    <StyledFlyers>
      {flyersItems.map((item, index) => {
        return (
          <div
            ref={(el) => (flyerRefs.current[index] = el)}
            style={{ transform: "translateY(100%)", transition: 'all .5s ease-in-out'}}
            key={item.id}
          >
            <StyledFlyersItem $color={item.color} $heading={item.heading}>
              <StyledHeading>{item.heading}</StyledHeading>
            </StyledFlyersItem>
          </div>
        );
      })}
    </StyledFlyers>
  );
};

export default Flyers;
