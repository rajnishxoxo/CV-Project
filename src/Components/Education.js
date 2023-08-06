import React from "react";

const Education = ({handleCourse}) => {
  return (
    <div className="infoContainer">
        <h2>Education</h2>
      <input type="text" className="generalInfo" placeholder="Course" onChange={handleCourse} />
      <input type="text" className="generalInfo" placeholder="University/School" />
      <input type="text" className="generalInfo" placeholder="Start Year" />
      <input type="text" className="generalInfo" placeholder="End Year" />

      
    </div>
  );
};

export default Education;
