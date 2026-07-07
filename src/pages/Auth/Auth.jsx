import React, { useEffect } from "react";
import "./Auth.css";
import { FaFacebook, FaInstagramSquare, FaGoogle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="login-page">
      <form>
        <div className="form-header">
          <h2>SIGN-IN</h2>
          <p>Please enter your username and password to sign in.</p>
        </div>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />

        <div className="socmed-icons">
          <FaFacebook className="icon" />
          <FaInstagramSquare className="icon" />
          <FaGoogle className="icon" />
        </div>

        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Auth;
