import React from "react";

import "./Navbar.css";
import images from "../../constants/images";
import { GiCastle } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app-logo" />
      </div>
      <ul>
        <li className="app__navbar-links">
          <a href=""></a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
