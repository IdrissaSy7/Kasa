import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Logements from "../logements.json";

const Home = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);

  return (
    <div>
      <Navigation />
      <Slideshow />
      <div className="housing">
        <h1>{logement.title}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
