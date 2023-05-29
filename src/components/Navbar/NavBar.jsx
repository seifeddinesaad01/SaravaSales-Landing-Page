import React from "react";
import Logo from "../../assets/Logo.png";
const NavBar = () => {
  const links = ["Home", "About Us", "Blog", "Text"];
  return (
    <div className="navbar__container">
      <img src={Logo} alt="LOGO" />
      <ul className="links__container">
        {links?.map((link, index) => {
          return <li className="nav__link">{link}</li>
        })}
      </ul>
    </div>
  );
};

export default NavBar;
