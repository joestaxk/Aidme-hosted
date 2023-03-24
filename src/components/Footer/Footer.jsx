import React from "react";
import "./Footer.scss";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/Instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <Link to="/" className="link">
            Discover
          </Link>
          <Link to="/errander-signup" className="link">
            Become an Errander
          </Link>
          <Link to="/" className="link">
            All Services
          </Link>
          <Link to="/help" className="link">
            Help
          </Link>
        </ul>

        <ul>
          <Link to="/" className="link">
            Company
          </Link>
          <Link to="/" className="link">
            About
          </Link>
          <Link to="/" className="link">
            Terms & Services
          </Link>
          <Link to="/" className="link">
            FAQ
          </Link>
        </ul>
      </div>

      <div className="socials_container">
        <h1>Aid Me</h1>
        <div className="socials">
          Copyright © Aidme {new Date().getFullYear()}. All rights reserved.
          <div className="icons">
            <img src={twitter} />
            <img src={linkedin} />
            <img src={facebook} />
            <img src={instagram} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
