import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface EventModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const EventModal = ({ show, setShow }: EventModalProps) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Ticket Purchase</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <select className="form-control form-control-lg option1">
          <option>Select day package</option>
          <option>1-Day-Package</option>
          <option>2-Day-Package</option>
          <option>3-Day-Package</option>
        </select>
        <select className="form-control form-control-lg">
          <option>Select number of passes</option>
          <option>1-Pass</option>
          <option>2-Passes</option>
          <option>3-Passes</option>
        </select>
        <div className="form-group">
          <label htmlFor={"purchase-email"}>Email Address</label>
          <input
            type={"email"}
            placeholder={"Enter a valid email address"}
            id={"purchase-email"}
            className={"form-control"}
          />

          <label htmlFor={"purchase-card-number"}>Card Number</label>
          <input
            type={""}
            placeholder={"Enter a valid credit card"}
            id={"purchase-card-number"}
            className={"form-control"}
          />
          <div className="d-flex">
          <label htmlFor={"purchase-card-expiration"}>Exp</label>
          <input
            type={"month"}
            min={`${(new Date()).getFullYear()}-01`}
            value={`${(new Date()).getFullYear()}-${(new Date()).getMonth()}`}
            id={"purchase-card-expiration"}
            className={"form-control"}
          />

          <label htmlFor={"purchase-card-cv"}>CVV</label>
          <input
            type={""}
            placeholder={"Enter a valid CVV"}
            id={"purchase-card-cv"}
            className={"form-control"}
          />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="btn btn-secondary"
          onClick={() => setShow(false)}
        >
          Close
        </Button>
        <Button
          variant="primary"
          className="btn btn-primary"
          onClick={() => setShow(false)}
        >
          Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
