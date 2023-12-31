import styled from "styled-components";
import { eventsItemsDetails } from "../../../../data";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import NoEvent from "../../no-event/NoEvent";

const StyledEventListColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 3rem;
  padding: ${props => props.$filterDataColumn ? 0 : '0 2vw'};
  @media only screen and (max-width: 720px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 0 2rem;
  }
  @media only screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`;
const StyledEventCard = styled(Link)`
  position: relative;
  cursor: pointer;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.$indeks ? "var(--color-green)" : "var(--color-blue)"};
  overflow: hidden;
`;
const StyledCardTitleContainer = styled.div`
  position: absolute;
  width: 100%;
  margin: 1rem;
`;
const StyledCardHeading = styled.h3`
  font-weight: 700;
  color: var(--color-primary);
  font-size: 2.3rem;
  position: relative;
  z-index: 4;
`;
const StyledDescription = styled.h3`
  font-weight: 700;
  color: var(--color-primary);
  width: 70%;
  font-size: 2.2rem;
  margin-top: 0.5rem;
`;
const StyledCardImgContainer = styled.div`
  transition: all 0.3s ease-in-out;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 3;
  object-fit: cover;
  @media only screen and (max-width: 720px) {
    transform: ${(props) =>
      props.$indeks
        ? "translate(0%, 30%) rotate(18deg)"
        : "translate(0%, 30%) rotate(-18deg)"};
  }
  &:hover {
    transform: ${(props) =>
      props.$indeks
        ? "translate(50%, 15%) rotate(-30deg)"
        : "translate(50%, 15%) rotate(30deg)"};
  }
`;
const StyledCardImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const EventListColumn = ({ filterDataColumn }) => {
  const uniqueItems = {};

  eventsItemsDetails.forEach((item) => {
    const key = `${item.group}_${item.gamesName}`;
    if (!uniqueItems[key]) {
      uniqueItems[key] = item;
    }
  });

  const uniqueItemsArray = Object.values(uniqueItems);

  const location = useLocation();
  return (
    <StyledEventListColumn $filterDataColumn={filterDataColumn?.length === 0}>
      {filterDataColumn?.length === 0 && location.pathname !== "/events" ? (
        <NoEvent />
      ) : location.pathname === "/events" ? (
        uniqueItemsArray.map((item, index) => {
          const indeks = index % 2 === 0 ? true : false;
          return (
            <StyledEventCard to={`/events/${item.group.toLowerCase().replace(/\s+/g, '-')}-${item.date.split('.').reverse().join('-')}`} key={item.id} $indeks={indeks}>
              <StyledCardTitleContainer>
                <StyledCardHeading>{item.group}</StyledCardHeading>
                <StyledDescription>{item.gamesName}</StyledDescription>
              </StyledCardTitleContainer>
              <StyledCardImgContainer $indeks={indeks}>
                <StyledCardImg src={item.photoNormal} />
              </StyledCardImgContainer>
            </StyledEventCard>
          );
        })
      ) : (
        filterDataColumn.map((item, index) => {
          const indeks = index % 2 === 0 ? true : false;
          return (
            <StyledEventCard key={item.id} $indeks={indeks}>
              <StyledCardTitleContainer>
                <StyledCardHeading>{item.group}</StyledCardHeading>
                <StyledDescription>{item.gamesName}</StyledDescription>
              </StyledCardTitleContainer>
              <StyledCardImgContainer $indeks={indeks}>
                <StyledCardImg src={item.photoNormal} />
              </StyledCardImgContainer>
            </StyledEventCard>
          );
        })
      )}
    </StyledEventListColumn>
  );
};

EventListColumn.propTypes = {
  filterDataColumn: PropTypes.array,
};

export default EventListColumn;
