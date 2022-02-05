import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";

import "./Laurels.css";
const AwardCard = ({ award: { imgUrl, subTitle, title } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img"></div>
  </div>
);

export default Laurels;
