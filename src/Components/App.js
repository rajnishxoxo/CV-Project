import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { General_Info } from "./General_Info";
import Education from "./Education";
import Work from "./Work";
import Display from "./Display";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [firstName, setFirstName] = useState("");

  const ChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const [lastName, setLastName] = useState("");

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const [address, setAddress] = useState("");

  const changeAddress = (e) => {
    setAddress(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // For Education. 

  

  const [course , setCourse ] = useState('');

  const handleCourse = (e)=>{

    setCourse(e.target.value);
  }

 



  return (
    <>
      <Header />
      <div className="parent">
        <div className="main_container">
          <General_Info
            handleChangeFirstName={ChangeFirstName}
            handleLastNameChange={changeLastName}
            handleAddress={changeAddress}
            handlePhone={handlePhone}
            handleEmail={handleEmail}
          />
          <Education  handleCourse={handleCourse} />
          <Work />
        </div>

        <div className="display-container">
          <Display
            first={firstName}
            last={lastName}
            address={address}
            phone={phoneNumber}
            email={email}
            course={course}
          />
        </div>
      </div>
    </>
  );
};

root.render(<App />);
