//import React from 'react'

import { useParams } from "react-router-dom"

function User() {
    const{UserName}=useParams()
    
  return (
    <div>
      <h2>Hello users</h2>
      <h1>User:{UserName}</h1>
    </div>
  )
}

export default User
