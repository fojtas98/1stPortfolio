import React from "react";
import ReactTypingEffect from "react-typing-effect";

import "./Main.css";

const Main = (props) => {
  return (
    <div className="main">
      <div className="text">
        <div>
          <h1>
            Hi<span style={{ color: "#f88d63" }}>!</span>{" "}
          </h1>
        </div>
        <h3>
          <ReactTypingEffect
            text="I'm future Full Stack developer"
            typingDelay="0"
            speed="80"
            eraseDelay="86400000"
          />
        </h3>
        <div className="menu">
          <p>
            <a href="#work"> Let's see my work 💻</a>
          </p>
          <span className="seperator"> &nbsp;||&nbsp; </span>
          <p>
            <a href="#contact">Get in touch with me 📧</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
