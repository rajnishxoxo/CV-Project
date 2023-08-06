import React from "react";
const Display = (props) => {
  console.log(props);
  return (
    <div className="display_MainContainer">
      <div className="upper-section">
        <div className="upper-left">
          {/* for 1st and last name */}
          <p>
            {props.first} {props.last}
          </p>
        </div>
        <div className="upper-right">
          <p>📌{props.address} </p>
          <p>☎️{props.phone}</p>
          <p>💌{props.email} </p>
        </div>
      </div>
      <div className="education-section">
        <div>
          <h2 className="heading">Education</h2>
        </div>
        <div className="education-container">
          <p>{props.course}</p>
          <p>RTMNU || <span>2015-2020</span></p>
        </div>
      </div>
    </div>
  );
};

export default Display;
