import React from 'react'
import logo from "../static/astria.jpg"
const Nav = () => {
  return (
    
        <nav className='bg-black flex'>
        <img src={logo} alt="" className='h-32 mt-3' />
       
        <ul className='text-white flex'>
            <li>about</li>
            <li>shop</li>
        </ul>
        
    </nav>
 
  )
}

export default Nav