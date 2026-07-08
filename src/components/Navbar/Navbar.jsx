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

  // const [active, setActive] = useState(
  //   () => localStorage.getItem("activeNavLink") || "home",
  // );

  // useEffect(() => {
  //   localStorage.setItem("activeNavLink", active);
  // }, [active]);

  const hideMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${scrolled ? "nav-bg-white" : ""}`}>
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
            <Link to="/">QBID Search</Link>
          </li>

          {/* <li
            onClick={() => setActive("highlights")}
            className={`link ${active === "highlights" ? "active" : ""}`}
          >
            <Link
              to="/"
              state={{ scrollTo: "highlights", offset: -30 }}
              className="reactrouter-link"
            >
              Highlights
            </Link>
          </li> */}

          {/* <li
            onClick={() => setActive("testimonials")}
            className={`link ${active === "testimonials" ? "active" : ""}`}
          >
            <Link
              to="/"
              state={{ scrollTo: "testimonials", offset: -140 }}
              className="reactrouter-link"
            >
              Testimonials
            </Link>
          </li> */}

          {/* <li
            onClick={() => setActive("MyRegistry")}
            className={`link ${active === "MyRegistry" ? "active" : ""}`}
          >
            <Link
              to="/"
              state={{ scrollTo: "My-Registry", offset: -150 }}
              className="reactrouter-link"
            >
              My Registry
            </Link>
          </li> */}

          <li
            className={`link ${
              location.pathname === "/My-Registry" ? "active" : ""
            }`}
          >
            <Link to="/My-Registry">My Registry</Link>
          </li>

          {/* <li
            onClick={() => setActive("contact")}
            className={`link ${active === "contact" ? "active" : ""}`}
          >
            <Link
              to="/"
              state={{ scrollTo: "footer", offset: -80 }}
              className="reactrouter-link"
            >
              Contact Us
            </Link>
          </li> */}
          <li
            className={`link ${
              location.pathname === "/Submission-Portal" ? "active" : ""
            }`}
          >
            <Link to="/Submission-Portal">Submission Portal</Link>
          </li>

          <li
            className={`link ${
              location.pathname === "/Directory" ? "active" : ""
            }`}
          >
            <Link to="/Directory">Directory</Link>
          </li>

          <li
            className={`link ${location.pathname === "/auth" ? "active" : ""}`}
          >
            <Link to="/auth" className="reactrouter-link">
              Login
            </Link>
          </li>
          <li className="link search-icon" onClick={() => setOpenSearch(true)}>
            <IoSearchSharp
              className={`fs-4 cursor-pointer ${scrolled ? "text-black" : "text-white"}`}
            />
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
