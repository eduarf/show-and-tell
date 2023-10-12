import { eventsItemsDetails } from "../../../data";
import CitySearch from "../../components/city-search/CitySearch";
import PropTypes from 'prop-types';
import EventListColumn from "../../components/event-lists/eventListColumn/EventListColumn";
import { useSelector } from "react-redux";
import EventListRow from "../../components/event-lists/eventListRow/EventListRow";
import styled from "styled-components";


const StyledLocation = styled.div`
    background-color: var(--color-primary);
    padding-bottom: 6vh;
`;

export default function Location({ city }) {
  const uniqueItems = {};
  const filterData = eventsItemsDetails.filter(item => item.city === city);
  const isRow = useSelector((state) => state.eventList.isRow);
  

  filterData.forEach((item) => {
    const key = `${item.group}_${item.gamesName}`;
    if (!uniqueItems[key]) {
      uniqueItems[key] = item;
    }
  });

  const uniqueItemsArray = Object.values(uniqueItems);

  return (
    <StyledLocation>
      <CitySearch />
      {isRow ? <EventListRow filterDataRow={filterData} /> : <EventListColumn filterDataColumn={uniqueItemsArray} />}
    </StyledLocation>
  );
}



Location.propTypes = {

    city: PropTypes.string,
};