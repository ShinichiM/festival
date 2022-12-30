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
  const handlePageChange = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const navigationClick = event.currentTarget.outerText;
    let navigationTo = "";
    if (navigationClick === "Food Festival" || navigationClick === "Home") {
      navigationTo = "/";
    } else if (navigationClick === "Schedule") {
      navigationTo = "/schedule";
    } else if (navigationClick === "Tickets") {
      navigationTo = "/tickets";
    } else {
      navigationTo = "/*";
    }
    window.location.pathname = navigationTo;
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <span
          className="navbar-brand cursor-pointer"
          onClick={(e) => handlePageChange(e)}
        >
          Food Festival
        </span>
        {/* <button className="navbar-brand" onClick={(e) => handlePageChange(e)}>Food Festival</button> */}
        {/* <a className="navbar-brand" href="#">
          Food Festival
        </a> */}
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
              {/* <a className="nav-link" href="./index.html">
                Home
                <span className="sr-only">(current)</span>
              </a> */}
              <span
                className="nav-link cursor-pointer"
                onClick={(e) => handlePageChange(e)}
              >
                Home
              </span>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="../schedule.html">
                Schedule
              </a> */}
              <span
                className="nav-link cursor-pointer"
                onClick={(e) => handlePageChange(e)}
              >
                Schedule
              </span>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="../tickets.html">
                Tickets
              </a> */}
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
