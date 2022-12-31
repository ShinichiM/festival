import React, { useState } from "react";
import { promises } from "stream";

export const Schedule = (): JSX.Element => {
  const eventList = require("../components/ScheduleList.json");
  const [newDay, setNewDay] = useState<boolean>(true);

  const dayOneEvents = eventList.filter((item: any) => item.day === "Day 1");
  const dayTwoEvents = eventList.filter((item: any) => item.day === "Day 2");
  const dayThreeEvents = eventList.filter((item: any) => item.day === "Day 3");

  const handleEventSelection = (event: React.MouseEvent) => {
    event.preventDefault();

    window.location.host === "localhost:3000"
      ? window.location.replace(
          `http://${window.location.host}/events/${event.currentTarget.id}`
        )
      : window.history.pushState(
          { page: `${event.currentTarget.id} page` },
          `${event.currentTarget.id} page`,
          `/${event.currentTarget.id}`
        );

    // const path = `/events/${event.currentTarget.id}`;
    // document.location.pathname = path;
  };

  const createDayOneEvents = (): JSX.Element => {
    const jsxElements = dayOneEvents ? (
      <div className="container mt-5" id="day-1-head">
        <div className="card">
          <h5 className="card-header">Day 1</h5>
          {dayOneEvents.map((item: any) => {
            const title =
              item.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .trim()
                .concat("#day-1") || "";
            return (
              <div
                className="card-body clickable bg-dark text-white border"
                onClick={(e) => handleEventSelection(e)}
                id={`${title}`}
              >
                <h5 className="card-title">{item.title || ""}</h5>
                <p className="card-text">
                  {item.description || "Oops! We have nothing :("}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <></>
    );
    return jsxElements;
  };
  const createDayTwoEvents = (): JSX.Element => {
    const jsxElements = dayTwoEvents ? (
      <div className="container mt-5" id="day-1-head">
        <div className="card">
          <h5 className="card-header">Day 2</h5>
          {dayTwoEvents.map((item: any) => {
            const title =
              item.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .trim()
                .concat("#day-2") || "";
            return (
              <div
                className="card-body clickable bg-dark text-white border"
                onClick={(e) => handleEventSelection(e)}
                id={`${title}`}
              >
                <h5 className="card-title">{item.title || ""}</h5>
                <p className="card-text">
                  {item.description || "Oops! We have nothing :("}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <></>
    );
    return jsxElements;
  };
  const createDayThreeEvents = (): JSX.Element => {
    const jsxElements = dayThreeEvents ? (
      <div className="container mt-5" id="day-1-head">
        <div className="card">
          <h5 className="card-header">Day 3</h5>
          {dayThreeEvents.map((item: any) => {
            const title =
              item.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .trim()
                .concat("#day-3") || "";
            return (
              <div
                className="card-body clickable bg-dark text-white border"
                onClick={(e) => handleEventSelection(e)}
                id={`${title}`}
              >
                <h5 className="card-title">{item.title || ""}</h5>
                <p className="card-text">
                  {item.description || "Oops! We have nothing :("}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <></>
    );
    return jsxElements;
  };
  return (
    <div className="schedule-content h-100vh w-100 overflow-auto py-3">
      <div id="page" className="container">
        <h1 className="mb-3 text-white bg-dark w-fit-content rounded px-3">
          Our Schedule
        </h1>
        {createDayOneEvents()}
        {createDayTwoEvents()}
        {createDayThreeEvents()}
      </div>
    </div>
  );
};
