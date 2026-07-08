import React, { useEffect } from "react";
import "./Directory.css";
import { menuItems } from "../../components/menuDB";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="menu">
      <center>
        <h1>Our Menu</h1>
        <p>Explore our delicious offerings!</p>
      </center>

      <div className="menu-cards">
        {menuItems.map((item) => (
          <div className="menu-card card" key={item.id}>
            <div className="menu-card-img card-img">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-card-body card-body">
              <div className="menu-card-title card-title">
                <span>{item.name}</span>
                <span className="menu-card-price card-price">
                  ${item.price}
                </span>
              </div>
              <div className="menu-card-description card-description">
                {item.description}
              </div>
            </div>
            <div className="menu-card-order card-order">
              Order a delivery <img src="./src/assets/basket.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
