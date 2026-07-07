import React from "react";
import "./QualifiedBuyerVerification.css";
import { useNavigate } from "react-router-dom";

const QualifiedBuyerVerification = () => {
  const navigate = useNavigate();
  return (
    <section
      className="qualified-buyer-verification "
      id="qualified-buyer-verification"
    >
      <div
        className="text-center text-white fs-5 te bg-sec-color"
        style={{ padding: "35px" }}
      >
        To verify QB status, enter the provided Qualified Buyer Identification
        Number (QBID) below:
      </div>

      <div className="mt-5 d-flex justify-content-center extra-padding">
        <div
          className="shadow-lg border-0 rounded-3 "
          style={{ width: "100%", maxWidth: "1000px" }}
        >
          <div className="card-body p-4">
            <h4 className="fw-bold mb-1">
              <span className="position-relative">
                Qualified Buyer Verification
              </span>
            </h4>

            <small className="text-secondary mb-4">
              Securities and Exchange Commission – Qualified Buyer
              Inter-Registrar Registry System
            </small>

            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Qualified Buyer Identification Number (QBID)"
            />

            <button className="btn btn-success px-4">Search</button>

            <button className="btn btn-light border px-4 ms-2">Clear</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifiedBuyerVerification;
