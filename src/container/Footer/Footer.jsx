import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Chandgaon Residential Area, Chandgaon, Block-B, Road No: 14,
          Chittagong
        </p>
        <p className="p__opensans">+880 1784124267</p>
        <p className="p__opensans">+880 1780181577</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer-logo" />
        <p className="p__opensans">"The best way to find your meal"</p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday- Friday:</p>
        <p className="p__opensans"> 11:00 AM - 10:00 PM</p>
        <p className="p__opensans">Saturday - Sunday: 11:00 AM to 10:00 PM</p>
        <p className="p__opensans"> 11:00 AM to 10:00 PM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans"> 2022 Umme Salma Ali. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
