//import Navbar from "../Components/Navbar";

import { useSelector } from "react-redux";

//import React from 'react'
 const About = () => {
  const fruits =useSelector((state)=>
        state.Fruitss.Fruits
  )
  console.log(fruits)
  return (
    <div>
      


    </div>
  )
}

export default About ;