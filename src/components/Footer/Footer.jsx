import React from "react";
import "./Footer.css";
import govSeal from "../../assets/gov-ph-seal-footer.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark pt-5">
      <div className="container">
        <div className="row">
          {/* Government Seal */}
          <div className="col-12 col-md-6 col-lg-3">
            <img
              src={govSeal}
              alt="Government Seal"
              className="img-fluid mb-3 opacity-50"
            />
          </div>

          {/* Republic of the Philippines */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold">Republic of the Philippines</h5>
            <p
              className="text-white text-start mb-0"
              style={{ fontSize: "15px" }}
            >
              All content is in the public domain unless
              <br />
              otherwise stated.
            </p>
          </div>

          {/* About SEC-EASE */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold">About SEC-EASE</h5>

            <p className="text-white text-start " style={{ fontSize: "15px" }}>
              Exceptional and Alternative Submissions Environment (EASE)
            </p>

            <ul className="list-unstyled">
              <li>
                <a href="https://www.sec.gov.ph/">SEC Website</a>
              </li>
              <li>
                <a href="https://www.gov.ph/">GOVPH</a>
              </li>
              <li>
                <a href="#">Open Data Portal</a>
              </li>
              <li>
                <a href="https://www.officialgazette.gov.ph/">
                  Official Gazette
                </a>
              </li>
            </ul>
          </div>

          {/* SEC Online Services */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="fw-bold">SEC Online Services</h5>

            <ul className="list-unstyled">
              <li>
                <a href="https://www.sec.gov.ph/sec-esecure/">eSECURE</a>
              </li>
              <li>
                <a href="https://esparc.sec.gov.ph/">eSPARC</a>
              </li>
              <li>
                <a href="https://secexpress.ph">eFAST</a>
              </li>
              <li>
                <a href="https://esearch.sec.gov.ph/user/login">eSEARCH</a>
              </li>
              <li>
                <a href="https://espaysec.sec.gov.ph/payment-portal/home">
                  eSPAYSEC
                </a>
              </li>
              <li>
                <a href="https://mc28.sec.gov.ph/mc28-list-temp/SecuritiesandExchangeCommission">
                  MC28 Submission
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-secondary mt-4">
        © 2026 Securities and Exchange Commission. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
