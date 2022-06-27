import  {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const [name, setName]=useState("")
    let navigate=useNavigate()
    
  return (
    <div>About
        <div >{name}</div>
        <button onClick={()=>{navigate("/shop")}}>shop</button>
        <button onClick={()=>{setName("ng")}}>change value</button>
    </div>
  )
}

export default About