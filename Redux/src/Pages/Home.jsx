//import React from 'react'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../Slices/UserSlice";

//import Navbar from "../Components/Navbar";

const Home = () => {
  const [Forminput,SetForminput]=useState({
       Name:"",
       Age:"",
       Email:"",
       Contact:""
  })
const dispatch=useDispatch()
 const HandleClick=(event)=>{
        const {name,value}= event.target;
        console.log(name,value)
        SetForminput((Forminput)=>
        {
          return{
            ...Forminput,[name]:value
          }
        }       
        )
 } 

 const clicked=(event)=>{
       event.preventDefault()
       dispatch(setUsers(Forminput))
       //console.log("Dispatched user:", Forminput);
 }
  return (
    <div>
     
     <form>
        <label>Name</label>   
        <br></br>
        <input name="Name" type="text" value={Forminput.Name} onChange={HandleClick}></input>
        <br/>
        <label>Age</label>
        <br></br>
        <input name="Age" type="number" value={Forminput.Age} onChange={HandleClick}></input>
        <br/>
        <label>Email</label>
        <br></br>
        <input  name ="Email" type="email" value={Forminput.Email} onChange={HandleClick}></input>
        <br/>
        <label>Contact</label>
        <br></br>
        <input name="Contact" type="number" value={Forminput.Contact} onChange={HandleClick}></input>< br/>
        <button type="submit" onClick={clicked}>Add</button>

            </form>
    </div>
  );
};

export default Home;
