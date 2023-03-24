import React from "react";
import "./Signup.scss";
import Rocket from "../../assets/Rocket.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="signup">
        <div className="login_section">
          <img src={Rocket} alt="rocket_img" />
          <h1>Welcome</h1>
          <p>You are 28 seconds from exploring the wonderful experience</p>

          <Link to="/signup" className="log">
            <button className="register">Register</button>
          </Link>
        </div>
        <div className="signup_form">
          <h1>Aid me</h1>

          <div className="login">
            <input type="text" name="" id="" placeholder="Your Name* " />
            <input type="password" name="" id="" placeholder="Your Password*" />
          </div>

          <div className="login-div">
            <Button
              input="Login"
              color="#fff"
              backgroundColor="#eb2024"
              width="17rem"
              borderRadius="2.1rem"
              className="register_btn login-btn"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
