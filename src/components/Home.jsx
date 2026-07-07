import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import QualifiedBuyerVerification from "./QualifiedBuyerVerification/QualifiedBuyerVerification";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 50,
        offset: location.state.offset ?? -80, // fallback offset
      });
    }
  }, [location]);
  return (
    <>
      <Hero />
      <QualifiedBuyerVerification />

      {/* <div className="container">
        <Highlights />
        <Testimonials />
        <About />
      </div> */}
    </>
  );
};
