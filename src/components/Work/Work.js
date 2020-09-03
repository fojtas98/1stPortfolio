import React, { useState, useEffect } from "react";
import "animate.css";

import Project from "./Project";
import projects from "./projects.json";
import gif from "../../img/loading.gif";

import "./Work.css";

const Work = () => {
  const [search, setSearch] = useState("showall");
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [clicked, setClicked] = useState({
    reactjs: "default",
    graphQl: "default",
    express: "default",
    nodejs: "default",
    frontend: "default",
    showall: "active",
    backend: "default",
    mongoDB: "default",
    css: "default",
  });

  useEffect(() => {
    setCount(0);
    setList(
      projects.projects.map((item, index) => {
        if (
          item.tag.indexOf(search.toLowerCase()) >= 0 ||
          search === "showall"
        ) {
          setCount((count) => {
            return (count += 1);
          });
          return (
            <Project
              heading={item.heading}
              des={item.des}
              img={item.img}
              hoverImg={item.hoverImg}
              key={index}
              gitHub={item.gitHub}
              link={item.link}
              anime="in 1s"
              txtColor={item.txtColor}
            />
          );
        }
      })
    );
  }, [search]);

  const handleActive = async (e) => {
    const change = e.target.getAttribute("name");
    setSearch(change);
    setClicked({
      reactjs: "default",
      graphQl: "default",
      express: "default",
      nodejs: "default",
      frontend: "default",
      showall: "default",
      backend: "default",
      mongoDB: "default",
      css: "default",
      [change]: "active",
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  function getKeyByValue(object) {
    return Object.keys(object)
      .find((key) => object[key] === "active")
      .toUpperCase();
  }

  return (
    <div className="work" id="work">
      <h1>Web developer portfolio</h1>

      <div className="buttons">
        <span onClick={handleActive} className={clicked.showall} name="showall">
          Show all
        </span>
        <span onClick={handleActive} className={clicked.reactjs} name="reactjs">
          ReactJS
        </span>
        <span onClick={handleActive} className={clicked.graphQl} name="graphQl">
          GraphQL
        </span>
        <span onClick={handleActive} className={clicked.express} name="express">
          Express
        </span>
        <span
          onClick={handleActive}
          className={clicked.frontend}
          name="frontend"
        >
          Front-End
        </span>
        <span onClick={handleActive} className={clicked.nodejs} name="nodejs">
          NodeJS
        </span>
        <span onClick={handleActive} className={clicked.backend} name="backend">
          Back-End
        </span>
        <span onClick={handleActive} className={clicked.mongoDB} name="mongoDB">
          MongoDB
        </span>
        <span onClick={handleActive} className={clicked.css} name="css">
          CSS
        </span>
      </div>

      {clicked.showall === "active" ? (
        <p className="filter">
          Showing all projects. Use the filter to list them by skill or
          technology.
        </p>
      ) : (
        <p className="filter">
          Showing <span style={{ fontWeight: "bold" }}>{count}</span> projects
          filterd by{" "}
          <span style={{ fontWeight: "bold" }}>{getKeyByValue(clicked)}</span>
        </p>
      )}

      {/* edit css in Project.css */}
      {loading ? (
        <div className="loading">
          <img src={gif} alt="loadingGif" />
        </div>
      ) : (
        <div className="allProjects">{list}</div>
      )}
    </div>
  );
};

export default Work;
