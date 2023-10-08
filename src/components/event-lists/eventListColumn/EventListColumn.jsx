import { eventsItemsDetails } from "../../../../data";

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
  
  return <div>EventListColumn</div>;
};

export default EventListColumn;
