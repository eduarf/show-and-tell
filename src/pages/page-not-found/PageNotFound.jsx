import styled from "styled-components";
import pageNotFoundSvg from '../../assets/page-not-found.svg';
import { Link } from "react-router-dom";

const StyledPageNotFound = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color-green);
  display: grid;
  place-items: center;
`;

const StyledFigure = styled.figure`
    
`;
const StyledImg = styled.img`
    height: 70vh;
`;

const StyledLink = styled(Link)`
    font-size: 4rem;
    color: var(--color-primary);
    &:hover{
        color: var(--color-darkblue);
    }
`;

export default function PageNotFound() {
  return (
    <StyledPageNotFound>
        <StyledLink to='/' >Back to Home</StyledLink>
      <StyledFigure>
        <StyledImg src={pageNotFoundSvg} alt="image" />
      </StyledFigure>
    </StyledPageNotFound>
  );
}
