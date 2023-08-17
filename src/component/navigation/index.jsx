
import React from "react";
import {useState} from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const Navigation = () => {
    const [activeItem, setActiveItem] = useState("Home"); // Default active item
  
    const handleItemClick = (item) => {
      setActiveItem(item);
    };
  
    return (
    
        <div className="navigation">
          <nav className="navbar">
            <div className="logo">
              <h1>Foodle</h1>
            </div>
            <ul className="nav-links">
              <li
                className={activeItem === "Home" ? "active" : ""}
                onClick={() => handleItemClick("Home")}
              >
                <Link to="/">Home</Link>
              </li>

              <li
                className={activeItem === "Offer" ? "active" : ""}
                onClick={() => handleItemClick("Offer")}
              >
                <Link to="/Offer">Offer</Link>
              </li>

              <li
                className={activeItem === "Service" ? "active" : ""}
                onClick={() => handleItemClick("Service")}
              >
                <Link to="/servicce">Service</Link>
              </li>
              <li
                className={activeItem === "Menu" ? "active" : ""}
                onClick={() => handleItemClick("Menu")}
              >
                <Link to="/Menu">Menu</Link>
              </li>
              <li
                className={activeItem === "AboutUs" ? "active" : ""}
                onClick={() => handleItemClick("AboutUs")}
              >
                <Link to="/AboutUs">AboutUs</Link>
              </li>
            </ul>
            <div className="user-section">
              <h2>Login</h2>
              <button>Sign Up</button>
            </div>
          </nav>
        </div>
      
    )
};
export default Navigation;