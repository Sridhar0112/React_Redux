//import React from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
  var navigate = useNavigate();
  function clicked() {
    navigate("/users/inf");
  }
  return (
    <div>
      <button onClick={clicked}>Click</button>
    </div>
  );
}

export default Login;
