
export const General_Info = ({ handleChangeFirstName , handleLastNameChange , handleAddress , handlePhone,handleEmail}) => {
  // const[firstName,SetFirstName]=useState("");

  // const handleChangeFirstName =(e)=>{
  //   SetFirstName(e.target.value);
  // }

 
  return (
    <div className="infoContainer">
      <form>
      
        <input type="text" className="generalInfo" placeholder="FirstName"  onChange={handleChangeFirstName}/>
        <input type="text" className="generalInfo" placeholder="LastName" onChange={handleLastNameChange}/>

        <input type="text" className="generalInfo" placeholder="Address" onChange={handleAddress} />
        <input type="number" className="generalInfo" placeholder="Phone" onChange={handlePhone} />
        <input type="email" className="generalInfo" placeholder="Email" onChange={handleEmail} />
        
      </form>
    </div>
  );
};
