export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="flex-center">
              {/* <!-- Facebook --> */}
              <a>
                <img src="/images/icons/facebook.svg" alt="facebook" />
              </a>
              {/* <!-- Twitter --> */}
              <a>
                <img src="/images/icons/twitter.svg" alt="twitter" />
              </a>
              {/* <!-- Google +--> */}
              <a>
                <img src="/images/icons/googleplus.svg" alt="google-plus" />
              </a>
              {/* <!--Instagram--> */}
              <a>
                <img src="/images/icons/instagram.svg" alt="instagram" />
              </a>
              {/* <!--Pinterest--> */}
              <a>
                <img src="/images/icons/pinterest.svg" alt="pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 text-white">
        @{Date().split(" ")[3]} ShinichiM
      </div>
    </footer>
  );
};
