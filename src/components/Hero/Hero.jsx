import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero" id="hero">
      <div className="container  d-flex align-items-center justify-content-center ">
        <div>
          <p className="hero-center-text fs-1 text-white">
            QB INTER-REGISTRAR REGISTRY SYSTEM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
