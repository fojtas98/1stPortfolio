import React from "react";

import Work from "./components/Work/Work";
import Contacts from "./components/Contacts/Contacts";
// import AboutMe from "./components/AboutMe/AboutMe";
// import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div>
      <div className="fullpage">
        <Main />
        <div className="space"></div>
        <Work />
        <div className="space"></div>
        {/* <AboutMe /> */}
        <Contacts />
      </div>
    </div>
  );
};

export default App;
