import  {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const [name, setName]=useState("")
    let navigate=useNavigate()
    
  return (
    <div>About
        <div id="name">{name}</div>
        <button onClick={()=>{navigate("/shop")}}>shop</button>
        <button onClick={()=>{setName("lll")}}>change value</button>
    </div>
  )
}

export default About