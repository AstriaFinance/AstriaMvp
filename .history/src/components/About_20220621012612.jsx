import  {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const [name, setName]=useState("")
    let navigate=useNavigate()
    setName("ddd")
  return (
    <div>About
        <button onClick={()=>{navigate("/shop")}}>shop</button>
        <p>{name}</p>
    </div>
  )
}

export default About