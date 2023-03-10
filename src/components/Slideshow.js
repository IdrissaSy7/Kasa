import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Logements from "../logements.json";
import Left from "../assets/img/left.png";
import Right from "../assets/img/right.png";

const Slideshow = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);

  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % logement.pictures.length);
  };
  const prevSlide = () => {
    setSlideIndex(
      slideIndex === 0 ? logement.pictures.length - 1 : slideIndex - 1
    );
  };

  return (
    <div className="sliderComponent">
      <div className="LeftArrow" onClick={prevSlide}>
        {logement.pictures.length > 1 ? (
          <img src={Left} alt="Fleche gauche" />
        ) : null}
      </div>
      <div className="RightArrow" onClick={nextSlide}>
        {logement.pictures.length > 1 ? (
          <img src={Right} alt="Fleche droite" />
        ) : null}
      </div>
      <div className="slider">
        <img src={logement.pictures[slideIndex]} alt={logement.title} />
      </div>
      <div className="dots">
        {logement.pictures.length > 1
          ? `${slideIndex + 1}/${logement.pictures.length}`
          : null}
      </div>
    </div>
  );
};

export default Slideshow;
