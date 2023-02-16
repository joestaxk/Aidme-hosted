import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";

import "./Navbar.scss";
import Button from './../Button/Button';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo_icon" />
        Aid me
      </div>

      <ul className="navbar_links">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/Services" className="links">
          Services
        </Link>
        <Link to="/Signup" className="links">
          SignUp/Login
        </Link>
        <Link to="/errander-signup">
          <Button
            input="Become an Errander"
            className="button"
            color="#f3292a"
            backgroundColor="#fff"
            width="auto"
            border=" solid 1px #f3292a"
          />
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
