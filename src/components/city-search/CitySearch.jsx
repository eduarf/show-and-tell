import styled from "styled-components";
import { eventCities } from "../../../data";
import { useState } from "react";
import { SiWindows } from "react-icons/si";
import { MdTableRows } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { onRow, offRow } from "../../features/eventListSlice";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledEvents = styled.section`
  background-color: var(--color-primary);
  padding: 6vh 0;
  @media only screen and (max-width: 720px) {
    padding: 3vh 0;
  }
`;

const StyledLeftContainer = styled.div``;

const StyledRightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  @media only screen and (max-width: 1180px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledCityList = styled.div`
  display: flex;
  gap: 1.3rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 720px) {
    line-height: 0.9;
  }
`;

const StyledCityLink = styled(Link)`
  /* display: ${(props) =>
    !props.$isIncludes || props.$isHidden ? "none" : "block"}; */
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--color-text);
  /* color: ${(props) => (props.$isIncludes ? "red" : "blue")}; */
  text-decoration: ${(props) => (props.$location ? "underline" : "none")};
  color: ${(props) =>
    props.$location ? "var(--color-blue)" : "var(--color-text)"};
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 720px) {
    font-size: 1.6rem;
  }
`;

const StyledTopContainer = styled.div`
  display: grid;
  grid-template-columns: 62% 38%;
  gap: 2rem;
  padding: 0 2vw;
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const StyledSeeMore = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  display: ${(props) => (props.$isHidden === 0 ? "none" : "block")};
  @media only screen and (max-width: 720px) {
    font-size: 1.6rem;
  }
`;
const StyledSeeLess = styled.a`
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  display: ${(props) =>
    props.$isHidden === -(eventCities.length / 2) ? "none" : "block"};
  @media only screen and (max-width: 720px) {
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
  @media only screen and (max-width: 1180px) {
    width: 85%;
  }
  @media only screen and (max-width: 720px) {
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

const StyledShowEveryWhere = styled(Link)`
  font-size: 1.8rem;
  color: var(--color-green);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -1px;
`;

export default function CitySearch() {
  const [isHidden, setIsHidden] = useState(-(eventCities.length / 2));
  const eventCitiesItems = eventCities.slice(isHidden);
  const dispatch = useDispatch();
  const isRow = useSelector((state) => state.eventList.isRow);
  const location = useLocation();
  return (
    <StyledEvents>
      <StyledTopContainer>
        <StyledLeftContainer>
          <StyledCityList>
            {location.pathname !== "/events" ? (
              <StyledShowEveryWhere to='/events'>Show EveryWhere</StyledShowEveryWhere>
            ) : null}
            {eventCitiesItems.map((item) => {
              const whLocation = location.pathname === `/events/${item.link}`;
              return (
                <StyledCityLink
                  to={`/events/${item.link}`}
                  key={item.id}
                  $location={whLocation}
                >
                  {item.city}
                </StyledCityLink>
              );
            })}
            <StyledSeeMore onClick={() => setIsHidden(0)} $isHidden={isHidden}>
              {"SEE ALL"}
            </StyledSeeMore>
            <StyledSeeLess
              onClick={() => setIsHidden(-(eventCities.length / 2))}
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
            <StyledColumnIcon
              onClick={() => dispatch(offRow())}
              $isRow={isRow}
            />
            <StyledRowIcon onClick={() => dispatch(onRow())} $isRow={isRow} />
          </StyledIconContainer>
        </StyledRightContainer>
      </StyledTopContainer>
    </StyledEvents>
  );
}
