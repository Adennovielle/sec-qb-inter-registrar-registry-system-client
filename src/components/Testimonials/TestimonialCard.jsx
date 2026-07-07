import React from "react";

const TestimonialCard = ({ name, comment, img, rating }) => {
  return (
    <div className="testimonial-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="comment">
        <p>{comment}</p>
      </div>
      <div className="rating">
        Rating:
        {Array.from({ length: rating }, (_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
