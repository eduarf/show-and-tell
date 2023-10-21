import PropTypes from "prop-types";
import { useEffect } from "react";
import styled from "styled-components";

const StyledEventIntro = styled.div`
    height: 70rem;
    background-image: url(${props => props.$img});
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    position: relative;
    padding: 2rem;
    overflow: hidden;
`;

const StyledEventTitleContainer = styled.div`
    position: absolute;
    top: ${props => props.$length ? 'none' : '2rem'};
    bottom: ${props => props.$length ? '2rem' : 'none'};
`;

const StyledEventTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: calc(5rem + 2vw);
    letter-spacing: -2px;
    color: var(--color-primary);
    line-height: .9;
`;

const StyledEventComedian = styled.span`
    font-weight: 700;
`;

const StyledEventName = styled.span`
      width: ${props => props.$length ? '80%' : '100%'};
`;


const StyledUpdatesCard = styled.div`
    height: 20rem;
    width: 22rem;
    background-color: #1b0f37;
    position: absolute;
    bottom: -5%;
    right: 15%;
    padding-top: 2rem;
    transform: rotate(-7deg) translateY(0);
    transition: all .3s ease-in-out;
    &:hover{
        transform: rotate(7deg) translateY(-15%);
    }
    a {
        font-size: 3.6rem;
        color: var(--color-pink);
        font-weight: 700;
        display: block;
        text-align: center;
    }
`;
const StyledBookCard = styled.div`
    height: 20rem;
    width: 22rem;
    background-color: ${props => props.$color};
    position: absolute;
    bottom: -5%;
    right: 0%;
    padding-top: 2rem;
    transform: rotate(-15deg) translateY(0);
    transform-origin: right;
    transition: all .3s ease-in-out;
    &:hover {
        transform: rotate(3deg) translateY(5%);
    }
    a {
        font-size: 3.6rem;
        color: #1b0f37;
        font-weight: 700;
        display: block;
        text-align: center;
    }
`;


export default function EventIntro({ comedian, eventName, img, color }) {
  const length = eventName.length + comedian.length >= 30;
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      
    };
  },);
  return (
    <StyledEventIntro $img={img}>
      <StyledEventTitleContainer $length={length}>
        <StyledEventTitle $color={color}>
          <StyledEventComedian>{comedian}</StyledEventComedian>
          <StyledEventName $length={length}>{eventName}</StyledEventName>
        </StyledEventTitle>
      </StyledEventTitleContainer>
      <StyledUpdatesCard>
        <a href="#">Follow <br /> Artist <br /> Updates</a>
      </StyledUpdatesCard>
      <StyledBookCard $color={color}>
        <a href="#">Book <br/> Tickets</a>
      </StyledBookCard>
    </StyledEventIntro>
  );
}

EventIntro.propTypes = {
  comedian: PropTypes.string,
  eventName: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.string,
};
