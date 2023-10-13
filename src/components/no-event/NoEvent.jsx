import styled from "styled-components";
import noEventSvg from "../../assets/noevent.svg";

const StyledNoEvent = styled.div`
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const StyledFigure = styled.figure``;

const StyledImg = styled.img`
  height: 45rem;
`;

const StyledHeading = styled.h1`
    font-size: 5rem;
    color: var(--color-blue);
`;

export default function NoEvent() {
  return (
    <StyledNoEvent>
      <StyledHeading>Sorry, No events found.</StyledHeading>
      <StyledFigure>
        <StyledImg src={noEventSvg} alt="image" />
      </StyledFigure>
    </StyledNoEvent>
  );
}
