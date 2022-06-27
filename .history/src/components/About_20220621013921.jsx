import  {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
    const [name, setName]=useState("")
    const[count, setCount]= useState(0)
    const [username, setUserName]=useState("")
    let navigate=useNavigate()
    
  return (
    <div>About
        <div>{name}</div>
        <div>{count}</div>
        <input type="text" onChange={()=>{setUserName(username)}}/>
        <p>{username}</p>
        <button onClick={()=>{navigate("/shop")}}>shop</button>
        <button onClick={()=>{setName("ng")}}>change value</button>
        <button onClick={()=>{setCount(count+1)}}>count</button>
    </div>
  )
}

export default About