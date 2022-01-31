import React, { useState } from "react";

import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div></div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      {/* for smaller screen */}
      <div className="app__navbar-smallscreen">
        <i
          class="fas fa-bars"
          onClick={() => {
            setToggleMenu(true);
          }}
        ></i>

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <i
              className="fas fa-utensils overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            ></i>
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="about">About</a>
              </li>
              <li className="p__opensans">
                <a href="menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
