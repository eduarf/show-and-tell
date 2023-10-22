import PropTypes from "prop-types";
import { eventsItemsDetails } from "../../../../data";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledEventBookList = styled.div`
  background-color: ${(props) => props.$color};
  padding-bottom: 10vh;
  padding-top: 6vh;
`;
const StyledEventList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const StyledEventItem = styled.li`
  border-bottom: 2px solid black;
  border-top: ${(props) => (props.$isTrue ? "2px solid black" : "none")};
`;
const StyledEventLink = styled.a`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 6rem;
  padding: 2.8rem 4rem;
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover {
    background-color: var(--color-text);
  }
  &:hover > span {
    color: var(--color-primary);
  }
`;
const StyledShowDate = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;
const StyledShowVenue = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;
const StyledShowTime = styled.span`
  text-align: center;
`;
const StyledShowPrice = styled.span``;
const StyledBookNow = styled.span`
  font-size: 2rem;
  font-weight: 700;
  span {
    animation: sway 2s linear 0s infinite;
    display: inline-block;
  }
  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.3s;
  }
  span:nth-child(4) {
    animation-delay: 0.4s;
  }
  span:nth-child(5) {
    animation-delay: 0.5s;
  }
  span:nth-child(6) {
    animation-delay: 0.6s;
  }
  span:nth-child(7) {
    animation-delay: 0.7s;
  }

  @keyframes sway {
    0% {
      color: #f6aa9f;
      transform: translateY(0);
    }
    33% {
      color: #1aae7a;
      transform: translateY(20%);
    }
    66% {
      color: #006dff;
      transform: translateY(-20%);
    }
    100% {
      color: #f6aa9f;
      transform: translateY(0);
    }
  }
`;

export default function EventBookList({ gamesName }) {
  const themeColor = useSelector((state) => state.theme.color);
  const filteredGames = eventsItemsDetails.filter(
    (item) => item.gamesName === gamesName
  );
  filteredGames.sort((a, b) => {
    const dateA = new Date(`20${a.date.split(".").reverse().join("-")}`);
    const dateB = new Date(`20${b.date.split(".").reverse().join("-")}`);
    return dateA - dateB;
  });

  return (
    <StyledEventBookList $color={themeColor}>
      <StyledEventList>
        {filteredGames.map((item, index) => {
          const isTrue = index === 0;
          return (
            <StyledEventItem $isTrue={isTrue} key={item.id}>
              <StyledEventLink>
                <StyledShowDate>{item.date}</StyledShowDate>
                <StyledShowVenue>{item.locality}</StyledShowVenue>
                <StyledShowTime>19.30</StyledShowTime>
                <StyledShowPrice>{item.price}</StyledShowPrice>
                <StyledBookNow>
                  <span>B</span>
                  <span>o</span>
                  <span>o</span>
                  <span>k</span>
                  &nbsp;&nbsp;
                  <span>N</span>
                  <span>o</span>
                  <span>w</span>
                </StyledBookNow>
              </StyledEventLink>
            </StyledEventItem>
          );
        })}
      </StyledEventList>
    </StyledEventBookList>
  );
}

EventBookList.propTypes = {
  gamesName: PropTypes.string,
};
