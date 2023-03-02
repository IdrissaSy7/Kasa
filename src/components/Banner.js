import React from "react";
import { useLocation } from "react-router-dom";
import image1 from '../assets/img/banner1.png';
import image2 from '../assets/img/banner2.png';

const Banner = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <div className="banner" id="banner1">
        <img src={image1} alt="Massif rocheux" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    );
  } else {
    return (
      <div className="banner" id="banner2">
        <img src={image2} alt="Montagnes" />
      </div>
    );
  }
};

export default Banner;
