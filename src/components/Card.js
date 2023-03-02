import React from "react";
import Logements from "../logements.json";

const Card = () => {
  return (
    <div className="cardContainer">
      {Logements.map((logement) => (
        <a>
          <div key={logement.id} className="card">
            <h2>{logement.title}</h2>
            <img src={logement.cover} alt={logement.title} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Card;
