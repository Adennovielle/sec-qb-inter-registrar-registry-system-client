import React, { useState } from "react";
import "./MyRegistry.css";
import {
  BsArrowClockwise,
  BsSearch,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import { CiExport } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MyRegistry = () => {
  const [status, setStatus] = useState("Open");
  const [activeTab, setActiveTab] = useState("Issuing Registrar Tab");

  const registryTabs = [
    "Central Registry",
    "Issuing Registrar Tab",
    "Relying Registrar Tab",
    "Submissions",
    "Users",
  ];

  const MyRegistryData = [
    {
      id: 1,
      qbid: "MET-IND-24-6gH5vcQ7",
      qbIdType: "Individual",
      registrationDate: "	17-May-2024",
      certicateNo: "3034473952",
      validityPeriod: "17-May-2027",
      qbStatus: "ACTIVE",
      issuingRegistrar: "METROPOLITAN SAMPLE ONLY",
      nameOfRelyingRegistrar: "Philippine sAMPLE ONLY",
      dateOfEvaluation: "17-May-2024",
      nameOfPersonnelConductedEval: "sample",
      designationOfPersonnel: "sample",
    },
    {
      id: 1,
      qbid: "MET-IND-24-6gH5vcQ7",
      qbIdType: "Individual",
      registrationDate: "	17-May-2024",
      certicateNo: "3034473952",
      validityPeriod: "17-May-2027",
      qbStatus: "ACTIVE",
      issuingRegistrar: "METROPOLITAN SAMPLE ONLY",
      nameOfRelyingRegistrar: "Philippine sAMPLE ONLY",
      dateOfEvaluation: "17-May-2024",
      nameOfPersonnelConductedEval: "sample",
      designationOfPersonnel: "sample",
    },
    {
      id: 1,
      qbid: "MET-IND-24-6gH5vcQ7",
      qbIdType: "Individual",
      registrationDate: "	17-May-2024",
      certicateNo: "3034473952",
      validityPeriod: "17-May-2027",
      qbStatus: "ACTIVE",
      issuingRegistrar: "METROPOLITAN SAMPLE ONLY",
      nameOfRelyingRegistrar: "Philippine sAMPLE ONLY",
      dateOfEvaluation: "17-May-2024",
      nameOfPersonnelConductedEval: "sample",
      designationOfPersonnel: "sample",
    },
    {
      id: 1,
      qbid: "MET-IND-24-6gH5vcQ7",
      qbIdType: "Individual",
      registrationDate: "	17-May-2024",
      certicateNo: "3034473952",
      validityPeriod: "17-May-2027",
      qbStatus: "ACTIVE",
      issuingRegistrar: "METROPOLITAN SAMPLE ONLY",
      nameOfRelyingRegistrar: "Philippine sAMPLE ONLY",
      dateOfEvaluation: "17-May-2024",
      nameOfPersonnelConductedEval: "sample",
      designationOfPersonnel: "sample",
    },
    {
      id: 1,
      qbid: "MET-IND-24-6gH5vcQ7",
      qbIdType: "Individual",
      registrationDate: "	17-May-2024",
      certicateNo: "3034473952",
      validityPeriod: "17-May-2027",
      qbStatus: "ACTIVE",
      issuingRegistrar: "METROPOLITAN SAMPLE ONLY",
      nameOfRelyingRegistrar: "Philippine sAMPLE ONLY",
      dateOfEvaluation: "17-May-2024",
      nameOfPersonnelConductedEval: "sample",
      designationOfPersonnel: "sample",
    },
  ];

  return (
    <section id="my-registry">
      <div className="container d-flex align-items-center flex-column">
        {/* Header */}
        {/* <div className="card shadow-sm border-0 mb-4">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h3 className="fw-bold text-success mb-0">Tickets</h3>

            <button className="btn btn-outline-success">
              <BsArrowClockwise />
            </button>
          </div>
        </div> */}

        {/* Toolbar */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="mb-4">
              <button className="btn btn-secondary me-2 ps-4 pe-4 pt-2 pb-2">
                Issuing Tab
              </button>{" "}
              <button className="btn btn-success ps-4 pe-4 pt-2 pb-2">
                Relying Tab
              </button>
            </div>
            <div className="align-items-centerprimary">
              <div className=" d-flex ">
                <button className="btn btn-light d-flex align-items-center me-2 gap-2">
                  {" "}
                  <IoFilterSharp />
                  Filters
                  <MdOutlineKeyboardArrowDown />
                </button>
                <button className="btn btn-light d-flex align-items-center gap-2">
                  <CiExport />
                  Export
                </button>
                <div
                  className="input-group me-2"
                  style={{ maxWidth: "550px", marginLeft: "auto" }}
                >
                  <span className="input-group-text">
                    <BsSearch />
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
                <button className="btn btn-success d-flex align-items-center">
                  {" "}
                  <BsArrowClockwise /> Update
                </button>
              </div>

              {/* <div className="col-lg text-lg-end">
                <div className="btn-group">
                  <button
                    className={`btn ${
                      status === "Open" ? "btn-success" : "btn-outline-success"
                    }`}
                    onClick={() => setStatus("Open")}
                  >
                    Open
                  </button>

                  <button
                    className={`btn ${
                      status === "Pending"
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                    onClick={() => setStatus("Pending")}
                  >
                    Pending
                  </button>

                  <button
                    className={`btn ${
                      status === "Closed"
                        ? "btn-secondary"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => setStatus("Closed")}
                  >
                    Closed
                  </button>

                  <button
                    className={`btn ${
                      status === "All" ? "btn-dark" : "btn-outline-dark"
                    }`}
                    onClick={() => setStatus("All")}
                  >
                    All
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card shadow-sm border-0">
          <div className="card-body p-0 ">
            <div class="p-3 mb-2 bg-warning-subtle text-warning-emphasis">
              SEC Central Registry of Qualified Buyers_v3
            </div>
            <div className="table-responsive p-2">
              <table className="table table-hover align-middle mb-0 ">
                <thead className="table-success">
                  <tr>
                    <th>QBID</th>
                    <th>QBID Type</th>
                    <th>Registration Date</th>
                    <th>Certificate No.</th>
                    <th>Validity Period</th>
                    <th>QB Status</th>
                    <th>Issuing Registrar</th>
                    <th>Name of Relying Registrar</th>
                    <th>Date of Evaluation</th>
                    <th>Name of Personnel who conducted the evaluation</th>
                    <th>Designation of the Personnel</th>
                  </tr>
                </thead>

                <tbody>
                  {MyRegistryData.length > 0 ? (
                    MyRegistryData.map((item) => (
                      <tr key={item.id}>
                        <td data-label="QBID">{item.qbid}</td>
                        <td data-label="QBID Type">{item.qbIdType}</td>
                        <td data-label="Registration Date">
                          {item.registrationDate}
                        </td>
                        <td data-label="Certificate No.">{item.certicateNo}</td>
                        <td data-label="Validity Period">
                          {item.validityPeriod}
                        </td>
                        <td data-label="QB Status">{item.qbStatus}</td>
                        <td data-label="Issuing Registrar">
                          {item.issuingRegistrar}
                        </td>
                        <td data-label="Name of Relying Registrar">
                          {item.nameOfRelyingRegistrar}
                        </td>
                        <td data-label="Date of Evaluation">
                          {item.dateOfEvaluation}
                        </td>
                        <td data-label="Name of Personnel who conducted the evaluation">
                          {item.nameOfPersonnelConductedEval}
                        </td>
                        <td data-label="Designation of the Personnel">
                          {item.designationOfPersonnel}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center py-5">
                        No records found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="border-bottom px-3 bg-light">
              <ul className="nav nav-tabs border-0">
                {registryTabs.map((tab) => (
                  <li className="nav-item" key={tab}>
                    <button
                      className={`nav-link ${
                        activeTab === tab ? "active fw-semibold" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="d-flex justify-content-between align-items-center p-3 border-top">
              <small className="text-muted">
                Showing {MyRegistryData.length} record(s)
              </small>

              <nav>
                <ul className="pagination pagination-sm mb-0">
                  <li className="page-item disabled">
                    <button className="page-link">
                      <BsChevronLeft />
                    </button>
                  </li>

                  <li className="page-item ">
                    <button className="page-link">1</button>
                  </li>
                  <li className="page-item active">
                    <button className="page-link">2</button>
                  </li>
                  <li className="page-item ">
                    <button className="page-link">3</button>
                  </li>

                  <li className="page-item disabled">
                    <button className="page-link">
                      <BsChevronRight />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRegistry;
