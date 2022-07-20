import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import WebsiteDevelopment, { Binay } from "./WebsiteDevelopment";
import Designing from "./Designing";
import AppDevelopment from "./AppDevelopment";
import Startup from "./Startup";
import Testimonials from "./Testimonials";
import Contact from "./contact";

export default function App() {
  const [website_development, setwebsite_development] = useState(true);
  const [app_development, setapp_development] = useState(false);
  const [startup, setstartup] = useState(false);
  const [designing, setdesigning] = useState(false);

  function SetAllFalse() {
    setwebsite_development(false);
    setapp_development(false);
    setstartup(false);
    setdesigning(false);
  }
  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">Bits badgers</span>
          <div className="d-flex flex-row">
            <span className="mx-4 nav-items"> Home </span>
            <span className="mx-4 nav-items"> About us </span>
            <span className="mx-4 nav-items"> Resume </span>
            <span className="mx-4 nav-items"> Testimonail </span>
            <span className="mx-4 nav-items"> contact </span>
          </div>
        </nav>
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center im-text-section">
              <span className="first-text">Hello , we are </span>
              <span className="my-text-3 py-2">BitsBadger's</span>
              <span className="im-text-4 py-2 ">
                A SoftWare Company 🧑‍💻 <span className="cliper">🧑‍💻</span>{" "}
              </span>
              <span className="im-text-5" py-4>
                we are for building applications with frontend backend
                operations , application development , and any work releted to
                technology . we are the solution for comming future
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-us">Hire us</button>
                <button className="btn-apply-us">Apply intern</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center anim">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="logo square.jpg"
              ></img>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text">About us</span>
          <span className="why-choose-us">Why Choose us</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_ljotbiif.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column justify-content-center">
              <span className="some-text-about-me">
                Full stack web and mobile developer with background knowledge in
                MERN stack with redux. and mobile application usiing flutter by
                experience developer like mr kiran bishwokarma and mr saurab
                kunwar and designer like mr anjan bhattarai , all our team
                members are experienced
              </span>
              <span className="fer-highlights">
                <span className="few-text"> few highlights </span>
                <span className="few-list">
                  <ul>
                    <li>Full stack web and mobile development </li>
                    <li>Web site designes</li>
                    <li>logo designing </li>
                    <li>content writting </li>
                    <li>artificial technology </li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="our-strength-section d-flex flex-column pb-5">
        <span className="about-me-text">Our strength</span>
        <span className="why-choose-us"> details of our strength </span>

        <div
          className="strength-new-section row mt-5"
          style={{ width: "80%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 strength-left-section d-flex px-0 shadow-lg flex-row">
            {" "}
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i class="fa-solid fa-graduation-cap"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-graduation-cap"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-graduation-cap"></i>{" "}
              </span>
              <span className="icons-span">
                <i class="fa-solid fa-graduation-cap"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className="strength-options-items"
                onClick={() => {
                  ChangeState(setwebsite_development, true);
                }}
              >
                Website development{" "}
              </span>
              <span
                className=" strength-options-items"
                onClick={() => {
                  ChangeState(setapp_development, true);
                }}
              >
                {" "}
                App development{" "}
              </span>
              <span
                className="strength-options-items"
                onClick={() => {
                  ChangeState(setstartup, true);
                }}
              >
                {" "}
                startup support{" "}
              </span>
              <span
                className="strength-options-items"
                onClick={() => {
                  ChangeState(setdesigning, true);
                }}
              >
                {" "}
                Designing{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 text-dark strength-right-section">
            {website_development === true && <WebsiteDevelopment />}
            {app_development === true && <AppDevelopment />}
            {startup === true && <Startup />}
            {designing === true && <Designing />}
          </div>
        </div>
      </div>
      <div className="testimonials-part my-5">
        <div className="testimonials-inner-part d-flex flex-column">
                  <span className="about-me-text"> Testimonials</span>
                  <span className="why-choose-us mb-5"> why our clients say about me {""} </span>
                  <Testimonials />

        </div>
      </div>
      <div className="contact-me-part ">
          <div className="relative-bg">
            <div className="contact-inner-part d-flex flex-column">
              <span className="about-me-text "> 
              Contact me

              </span>
              <span className=" why-choose-us mb-5 ">Lets Keep in touch
              </span>
              <Contact />


            </div>

          </div>

        
      </div>
    </div>
  );
}
