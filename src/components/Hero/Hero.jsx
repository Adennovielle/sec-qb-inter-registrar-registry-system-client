import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.3); // Adjust speed here
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="hero"
      id="hero"
      style={{
        backgroundPosition: `center calc(50% + ${offset}px)`,
      }}
    >
      <div className="container d-flex align-items-center justify-content-center">
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
