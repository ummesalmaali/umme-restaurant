import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss the lastest Updates!</p>
    </div>
    <div className="app__newsletter-input flex-center">
      <input type="email" placeholder="Enter your Email address" />
      <button className="custom__button">Subscribe Now</button>
    </div>
  </div>
);

export default Newsletter;
