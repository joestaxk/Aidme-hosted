import React from "react";
import "./Home.scss";
import EverydayAssitance from "../../assets/everydayassitance.png";
import PersonalTaskForce from "../../assets/personaltaskforce.png";
import signup from "../../assets/signup.png";
import errander from "../../assets/errander.png";
import whiteline from "../../assets/whiteline.svg";
import Button from "./../../components/Button/Button";

import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      id: "1",
      name: "Grocery shopping and delivery",
    },
    {
      id: "2",
      name: "Dry cleaning and laundry pickup",
    },
    {
      id: "3",
      name: "Delivery",
    },
    {
      id: "4",
      name: "Prescription pickup and delivery",
    },
    {
      id: "5",
      name: "Pet food and supply delivery",
    },
    {
      id: "6",
      name: "Mail and package pickup",
    },
    {
      id: "7",
      name: "House cleaning and organization",
    },
    {
      id: "8",
      name: "Meal preparation and delivery",
    },
    {
      id: "9",
      name: "Personal shopping and styling",
    },
    {
      id: "10",
      name: "Home maintenance and repair",
    },
    {
      id: "11",
      name: "Event planning and coordination",
    },
    {
      id: "12",
      name: "Personal assistant tasks",
    },
    {
      id: "13",
      name: "Personal errand service",
    },
    {
      id: "14",
      name: "Mail and package pickup",
    },
    {
      id: "15",
      name: "Post office run",
    },
    {
      id: "16",
      name: "Waiting in line for tickets",
    },
    {
      id: "17",
      name: "Post office run",
    },
    {
      id: "18",
      name: "Personal shopping for gifts",
    },
  ];
  return (
    <div className="home">
      <section className="home_section-1">
        <div className="modal">
          <article>
            Need a helping hand with your to-do list? Look no further than our
            errand services - where we take care of the little things,
            <span>so you can focus on the big things.</span>
          </article>

          <form>
            <input type="text" placeholder="I need help with..."></input>
            <Button
              input="Tick off your List"
              color="#fff"
              backgroundColor="#f3292a"
              width="auto"
            ></Button>
          </form>
        </div>
      </section>
      <section className="home_section-2">
        <article>
          <h1>Effortless everyday assitances</h1>
      <p className="up">  We take care of the little tasks that can often become overwhelming,
          allowing you to focus on the bigger things in life. From grocery
          shopping and dry cleaning, to mail pickup and package delivery, we
          offer a wide range of services to make your daily routine effortless
          and stress-free. With our help, you'll have more time and energy to
          devote to the things that matter most to you.</p>  
        </article>

        <img src={EverydayAssitance} className="everydayAssitance" />

        <img src={PersonalTaskForce} className="personaltaskforce" />

        <article>
          <h1>Your personal task force - on demand and at your service</h1>
        <p className="up">  Get it done right, with our vetted Erranders ,Trusted help tailored to
          you</p>
          <ul>
            <li>Customizable support, always available</li>
            <li> Expert help, whenever you need it </li>
            <li>Your go-to team for all tasks</li>
            <li>Effortless assistance, with our vetted and</li>
            <li>background-checked Erranders.</li>
            <li>Your personal task squad, ready for action</li>
            <li> One-stop-shop for all your needs</li>
            <li>Compare Errander reviews, ratings, and prices</li>
            <li>Choose and connect with the best person for the job</li>
          </ul>
        </article>
  
      </section>
      <section className="home_section-3">
        <h1>Ready to get started?</h1>
        <div className="content">
          <div className="signup_modal">
            <img src={signup} />
            <article>
              Achieve more with ease - hear the sweet sound of accomplished
              tasks
            </article>
            <Link to="/Signup"> 
              <Button
                input="Sign Up"
                color="#fff"
                backgroundColor="#f3292a"
                width="12rem"
              />
            </Link>
          </div>

          <img className="whiteline" src={whiteline} />

          <div className="errander_modal">
            <img src={errander} />
            <article>
              Thrive while being a savior to stressed-out neighbors
            </article>
            <Link to="/errander-signup">
              <Button
                input="Become an Errander"
                className="btn"
                color="#fff"
                backgroundColor="#f3292a"
                width="auto"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="home_section-4">
        <h1>Get Help Today</h1>

        <div className="services">
          {services.map((service) => (
            <Button
              input={service.name}
              key={service.id}
              width="auto"
              backgroundColor="#fff"
              color="#f3292a"
              border="solid 1px #f3292a"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
