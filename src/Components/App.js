import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import General_Info from "./General_Info";
import Education from "./Education";
import Work from "./Work";
import Display from "./Display";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
    <Header/>
    <div className="parent">
      <div className="main_container">
        <General_Info />
        <Education />
        <Work />
      </div>

      <div className="display-container">
        <Display />
      </div>
    </div>
    </>
  );
};

root.render(<App />);
