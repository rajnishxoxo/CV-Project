import React from "react";

const Work = () => {
  return(
    <div className="infoContainer">
    <h2>Work Experience</h2>
    <form>
      
        <input type="text" className="generalInfo" placeholder="Position"/>
        <input type="text" className="generalInfo" placeholder="Company" />
        <input type="text" className="generalInfo" placeholder="Start Date" />
        <input type="text" className="generalInfo" placeholder="End Date" />
        
        <input type="text" className="generalInfo" placeholder="Main Responsibilities Of Your Job" />
        <button className="btn">Add</button>
      </form>
    </div>
  )
};

export default Work;
