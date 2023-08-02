import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import General_Info from "./General_Info";
import Education from "./Education";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="main_container">
      <Header />
      <General_Info />
      <Education/>
    </div>
  );
};

root.render(<App />);
