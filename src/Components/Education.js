import React from "react";
import { useState } from "react";

const Education = ({handleCourse}) => {
  const [university, setUniversity] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const submitData = () => {
    const educationData = {
      course: handleCourse,
      university: university, // Access the 'university' state here
      startYear: startYear,
      endYear: endYear,
    };
    handleEducationData(educationData);
  };

  return (
    <div className="infoContainer">
        <h2>Education</h2>
      <input type="text" className="generalInfo" placeholder="Course" onChange={handleCourse} />
      <input type="text" className="generalInfo" placeholder="University/School" onChange={(e) => setUniversity(e.target.value)} />
      <input type="text" className="generalInfo" placeholder="Start Year" onChange={(e) => setStartYear(e.target.value)} />
      <input type="text" className="generalInfo" placeholder="End Year" onChange={(e) => setEndYear(e.target.value)}  />

      <button className="btn" onClick={submitData}>Add</button>
    </div>
  );
};

export default Education;
