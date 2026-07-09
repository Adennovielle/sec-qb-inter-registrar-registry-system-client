import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import HomeSearchBar from "../HomeSearchBar/HomeSearchBar";

const Navbar = () => {
  const location = useLocation();

  const [openSearch, setOpenSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = location.pathname === "/";
  const isWhiteNavbar = scrolled || !isHomePage;
  const navTextColor = isWhiteNavbar ? "text-dark" : "text-white";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hideMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${isWhiteNavbar ? "nav-bg-white" : ""}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link
          to="/"
          state={{ scrollTo: "hero", offset: -80 }}
          className="reactrouter-link lemon-logo"
        >
          <img src="./src/assets/sec-logo.png" alt="sec-logo" />
          <h4>SECURITIES AND EXCHANGE COMMISSION</h4>
        </Link>

        <ul className={`nav-links ${showMenu ? "showMenu" : ""}`}>
          <li className={`link ${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/" className={navTextColor}>
              QBID Search
            </Link>
          </li>

          <li
            className={`link ${
              location.pathname === "/My-Registry" ? "active" : ""
            }`}
          >
            <Link to="/My-Registry" className={navTextColor}>
              My Registry
            </Link>
          </li>

          <li
            className={`link ${
              location.pathname === "/submission-portal" ? "active" : ""
            }`}
          >
            <Link to="/submission-portal" className={navTextColor}>
              Submission Portal
            </Link>
          </li>

          <li
            className={`link ${
              location.pathname === "/directory" ? "active" : ""
            }`}
          >
            <Link to="/directory" className={navTextColor}>
              Directory
            </Link>
          </li>

          <li
            className={`link ${location.pathname === "/auth" ? "active" : ""} `}
          >
            <Link
              to="/auth"
              className=" text-white"
              className={`${navTextColor} reactrouter-link`}
            >
              Login
            </Link>
          </li>
          <li className="link search-icon" onClick={() => setOpenSearch(true)}>
            <IoSearchSharp className={`fs-4 cursor-pointer ${navTextColor}`} />
          </li>
        </ul>
        <GiHamburgerMenu
          className={`burgermenu  ${showMenu ? "whiteBurger" : ""}`}
          onClick={hideMenu}
        />
      </div>
      <HomeSearchBar isOpen={openSearch} onClose={() => setOpenSearch(false)} />
    </nav>
  );
};

export default Navbar;
