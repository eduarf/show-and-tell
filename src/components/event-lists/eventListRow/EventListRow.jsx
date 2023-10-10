import styled from "styled-components";
import { eventsItemsDetails } from "../../../../data";

const StyledEventListRow = styled.div`
  margin-top: 6rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1.5px solid black;
`;

const StyledItemEvent = styled.span`
  width: 30%;
`;

const StyledItemShowDate = styled.span`
  width: 30%;
  margin-left: 2rem;
  padding-left: 2rem;
`;

const StyledItemVenue = styled.span``;

const StyledItemLeftContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const StyledItemRightContainer = styled.div``;

const StyledItemBuyNow = styled.a``;

const StyledItemImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

const EventListRow = () => {
  return (
    <StyledEventListRow>
      <StyledList>
        {eventsItemsDetails.map((item) => {
          return (
            <StyledItem key={item.id}>
              <StyledItemLeftContainer>
                <StyledItemImg src={item.photoSmall} />
                <StyledItemEvent>
                  {item.group}
                  {item.gamesName}
                </StyledItemEvent>
                <StyledItemShowDate>{item.date}</StyledItemShowDate>
                <StyledItemVenue>{item.locality}</StyledItemVenue>
              </StyledItemLeftContainer>

              <StyledItemRightContainer>
                <StyledItemBuyNow>Buw Now</StyledItemBuyNow>
              </StyledItemRightContainer>
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledEventListRow>
  );
};

export default EventListRow;
