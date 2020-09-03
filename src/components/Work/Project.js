import React from "react";
import "animate.css";
import "./Project.css";
const Project = (props) => {
  const img = require(`../../img/${props.img}`);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h2>{props.heading}</h2>
          <p>{props.des}</p>
          {props.link ? (
            <div>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
              <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          ) : (
            <h4 className="message">
              Still under develompent, you will see this project online soon
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
