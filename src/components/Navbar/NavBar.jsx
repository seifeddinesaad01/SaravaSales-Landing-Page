import React from "react";
import Logo from "../../assets/Logo.png";
import {Link} from "react-router-dom"
const NavBar = () => {
  const links = ["Home", "About", "Blog", "Text"];
  return (
    <div className="navbar__container">
      <img src={Logo} alt="LOGO" />
      <ul className="links__container">
        {links?.map((link, index) => {
          return <li className="nav__link"> <Link to={link}>{link}</Link> </li>
        })}
      </ul>
    </div>
  );
};

export default NavBar;
