import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    let navigate=useNavigate()
  return (
    <div>About
        <button onClick={()=>{navigate("/shop")}}>shop</button>
    </div>
  )
}

export default About