import React, { useRef } from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import {
  BsInstaram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";
const imageen = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          consequatur dolorem obcaecati iusto debitis suscipit possimus
          similique blanditiis inventore? Ex!
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {images.map((image, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              ></div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
