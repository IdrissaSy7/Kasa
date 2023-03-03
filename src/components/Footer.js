import React from "react";
import logoFooter from "../assets/img/logofooter.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo du site blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
