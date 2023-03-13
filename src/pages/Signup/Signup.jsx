import React from "react";
import "./Signup.scss";
import Rocket from "../../assets/rocket.svg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <div className="login_section">
        <img src={Rocket} alt="rocket_img" />
        <h1>Welcome</h1>
        <p>You are 28 seconds from exploring the wonderful experience</p>

        <Link to='/login' className="log">
          <Button
            input="Login"
            color="#eb2024"
            backgroundColor="#fff"
            width="80%"
            className="btn"
            borderRadius="2.1rem"
          >
            Login
          </Button>
        </Link>
      </div>
      <div className="signup_form">
        <h1>Aid me</h1>
        <form>
          <div className="form">
            <input type="text" placeholder="First Name *"className="input" ></input>
            <input type="email" placeholder="Your Email * " className="input" ></input>
            <input type="text" placeholder="Last Name *" className="input" ></input>
            <input type="text" placeholder="Your Phone *" className="input" ></input>
            <input type="password" placeholder="Password *" className="input" ></input>
            <input type="text" placeholder="Address *"className="input" ></input>
            <input type="password" placeholder="Confrim Password* " className="input" ></input>
            <input type="text" placeholder="Country*" className="input" ></input>
          </div>
          <div className="gender">
            <div className="checkbox" /> Male <div className="checkbox" />
            Female
          </div>
          <p>
            By signing up you agree to our <span>Terms</span> of Use and{" "}
            <span> Privacy Policy.</span>
          </p>

          <div className="btn_container">
            <Button
              input="Register"
              color="#fff"
              backgroundColor="#eb2024"
              width="17rem"
              borderRadius="2.1rem"
              className="register_btn"
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
