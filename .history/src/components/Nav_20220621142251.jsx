import React from 'react'
import logo from "../static/astria.jpg"
const Nav = () => {
  return (
    
        <nav>
        <img src={logo} alt="" className='h-20' />
        <h1>logo</h1>
        <ul>
            <li>about</li>
            <li>shop</li>
        </ul>
  
    </nav>
  )
}

export default Nav