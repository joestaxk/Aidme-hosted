import React from "react";
import Logo from "../../../assets/Logo.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo_icon" />
        Aid me
      </div>

      <ul className="header_links">
        <li>Home</li>
        <li>Services</li>
        <li>SignUp/Login</li>
        <button>Become a Errander</button>
      </ul>
    </div>
  );
}

export default Header;
