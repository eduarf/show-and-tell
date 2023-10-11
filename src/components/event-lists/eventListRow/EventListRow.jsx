import styled from "styled-components";
import { eventsItemsDetails } from "../../../../data";

const StyledEventListRow = styled.div`
  margin-top: 6rem;
  letter-spacing: -0.6px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  border-top: ${(props) => (props.$firstItem ? "2px solid black" : "none")};
  @media only screen and (max-width: 720px){
    align-items: center;
    padding: 2rem 0;
  }
`;

const StyledItemEvent = styled.span`
  width: 35%;
  @media only screen and (max-width: 720px){
    width: 100%;
  }
`;

const StyledItemShowDate = styled.span`
  width: 15%;
  text-align: center;
  @media only screen and (max-width: 720px){
    width: 100%;
    text-align: start;
  }
`;

const StyledItemVenue = styled.span`
  width: 30%;
  padding-left: 10rem;
  @media only screen and (max-width: 1100px) {
    padding-left: 6rem;
  }
  @media only screen and (max-width: 1000px) {
    padding-left: 4rem;
  }
  @media only screen and (max-width: 900px) {
    padding-left: 2rem;
  }
  @media only screen and (max-width: 800px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 720px){
    width: 100%;
  }
`;

const StyledItemLeftContainer = styled.div`
  width: 85%;
  display: flex;
  gap: 2rem;
  align-items: center;
  @media only screen and (max-width: 720px){
    flex-direction: column;
    width: 70%;
    align-items: flex-start;
    gap: .5rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
const StyledItemRightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
`;

const StyledItemBuyNow = styled.a``;

const StyledItemImg = styled.img`
  height: 5.5rem;
  object-fit: cover;
  @media only screen and (max-width: 720px){
    height: 6rem;
  }
`;

const EventListRow = () => {
  return (
    <StyledEventListRow>
      <StyledList>
        {eventsItemsDetails.map((item, index) => {
          const firstItem = index === 0;
          return (
            <StyledItem key={item.id} $firstItem={firstItem}>
              <StyledItemImg src={item.photoSmall} />
              <StyledItemLeftContainer>
                <StyledItemEvent>
                  {item.group}: {item.gamesName}
                </StyledItemEvent>
                <StyledItemShowDate>{item.date}</StyledItemShowDate>
                <StyledItemVenue>{item.locality}</StyledItemVenue>
              </StyledItemLeftContainer>

              <StyledItemRightContainer>
                <StyledItemBuyNow>Buy Now</StyledItemBuyNow>
              </StyledItemRightContainer>
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledEventListRow>
  );
};

export default EventListRow;
