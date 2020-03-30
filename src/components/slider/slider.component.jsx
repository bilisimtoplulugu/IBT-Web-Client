import React from "react";
import { Slide } from "react-slideshow-image";

import "./slider.styles.css";

import slide1 from "../../toplulukbackground.jpg";

const slideImages = [
  {
    image: slide1,
    title: "Başlık 1",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing..."
  },
  {
    image: slide1,
    title: "Başlık 2",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing..."
  },
  {
    image: slide1,
    title: "Başlık 3",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing..."
  }
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

export const Slider = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map(slide => (
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="content">
                <span>{slide.title}</span>
                <span>
                  {slide.subtitle}
                  <br />
                  <b>Devamı</b>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
