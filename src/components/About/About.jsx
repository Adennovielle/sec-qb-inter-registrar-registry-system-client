import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <div className="about-title">Litte Lemon</div>
        <br />
        <div className="about-subtitle">Chicago</div>
        <br />
        <div className="about-description">
          Located in Chicago, Little Lemon is renowned <br /> for its delectable
          dishes made from fresh, local <br />
          ingredients. Offering a COZY ambiance and attentive <br /> service,
          it's an ideal destination for casual dining or memorable gatherings.
          Enjoy delicious cuisine and <br /> delightful moments at Little Lemon.
        </div>
      </div>
      <div className="about-right">
        <div className="about-images">
          <img
            className="about-img-1"
            src="../../src/assets/Mario-Adrian-1.jpg"
            alt="about image"
          />
          <img
            className="about-img-2"
            src="../../src/assets/Mario-Adrian-2.jpg"
            alt="about image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
