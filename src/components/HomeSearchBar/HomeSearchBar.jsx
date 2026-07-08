import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import "./HomeSearchBar.css";
const HomeSearchBar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="search-overlay">
      <div className="search-header shadow-sm">
        <button
          className="btn btn-link text-dark fs-4 text-decoration-none"
          onClick={onClose}
        >
          <FaArrowLeft />
        </button>

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            className="form-control border-0 shadow-none"
            placeholder="Search this site"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSearchBar;
