import React from "react";

import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <h1>About me</h1>

      <div className="aboutMeText">
        <h2>
          My name is<span className="getBlue"> Jan Fojtik</span>
        </h2>
        <p>
          I'm junior<span className="getBlue"> full stack</span> developer based
          in Prague
        </p>
        <p>
          <span className="heading">Language:</span> Czech, English
        </p>
        <p>
          <span className="heading">Sklill set:</span> JS,{" "}
          <span className="getBlue"> React.js, Node.js, </span>
          GraphQL, HTML, CSS
        </p>
        <p>
          <span className="heading">Hobbies:</span>{" "}
          <span className="getBlue">Coding</span>, Sport(🏉,⚽), coffee ☕ and{" "}
          <span className="getBlue">sleeping 💤 </span>
        </p>
        <p>
          Current job: Senior TS support specialist at{" "}
          <a
            href="https://www.ing.cz/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FF6200" }}
          >
            ING Bank
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
