import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../features/themeSlice";

export default function EventDetails({ item }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeTheme(item.detailColor));
    return () => {
      dispatch(changeTheme('rgb(255, 255, 153)'));
    };
  }, [dispatch, item]);
  return <div>Event Details</div>;
}

EventDetails.propTypes = {
  item: PropTypes.object,
};
