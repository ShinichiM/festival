import React from "react";
import "../styles/styles.css";
import "../styles/bootstrap.css";
// <link rel="stylesheet" href="/assets/css/style.css" />
// <link rel="stylesheet" href="/assets/css/bootstrap.css" />
// <link
//   rel="stylesheet"
//   href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
// />
export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Food Festival
        </a>
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
            <li className="nav-item active">
              <a className="nav-link" href="./index.html">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../schedule.html">
                Schedule
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../tickets.html">
                Tickets
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
