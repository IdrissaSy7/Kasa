import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Logements from "../logements.json";

const Home = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);
  {
    /* Crée un id pour chaque element du tableau tags */
  }
  const tag = logement.tags.map((tag, index) => ({
    id: `tag-${index}`,
    tag: tag,
  }));
  console.log(logement.host.name);

  return (
    <div>
      <Navigation />
      <Slideshow />
      <div className="housing">
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        <div className="tags">
          {tag.map((tag) => (
            <p id={tag.id} key={tag.id}>
              {tag.tag}
            </p>
          ))}
        </div>
        <div className="host">
          <p>{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt="Image de profil de l'hébergeur"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
