import { Carousel, CarouselItem } from "react-bootstrap";
import { EventModal } from "../components/EventModal";
import { useState } from "react";

export const FestivalCarousel = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Carousel fade>
      <CarouselItem>
        <img
          className="d-block w-100 h-100vh"
          src="/images/chips.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <h2 className="display-4 mb-2">
                Welcome to the regional food event!
              </h2>
            </div>
            <div className="row align-items-center justify-content-center">
              <h3>Here is your guide to all things delicious.</h3>
            </div>
            <div className="mt-4 row align-items-center justify-content-center">
              <span className="btn btn-primary" onClick={() => setShow(true)}>
                {" "}
                Sign me up!{" "}
              </span>
            </div>
          </div>
          <EventModal show={show} setShow={setShow} />
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100 h-100vh"
          src="/images/falafel.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <h2 className="display-4 mb-2">
                Hosting various events with local cuisine!
              </h2>
            </div>
            <div className="row align-items-center justify-content-center">
              <h3>Test text input</h3>
            </div>
            <div className="mt-4 row align-items-center justify-content-center"></div>
          </div>
        </Carousel.Caption>
      </CarouselItem>
      <CarouselItem>
        <img
          className="d-block w-100 h-100vh"
          src="images/food_stall.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <h2 className="display-4 mb-2">Come check us out!</h2>
            </div>
            <div className="row align-items-center justify-content-center">
              <h3>Test Text</h3>
            </div>
            <div className="mt-4 row align-items-center justify-content-center"></div>
          </div>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  );
};
