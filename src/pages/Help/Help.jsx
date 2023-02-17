import React from "react";
import Button from "./../../components/Button/Button";
import "./Help.scss";

function Help() {
  return (
    <div className="help">
      <section className="help_section-1">
        <div className="modal">
          <h1>How can we help today</h1>
          <input placeholder="Search for help articles"></input>
        </div>
      </section>

      <section className="help_section-2">
        <div className="btns">
          <Button
            backgroundColor="#eb2024"
            borderRadius="0"
            input="Clients"
            width="24rem"
          />
          <Button
            backgroundColor="#fff"
            borderRadius="0"
            input="Erranders"
            width="24rem"
          />
        </div>
        <div className="tasks">
          <div className="task">
            <h1>Aidme</h1>
            <p>A beginner guide to using our service</p>
          </div>
          <div className="task">
            <h1>Hire a Errander</h1>
            <p>Information on how to get a Errander for your job</p>
          </div>
          <div className="task">
            <h1>Task Management</h1>
            <p>For on-going tasks, updating or canceling taskse</p>
          </div>
          <div className="task">
            <h1>Payment</h1>
            <p>Understanding your bill</p>
          </div>
          <div className="task">
            <h1>Account</h1>
            <p>How to get into and update your policies</p>
          </div>
          <div className="task">
            <h1>Policies</h1>
            <p>For our commitments to top quality services</p>
          </div>
        </div>
      </section>

      <section className="help_section-3">
        <h1>Frequently asked questions:</h1>

        <div className="questions">
          <ul>
            <li>
              New to Errander? Click Here for Some Links To Help You Book Your
              Task?
            </li>
            <li>Are Erranders Licensed?</li>
            <li>Can Taskrabbit Help with Professional Services?</li>
            <li>How Do I Pay My Errander?</li>
            <li>What's the Cancellation Policy?</li>
            <li>How Do I Reimburse My Tasker For Expenses?</li>
          </ul>
          <ul>
            <li>Why Can't I Find a Errander?</li>
            <li>How Far in Advance Can I Book My Task?</li>
            <li>How Do I Tip My Errander?</li>
            <li>When Will I get my 1099-K?</li>
          </ul>
        </div>

        <div className="contact_btn">
          <Button
            input="Contact Us"
            color="#eb2024"
            border="#eb2024 solid 1px"
            width="22rem"
            borderRadius="10px"
          />
        </div>
      </section>
    </div>
  );
}

export default Help;
