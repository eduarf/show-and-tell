import styled from "styled-components";
import EventListRow from "./eventListRow/EventListRow";
import EventListColumn from "./eventListColumn/EventListColumn";
import { useSelector } from "react-redux";

const StyledEventLists = styled.div``;

const EventLists = () => {
  const isRow = useSelector((state) => state.eventList.isRow);
  console.log(isRow);

  return (
    <StyledEventLists>
      {isRow ? <EventListRow /> : <EventListColumn />}
    </StyledEventLists>
  );
};

export default EventLists;
