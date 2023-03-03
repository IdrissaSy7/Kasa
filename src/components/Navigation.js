import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="logo du site" />
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
