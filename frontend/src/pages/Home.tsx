import { FestivalCarousel } from "../components/FestivalCarousel";
import { Navigation } from "../components/Navigation";
// import "../styles/bootstrap.css";
// import "../styles/styles.css";

export const Home = () => {
  return (
    <section>
      <FestivalCarousel />
    <div className="page-content">
      <section className="py-5">
        <div className="container">
          <h1 className="display-4">Schedule</h1>
          <p className="lead">
            We've got a great event planned! From Friday to Sunday, we will be
            serving differently themed menus on each day!
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
          <p className="lead">Some Cool stats here. Over 100k served etc.</p>
        </div>
      </section>
    </div>

    <section className="call-to-action">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <h1 className="mt-4 mr-5 text-white">Ready to EAT?</h1>
          <a className="ml-5 btn btn-white">RSVP now!</a>
        </div>
      </div>
    </section>
    <div className="modal"  id="myModal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
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
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
