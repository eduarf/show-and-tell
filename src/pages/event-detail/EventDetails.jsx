import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../features/themeSlice";
import styled from "styled-components";
import EventIntro from "./event-detail-comps/EventIntro";

const StyledEventDetails = styled.div``;

export default function EventDetails({ item }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeTheme(item.detailColor));
    return () => {
      dispatch(changeTheme('rgb(255, 255, 153)'));
    };
  }, [dispatch, item]);
  return <StyledEventDetails>
    <EventIntro color={item.detailColor} comedian={item.group} eventName={item.gamesName} img={item.photoBig} />
  </StyledEventDetails>;
}

EventDetails.propTypes = {
  item: PropTypes.object,
};
