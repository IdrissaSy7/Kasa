import React from "react";
import Logements from "../logements.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="cardContainer">
      {Logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <div className="card">
            <h2>{logement.title}</h2>
            <img src={logement.cover} alt={logement.title} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
