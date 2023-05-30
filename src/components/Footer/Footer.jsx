import React from "react";
import Logo from "../../assets/Logo.png";
import LinkedinIcon from "../../assets/Vector.png";
import InstagramIcon from "../../assets/Vector1.png";
import FacebookIcon from "../../assets/Vector2.png";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__top">
        <div className="footer__logo">
          <img src={Logo} alt="" />
          <p>
            Rorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            Etiam eu <br /> turpis molestie, dictum <br /> est a, mattis tellus.
          </p>
        </div>
        <div className="footer__section">
          <h2>Lorem</h2>
          <ul style={{listStyle: 'none', marginLeft:'-2rem'}}>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div className="footer__section">
          <h2>Lorem</h2>
          <ul style={{listStyle: 'none', marginLeft:'-2rem'}}>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div className="footer__section">
          <h2>Lorem</h2>
          <ul style={{listStyle: 'none', marginLeft:'-2rem'}}>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div className="footer__section">
          <h2>Lorem</h2>
          <ul style={{listStyle: 'none', marginLeft:'-2rem'}}>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright © 2023 Saravá Sales.All rights reserved.</p>
        <div className="footer__icons">
          <img src={LinkedinIcon} alt="" />
          <img src={InstagramIcon} alt="" />
          <img src={FacebookIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
