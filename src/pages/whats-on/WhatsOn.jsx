import EventLists from "../../components/event-lists/EventLists";
import CitySearch from "../../components/city-search/CitySearch";
import styled from "styled-components";

const StyledWhatsOn = styled.div`
  background-color: var(--color-primary);
  padding-bottom: 6vh;
`;

export default function WhatsOn() {
  return (
    <StyledWhatsOn>
      <CitySearch />
      <EventLists />
    </StyledWhatsOn>
  );
}
