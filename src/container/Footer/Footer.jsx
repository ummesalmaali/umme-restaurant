import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";

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
      <div className="app__footer-links_logo"></div>
      <div className="app__footer-links_work"></div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans"> 2022 Umme Salma Ali. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
