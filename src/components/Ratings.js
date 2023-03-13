import React from "react";
import { useParams } from "react-router-dom";
import Logements from "../logements.json";
import Star from "../assets/img/star.png";
import GreyStar from "../assets/img/greystar.png";

const Ratings = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);

  return (
    <div className="ratings">
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src={index < logement.rating ? Star : GreyStar}
          alt="Etoiles"
        />
      ))}
    </div>
  );
};

export default Ratings;
