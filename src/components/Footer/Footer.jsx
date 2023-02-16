import React from "react";
import "./Footer.scss";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>Discover</li>
          <li>Become a Tasker</li>
          <li>All Services</li>
          <li>Help</li>
        </ul>

        <ul>
          <li>Company</li>
          <li>About</li>
          <li>Terms & Services</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="socials_container">
        <h1>Aid Me</h1>
        <div className="socials">
          Copyright © Aidme 2023. All rights reserved.
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
