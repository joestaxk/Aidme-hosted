import React from "react";
import "./Signup.scss";
import Rocket from "../../assets/rocket.svg";
import Button from "../../components/Button/Button";

function Signup() {
  return (
    <div className="signup">
      <div className="login_section">
        <img src={Rocket} alt="rocket_img" />
        <h1>Welcome</h1>
        <p>You are 28 seconds from exploring the wonderful experience</p>
        <Button
          input="Login"
          color="#eb2024"
          backgroundColor="#fff"
          width="60%"
          className="btn"
        >
          Login
        </Button>
      </div>
      <div className="signup_form">
        <h1>Aid me</h1>
        <form>
          <div className="form">
            <input type="text" placeholder="First Name *"></input>
            <input type="email" placeholder="Your Email *"></input>
            <input type="text" placeholder="Last Name *"></input>
            <input type="text" placeholder="Your Phone *"></input>
            <input type="password" placeholder="Password *"></input>
            <input type="text" placeholder="Address *"></input>
            <input type="password" placeholder="Confrim Password* "></input>
            <input type="text" placeholder="Country*"></input>
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
