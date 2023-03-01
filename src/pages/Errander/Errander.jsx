import React from "react";
import "./errand.css";
import Woman from "../../assets/woman.png";
import Vector from "../../assets/Vector 8.png";
import Ellipse from "../../assets/Ellipse 2.png";
import King from "../../assets/king 1.png";
import Money from "../../assets/money-bag 1.png";
import Promotion from "../../assets/promotion 1.png";
import Man from "../../assets/Rectangle 36.png";
import One from "../../assets/One.png";
import Two from "../../assets/Two.png";
import Three from "../../assets/Three.png";
import Four from "../../assets/Four.png";
import Five from "../../assets/Five.png";
import Six from "../../assets/Six.png";
import { MdCancel } from "react-icons/md";

const Errander = ({
  open,
  close,
  openModal,
  first,
  firstOpen,
  firstClose,
  sec,
  secOpen,
  secClose,
  third,
  thirdOpen,
  thirdClose,
  four,
  fourOpen,
  fourClose,
  five,
  fiveOpen,
  fiveClose,
  six,
  sixClose,
  sixOpen,
  last,
  lastOpen,
  lastClose,
}) => {
  return (
    <div>
      <hr />
      <div className="xl-x">
        <div>
          <img src={Woman} alt="" className="woman-img" />
        </div>
        <div>
          <h2 className="earn">Earn money your way</h2>
          <p className="discover">
            Discover the possibilities and <br /> find out how much you can{" "}
            <br /> make by working on your <br /> own schedule.
          </p>
          <h5>Select your Country</h5>
          <select value="">
            <option name="" id="">
              Nigeria
            </option>
            <option name="" id="">
              Ghana
            </option>
            <option name="" id="">
              South Africa
            </option>
            <option name="" id="">
              Egypt
            </option>
          </select>
          <h5>Select your Area</h5>
          <select value="">
            <option name="" id="">
              Lagos
            </option>
            <option name="" id="">
              Ogun
            </option>
            <option name="" id="">
              Abuja
            </option>
            <option name="" id="">
              Oyo
            </option>
          </select>
          <h5>Select your Category</h5>
          <select value="">
            <option name="" id="">
              Cleaning
            </option>
            <option name="" id="">
              Holiday
            </option>
            <option name="" id="">
              Assistant
            </option>
            <option name="" id="">
              Furniture
            </option>
            <option name="" id="">
              Shopping
            </option>
          </select>
          <h6>
            $25per {/*POP Up Modal  */}
            <small
              style={{ fontSize: "10px", color: "black" }}
              onClick={openModal}
            >
              / hour?
            </small>
          </h6>
          <button className="get">Get Started</button>
          <h6
            style={{
              fontSize: "12px",
              color: "black",
              marginLeft: "10px",
              letterSpacing: "1px",
            }}
          >
            Already have an account?{" "}
            <small style={{ color: "red", fontSize: "11px" }}>Sign in</small>
          </h6>
        </div>
      </div>
      <div>
        {/* Modal for  estimated price */}
        {open ? (
          <div className="modals">
            <button onClick={close} className="hr-btn">
              <MdCancel />
            </button>
            <h4>
              Estimate earnings are based on average rate in locations similar
              to yours. Actual earnings may vary with your rates, category type,
              location, demand and other factors.
            </h4>
          </div>
        ) : null}
        <section>
          <article>
            <img src={Vector} alt="" />
            <img src={Ellipse} alt="" />
            <img src={Vector} alt="" />
          </article>
          <h2 style={{ color: "red", fontFamily: "Segoe UI", padding: "20px" }}>
            On-demand work
          </h2>
          <p
            style={{
              fontSize: "12px",
              padding: "10px",
              fontFamily: "Segoe UI",
            }}
          >
            Discover flexible job opportunities that align with your abilities
            and <br /> availability with Aid me. Take control of your career and
            enjoy the <br /> autonomy and support to work independently as a
            Errander.
          </p>
        </section>
        <div className="x-modal">
          <section>
            <img src={King} alt="" />
            <h2>Be your own boss</h2>
            <p>
              Be your own boss, set your own schedule and work on your own
              terms. Offer a wide range of services and have the freedom to
              choose when and where you work.
            </p>
          </section>
          <section>
            <img src={Money} alt="" />
            <h2>Set your own prices</h2>
            <p>
              Earn money on your own terms with our platform! You keep 100% of
              what you charge for your services, plus any tips. We only charge a
              small 2% fee on your earnings. Get paid directly and securely
              through our invoice and payment system.
            </p>
          </section>
          <section>
            <img src={Promotion} alt="" />
            <h2>Expand your venture</h2>
            <p>
              We link you with local customers and provide promotional
              strategies, allowing you to concentrate on your core competencies.
            </p>
          </section>
        </div>

        <section className="man-div">
          <div>
            <img src={Man} alt="" />
          </div>
          <div>
            <h2>What is Aid me ?</h2>
            <p>
              Aidme is a hypothetical errand platform that offers a convenient{" "}
              <br />
              and affordable way for people to get things done by connecting{" "}
              <br />
              them with reliable erranders who provide a wide range of services{" "}
              <br />
              including pick-up/drop-off, personal shopping, grocery shopping{" "}
              <br />
              and more. The goal of Aidme is to help its customers get things{" "}
              <br />
              done by providing an easy-to-use platform, and a wide range of{" "}
              <br />
              errand services.
            </p>
          </div>
        </section>

        <article>
          <img src={Vector} alt="" />
          <img src={Ellipse} alt="" />
          <img src={Vector} alt="" />
        </article>
        <h2
          style={{
            color: "red",
            fontFamily: "Segoe UI",
            paddingTop: "20px",
            paddingBottom: "50px",
          }}
        >
          Getting Started
        </h2>

        <div className="x-modal">
          <section className="xx">
            <img src={One} alt="" />
            <h2>1. Sign up</h2>
            <p>Create your account.</p>
          </section>
          <section className="xx">
            <img src={Two} alt="" />
            <h2>2. Build your profile</h2>
            <p>Select what services you want to offer and where.</p>
          </section>
          <section className="xx">
            <img src={Three} alt="" />
            <h2>3. Verify your eligibility to task</h2>
            <p>
              Confirm your identity and submit business verification, as
              required.
            </p>
          </section>
          <section className="xx">
            <img src={Four} alt="" />
            <h2>4. Registration </h2>
            <p>Registration is free for all user</p>
          </section>
          <section className="xx">
            <img src={Five} alt="" />
            <h2>5. Set your schedule and work area</h2>
            <p>Select what services you want to offer and where.</p>
          </section>
          <section className="xx">
            <img src={Six} alt="" />
            <h2>6. Start getting jobs</h2>
            <p>Grow your business on your own terms.</p>
          </section>
        </div>

        <article>
          <img src={Vector} alt="" />
          <img src={Ellipse} alt="" />
          <img src={Vector} alt="" />
        </article>
        <h2
          style={{
            color: "red",
            fontFamily: "Segoe UI",
            paddingTop: "20px",
            paddingBottom: "50px",
          }}
        >
          Your questions, answered
        </h2>
        <div className="last-section">
          <div>
            {first ? (
              <div className="modals-f">
                <button onClick={firstClose} className="hr-btn">
                  <MdCancel />
                </button>
                <h4>
                  To become a Errander, you will need to meet the following
                  requirements:
                </h4>
                <ul>
                  <li>Be at least 18 years old.</li>
                  <li>
                    Be able to work in one of our active cities. You can see a
                    full list of cities here
                  </li>
                  <li>
                    Consent to an ID check. This helps keep our platform safe
                    for all users.
                  </li>
                  <li>
                    Have a checking account with a financial institution. This
                    is how you’ll get paid through the platform.
                  </li>
                  <li>
                    Have a smartphone. You'll be managing your tasks through our
                    Aid me website, which is compatible with iOS or Android.
                    Provide valid U.S. Social Security number.
                  </li>
                  <li>
                    In applicable cities, pay a one time, non-refundable $5
                    registration fee. This helps us provide the best service to
                    our Errander community.
                  </li>
                </ul>
              </div>
            ) : null}
            <h5 onClick={firstOpen}>What’s required to become a Errander ?</h5>
          </div>

          <div>
            {/* Do i need Modal */}
            {sec ? (
              <div className="sec-modal">
                <button onClick={secClose} className="hr-btn">
                  <MdCancel />
                </button>
                <h4>
                  You can decide the categories in which you task and the skills
                  you use. <br />
                  For some categories, you don’t necessarily need previous
                  experience (like Delivery or Errands). <br />
                  For other categories (like Minor Home Repairs, IKEA Assembly),{" "}
                  <br />
                  you should have — or be able and willing to learn — the proper
                  skills <br />
                  and tools to complete the tasks.
                </h4>
              </div>
            ) : null}
            <h5 onClick={secOpen}>Do I need experience to task?</h5>
          </div>
          <div>
            {/* How do i get jobs modals */}
            {third ? (
              <div className="sec-modal">
                <button onClick={thirdClose} className="hr-btn">
                  <MdCancel />
                </button>
                <h4>
                  Once you complete registration steps including creating your
                  Errander profile, <br />
                  make sure you draw your work area map <br />
                  and set schedule availability to show up in Client search
                  results. <br />
                  If you don’t get task invitations, consider adjusting your
                  rates, <br />
                  adding availability and additional categories, and editing
                  your profile information <br />
                  to make sure it’s clear to Clients which services you offer.
                </h4>
              </div>
            ) : null}
            <h5 onClick={thirdOpen}>How do I get jobs?</h5>
          </div>
          <div>
            {four ? (
              <div className="sec-modal">
                <button onClick={fourClose} className="hr-btn">
                  <MdCancel />
                </button>
                <h4>
                  Aidme uses direct deposit to pay Erranders, so a valid
                  checking account, routing or IBAN number, <br />
                  and billing address are required. During registration, you’ll
                  add your bank information <br />
                  and billing address in order to get paid via the app. Savings
                  accounts, prepaid debit cards, <br />
                  and reloadable bank cards ar en’t valid, even if they accept
                  direct deposits. <br />
                  We take protecting your personal information seriously and use
                  the latest encryption <br />
                  technologies available to do so. Your information will never
                  be shared with third parties <br />
                  and is for internal use only.
                </h4>
              </div>
            ) : null}
            <h5 onClick={fourOpen}>How do I get paid?</h5>
          </div>
          <div>
            {five ? (
              <div className="sec-modal">
                <button onClick={fiveClose} className="hr-btn">
                  <MdCancel />
                </button>
                <h4>
                  You can see a full list of cities <strong>here.</strong>{" "}
                </h4>
              </div>
            ) : null}
            <h5 onClick={fiveOpen}>Where does Aidme operate?</h5>
          </div>
          <div>
            {six ? (
              <div className="sec-modal">
                <button onClick={sixClose} className="hr-btn">
                  <MdCancel />
                </button>
                <h4>
                  You can task in 50+ categories and use a variety of skills{" "}
                  <br />
                  on any given day. See the list of categories{" "}
                  <strong> here.</strong> <br />
                  There’s something for everyone on Aidme
                </h4>
              </div>
            ) : null}
            <h5 onClick={sixOpen}>What categories can I task in on Aidme?</h5>
          </div>
          <div>
            {last ? (
              <div className="sec-modal">
                <button onClick={lastClose} className="hr-btn">
                  <MdCancel />
                </button>
                <h4>
                  Processing time may vary by country, but most registrants are
                  able to begin <br />
                  tasking within four business days of finishing registration.{" "}
                  <br />
                  You'll receive a notification once your registration is
                  processed. <br />
                  If we need additional information from you <br />
                  to process your registration, we will reach out.
                </h4>
              </div>
            ) : null}
            <h5 onClick={lastOpen}>
              How long does it take for my registration to be processed?
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errander;
