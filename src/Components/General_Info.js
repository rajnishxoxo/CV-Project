import React, { useState } from "react";

export const General_Info = ({ onFirstNameChange }) => {
  const[firstName,SetFirstName]=useState('');

  const handleChangeFirstName =(e)=>{
    SetFirstName(e.target.value);
    onFirstNameChange(firstName);
  }

  return (
    <div className="infoContainer">
      <form>
      
        <input type="text" className="generalInfo" placeholder="FirstName" value={firstName} onChange={handleChangeFirstName}/>
        <input type="text" className="generalInfo" placeholder="LastName" />
        <input type="text" className="generalInfo" placeholder="Title" />
        <input type="text" className="generalInfo" placeholder="Address" />
        <input type="number" className="generalInfo" placeholder="Phone" />
        <input type="email" className="generalInfo" placeholder="Email" />
        
      </form>
    </div>
  );
};
