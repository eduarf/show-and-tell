import styled from "styled-components";
import { eventsItemsDetails } from "../../../../data";

const StyledEventListColumn = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 3rem;
    margin-top: 6rem;
`;
const StyledEventCard = styled.div`
    position: relative;
    cursor: pointer;
    background-color: var(--color-green);
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
    margin-top: .5rem;
`;
const StyledCardImgContainer = styled.div`
transition: all .3s ease-in-out;
height: 100%;
width: 100%;
position: relative;
z-index: 3;
    &:hover {
        transform: translate(50%, 15%) rotate(-30deg);
    }
`;
const StyledCardImg = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`;

const EventListColumn = () => {
  const uniqueItems = {};

  eventsItemsDetails.forEach((item) => {
    const key = `${item.group}_${item.gamesName}`;
    if (!uniqueItems[key]) {
      uniqueItems[key] = item;
    }
  });

  const uniqueItemsArray = Object.values(uniqueItems);

  console.log(uniqueItemsArray);

  return (
    <StyledEventListColumn>
      {uniqueItemsArray.map((item) => {
        return (
          <StyledEventCard key={item.id}>
            <StyledCardTitleContainer>
              <StyledCardHeading>
                {item.group}
              </StyledCardHeading>
              <StyledDescription>{item.gamesName}</StyledDescription>
            </StyledCardTitleContainer>
            <StyledCardImgContainer>
                <StyledCardImg src={item.photoNormal} />
            </StyledCardImgContainer>
          </StyledEventCard>
        );
      })}
    </StyledEventListColumn>
  );
};

export default EventListColumn;
