import React from "react";

const General_Info = () => {
  return (
    <div className="infoContainer">
      <form>
      
        <input type="text" className="generalInfo" placeholder="FirstName"/>
        <input type="text" className="generalInfo" placeholder="LastName" />
        <input type="text" className="generalInfo" placeholder="Title" />
        <input type="text" className="generalInfo" placeholder="Address" />
        <input type="number" className="generalInfo" placeholder="Phone" />
        <input type="email" className="generalInfo" placeholder="Email" />
        
      </form>
    </div>
  );
};


export default General_Info