import React from "react";

const Education = () => {
  return (
    <div className="infoContainer">
        <h2>Education</h2>
      <input type="text" className="generalInfo" placeholder="Course" />
      <input type="text" className="generalInfo" placeholder="University/School" />
      <input type="text" className="generalInfo" placeholder="Start Year" />
      <input type="text" className="generalInfo" placeholder="End Year" />

      <button className="btn">Add</button>
    </div>
  );
};

export default Education;
