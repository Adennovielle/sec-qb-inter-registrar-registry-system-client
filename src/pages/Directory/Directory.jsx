import React, { useEffect } from "react";
import "./Directory.css";
import { menuItems } from "../../components/menuDB";
import { useLocation } from "react-router-dom";

const Directory = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <section id="directory">
      <h1>NOT YET IMPLEMENTED</h1>
    </section>
  );
};

export default Directory;
