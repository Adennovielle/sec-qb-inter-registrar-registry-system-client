import React from "react";
import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "../testimonials-db";
const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <div className="testimonials-title">Testimonials</div>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            comment={testimonial.comment}
            img={testimonial.img}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
