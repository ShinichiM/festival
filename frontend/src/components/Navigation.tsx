import React, { useState } from "react";
import "../styles/styles.css";
import "../styles/bootstrap.css";

interface NavigationProps {
  navSelected: string;
  setNavSelected: (navSelected: string) => void;
}
export const Navigation = ({
  navSelected,
  setNavSelected,
}: NavigationProps): JSX.Element => {
  const handlePageChange = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const navigationClick = event.currentTarget.outerText;
    let navigationTo = "";
    if (navigationClick === "Food Festival" || navigationClick === "Home") {
      setNavSelected(event.currentTarget.innerHTML.trim().toLowerCase());
      navigationTo = "/";
    } else if (navigationClick === "Schedule") {
      setNavSelected(event.currentTarget.innerHTML.trim().toLowerCase());
      navigationTo = "/schedule";
    } else if (navigationClick === "Tickets") {
      setNavSelected(event.currentTarget.innerHTML.trim().toLowerCase());
      navigationTo = "/tickets";
    } else {
      navigationTo = "/*";
    }
    window.location.pathname = navigationTo;
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span
          className="navbar-brand cursor-pointer"
          onClick={(e) => handlePageChange(e)}
        >
          Food Festival
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li
              className={`nav-item ${navSelected === "home" ? "active" : ""}`}
            >
              <span
                className="nav-link cursor-pointer"
                onClick={(e) => handlePageChange(e)}
              >
                Home
              </span>
            </li>
            <li
              className={`nav-item ${
                navSelected === "schedule" ? "active" : ""
              }`}
            >
              <span
                className="nav-link cursor-pointer"
                onClick={(e) => handlePageChange(e)}
              >
                Schedule
              </span>
            </li>
            <li
              className={`nav-item ${
                navSelected === "tickets" ? "active" : ""
              }`}
            >
              <span
                className="nav-link cursor-pointer"
                onClick={(e) => handlePageChange(e)}
              >
                Tickets
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
