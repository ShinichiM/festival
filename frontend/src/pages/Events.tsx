import React from "react";

export const Events = (): JSX.Element => {
  const imgPlaceHolder: string = "https://via.placeholder.com/350x150";
  const selectedEvent = window.location.pathname.split("/events/")[1];
  const day = window.location.hash.split("#")[1];

  const eventList = require("../components/ScheduleList.json");
  const currentEvent = eventList.filter(
    (item: any) =>
      item.title.toLowerCase().replaceAll(" ", "-").trim() === selectedEvent &&
      item.day.trim().toLowerCase().replaceAll(" ", "-") === day
  )[0];
  console.log(currentEvent);

  const buyTicketHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const origin = window.location.origin;
    if (window.location.hash) {
      return (window.location.href = origin.concat("/tickets/"));
    } else {
      window.location.pathname = "/tickets/";
    }
  };

  return (
    <div className="container">
      <div className="card mb-3">
        <img
          className="card-img-top"
          src={currentEvent.image || imgPlaceHolder}
          alt="placeholder-img"
        />
        <div className="card-body">
          <h1 className="card-title">
            {currentEvent.title || "No title information available."}
          </h1>
          <p className="card-text mt-3">
            {currentEvent.description || "No description available."}
          </p>
          {/* <a className="btn btn-primary">Buy Tickets</a> */}
          <span
            className="btn btn-primary"
            onClick={(e) => buyTicketHandler(e)}
          >
            Buy Tickets
          </span>
        </div>
      </div>
    </div>
  );
};
