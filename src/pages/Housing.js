import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Logements from "../logements.json";
import Tags from "../components/Tags";
import Ratings from "../components/Ratings";
import Collapse from "../components/Collapse";

const Home = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);

  const equipements = logement.equipments.map((equipements, index) => ({
    id: `${index}`,
    equipements: equipements,
  }));

  return (
    <div>
      <Navigation />
      <Slideshow />
      <div className="housing">
        <div className="housedetails">
          <div className="housename">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          <div className="host">
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt="Image de profil de l'hébergeur"
            />
          </div>
        </div>
        <div className="housedetails2">
          <Tags />
          <Ratings />
        </div>
        <div className="housedetails3">
          <div className="description">
            <Collapse label="Description">
              <p>{logement.description}</p>
            </Collapse>
          </div>
          <div className="equipments">
            <Collapse label="Equipements">
              {equipements.map((equipements) => (
                <p id={equipements.id} key={equipements.id}>
                  {equipements.equipements}
                </p>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
