import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="error">
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">
          <li>Retourner sur la page d’accueil</li>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
