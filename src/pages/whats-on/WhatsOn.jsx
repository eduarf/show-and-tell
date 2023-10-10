import styled from "styled-components";
import { eventCities } from "../../../data";
import { useState } from "react";
import { SiWindows } from "react-icons/si";
import { MdTableRows } from "react-icons/md";
import EventLists from "../../components/event-lists/EventLists";
import { useDispatch, useSelector } from "react-redux";
import { onRow, offRow } from "../../features/eventListSlice";

const StyledEvents = styled.section`
  background-color: var(--color-primary);
  padding: 6vh 0;
  @media only screen and (max-width: 720px){
    padding: 3vh 0;
  }
`;

const StyledLeftContainer = styled.div``;

const StyledRightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  @media only screen and (max-width: 1180px){
    flex-direction: column;
  }
  @media only screen and (max-width: 720px){
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledCityList = styled.div`
  display: flex;
  gap: 1.3rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 720px){
    line-height: .9;
  }
`;

const StyledCityLink = styled.a`
  /* display: ${(props) =>
    !props.$isIncludes || props.$isHidden ? "none" : "block"}; */
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--color-text);
  /* color: ${(props) => (props.$isIncludes ? "red" : "blue")}; */
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 720px){
    font-size: 1.6rem;
  }
`;

const StyledTopContainer = styled.div`
  display: grid;
  grid-template-columns: 62% 38%;
  gap: 2rem;
  padding: 0 2vw;
  @media only screen and (max-width: 720px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const StyledSeeMore = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  display: ${(props) => (props.$isHidden === 0 ? "none" : "block")};
  @media only screen and (max-width: 720px){
    font-size: 1.6rem;
  }
`;
const StyledSeeLess = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  display: ${(props) => (props.$isHidden === - (eventCities.length / 2) ? "none" : "block")};
  @media only screen and (max-width: 720px){
    font-size: 1.6rem;
  }
`;

const StyledSearchInput = styled.input`
  border: none;
  outline: none;
  padding-bottom: 0.3rem;
  width: 60%;
  font-size: 2.2rem;
  background-color: transparent;
  border-bottom: 2.5px solid black;
  @media only screen and (max-width: 1180px){
    width: 85%;
  }
  @media only screen and (max-width: 720px){
    width: 65%;
  }
  &::placeholder {
    color: var(--color-text);
    font-weight: 300;
  }
  &:focus {
    &::placeholder {
      color: #b2b2b2;
    }
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledColumnIcon = styled(SiWindows)`
  font-size: 3rem;
  cursor: pointer;
  color: ${(props) => (props.$isRow ? "#c1c1c1" : "black")};
`;
const StyledRowIcon = styled(MdTableRows)`
  font-size: 4.1rem;
  cursor: pointer;
  color: ${(props) => (props.$isRow ? "black" : "#c1c1c1")};
`;

export default function WhatsOn() {
  const [isHidden, setIsHidden] = useState(-(eventCities.length / 2));
  const eventCitiesItems = eventCities.slice(isHidden);
  const dispatch = useDispatch();
  const isRow = useSelector((state) => state.eventList.isRow);
  return (
    <StyledEvents>
      <StyledTopContainer>
        <StyledLeftContainer>
          <StyledCityList>
            {eventCitiesItems.map((item) => {
              return <StyledCityLink key={item.id}>{item.city}</StyledCityLink>;
            })}
            <StyledSeeMore onClick={() => setIsHidden(0)} $isHidden={isHidden}>
              {"SEE ALL"}
            </StyledSeeMore>
            <StyledSeeLess
              onClick={() => setIsHidden(- (eventCities.length / 2))}
              $isHidden={isHidden}
            >
              {"FEWER"}
            </StyledSeeLess>
          </StyledCityList>
        </StyledLeftContainer>
        <StyledRightContainer>
          <StyledSearchInput
            type="search"
            placeholder="Search"
          ></StyledSearchInput>
          <StyledIconContainer>
            <StyledColumnIcon onClick={() => dispatch(offRow())} $isRow={isRow} />
            <StyledRowIcon onClick={() => dispatch(onRow())} $isRow={isRow} />
          </StyledIconContainer>
        </StyledRightContainer>
      </StyledTopContainer>
      <EventLists />
    </StyledEvents>
  );
}
