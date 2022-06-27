import React from 'react'
import logo from "../static/astria.jpg"
const Nav = () => {
  return (
    
        <nav className='bg-black'>
        <img src={logo} alt="" className='h-72' />
        <h1>logo</h1>
        <ul>
            <li>about</li>
            <li>shop</li>
        </ul>
  
    </nav>
  )
}

export default Nav