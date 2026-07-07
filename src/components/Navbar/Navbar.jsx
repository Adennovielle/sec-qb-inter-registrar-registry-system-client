import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
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

  const [active, setActive] = useState(
    () => localStorage.getItem("activeNavLink") || "home",
  );

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeNavLink", active);
  }, [active]);

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
          <li
            onClick={() => setActive("QCIDSearch")}
            className={`link ${active === "QCIDSearch" ? "active" : ""}`}
          >
            <Link to="/" state={{ scrollTo: "QCIDSearch", offset: -80 }}>
              QCIDSearch
            </Link>
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

          <li
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
            onClick={() => setActive("Submission Portal")}
            className={`link ${active === "Submission Portal" ? "active" : ""}`}
          >
            <Link to="/Submission-Portal" className="reactrouter-link">
              Submission Portal
            </Link>
          </li>

          <li
            onClick={() => setActive("Directory")}
            className={`link ${active === "Directory" ? "active" : ""}`}
          >
            <Link to="/Directory" className="reactrouter-link">
              Directory
            </Link>
          </li>

          {/* <li
            onClick={() => setActive("order-online")}
            className={`link ${active === "order-online" ? "active" : ""}`}
          >
            <Link to="/order-online" className="reactrouter-link">
              Order Online
            </Link>
          </li> */}

          <li
            onClick={() => setActive("auth")}
            className={`link ${active === "auth" ? "active" : ""}`}
          >
            <Link to="/auth" className="reactrouter-link">
              Login
            </Link>
          </li>
          <li class="link search-icon ">
            <IoSearchSharp
              class={`fs-4 cursor-pointer ${scrolled ? "text-black" : "text-white"}`}
            />
          </li>
        </ul>
        <GiHamburgerMenu
          className={`burgermenu  ${showMenu ? "whiteBurger" : ""}`}
          onClick={hideMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
