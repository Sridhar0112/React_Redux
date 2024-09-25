//import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h1>Grony</h1>
      <ul>
         <Link to="/">Home</Link>
         <Link to="/users/info">Users</Link>
         <Link to="/about">about</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/Login">Login</Link>   
      </ul>
    </nav>
  )
}

export default Navbar
