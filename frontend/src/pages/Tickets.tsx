import React from "react";

export const Tickets = () => {
  return (
    <>
      <div className="ticket-container container mt-10">
        <h1>Ticket Options</h1>
        <table className="table table-striped table-dark" id="ticket-table">
          <thead>
            <tr>
              <th scope="col">Options</th>
              <th scope="col">1-Day Pass</th>
              <th scope="col">2-Day Pass</th>
              <th scope="col">3-Day Pass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Single Pass</th>
              <td>$25</td>
              <td>$50</td>
              <td>$70</td>
            </tr>
            <tr>
              <th scope="row">Pack 2</th>
              <td>$40</td>
              <td>$90</td>
              <td>$120</td>
            </tr>
            <tr>
              <th scope="row">Pack of 3</th>
              <td>$55</td>
              <td>$80</td>
              <td>$105</td>
            </tr>
          </tbody>
        </table>
        <div className="col text-center">
          <button
            type="button"
            className="btn btn-primary purchase"
            data-toggle="modal"
            data-target="#purchaseModal"
          >
            Purchase Tickets!
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="purchaseModal"
        role="dialog"
        aria-labelledby="purchaseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="purchaseModalLabel">
                Purchase Tickets
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <select className="form-control form-control-lg option1">
                <option>1-Day-Package</option>
                <option>2-Day-Package</option>
                <option>3-Day-Package</option>
              </select>
              <select className="form-control">
                <option>Single</option>
                <option>2 Passes</option>
                <option>3 Passes</option>
              </select>
              <div className="form-group">
                {/* <label for="email">Email address</label> */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Nevermind!
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="purchaseBtn"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
