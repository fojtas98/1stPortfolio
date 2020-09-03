import React from "react";

import img from "../../img/img.jpg";
import facebook from "../../img/facebook.svg";
import instagram from "../../img/instagram.svg";
import github from "../../img/github.svg";
import twitter from "../../img/twitter.png";
import linkedin from "../../img/linkedin.svg";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contactCard">
        <img src={img} alt="img" />

        <div className="info">
          <h5>Name: Jan Fojtik</h5>
          <h5>
            Phone:
            <a href="tel:+420778781821"> +420 778 781 821</a>
          </h5>
          <h5>
            Email:
            <a href="mailto:fojtik.jan98@gmail.com"> fojtik.jan98@gmail.com</a>
          </h5>
          <h5>Living: Prague, Czechia</h5>
          <div className="socialMedia">
            <h5>Social media:</h5>
            <div>
              <a
                href="https://www.facebook.com/fojitkjan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "FFF" }}
              >
                <img src={facebook} alt="facebookIcon" />
              </a>
              <a
                href="https://www.instagram.com/honzafojtik/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="instagramIcon" />
              </a>
              <a
                href="https://github.com/fojtas98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="gitHubIcon" />
              </a>
              <a
                href="https://twitter.com/Jan_Fojtik_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="twiter" />
              </a>
              <a
                href="https://www.linkedin.com/in/jan-fojtik-7843341b5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
