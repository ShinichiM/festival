import { FestivalCarousel } from "../components/FestivalCarousel";
import "../styles/App.css";
import "../styles/index.css";
import "../styles/bootstrap.css";
export const Home = (): JSX.Element => {
  return (
    <>
      <section>
        <FestivalCarousel />

        <div
          className="container mobile-landing-page"
          style={{
            height: "100vh",
            backgroundColor: "#282c34",
          }}
        >
          <div
            className="h-100 d-flex flex-column justify-content-center"
            style={{ backgroundColor: "#282c34" }}
          >
            <div className="row align-items-center justify-content-center">
              <h2 className="display-4 mb-2 text-white">
                Welcome to the regional food event!
              </h2>
            </div>
            <div className="row align-items-center justify-content-center">
              <h3 className="text-white">
                Here is your guide to all things delicious.
              </h3>
            </div>
            <div className="mt-4 row align-items-center justify-content-center">
              <span
                className="btn btn-primary"
                onClick={() => (document.location.pathname = "/tickets")}
              >
                {" "}
                Sign me up!{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="page-content">
          <section className="py-5">
            <div className="container">
              <h1 className="display-4">Schedule</h1>
              <p className="lead">
                We've got a great event planned! From Friday to Sunday, we will
                be serving differently themed menus on each day!
              </p>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h1 className="display-4">Testimonials</h1>
              <p className="lead">Lorem ipsum add testimonials here</p>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h1 className="display-4">Mission Statement</h1>
              <p className="lead">
                Here at food event, we pride ourselves on delicious food and fun
                weekends!
              </p>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <h1 className="display-4">Our Numbers</h1>
              <p className="lead">
                Some Cool stats here. Over 100k served etc.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
