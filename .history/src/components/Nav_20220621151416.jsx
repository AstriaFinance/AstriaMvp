import React from 'react'
import logo from "../static/astria.jpg"
const Nav = () => {
  return (
    
        <nav className='bg-black flex'>
        <img src={logo} alt="" className='h-32' />
       
        <ul className='text-white flex items-center justify-between mx-20 text-4xl'>
            <li className='mx-5'>about</li>
            <li>shop</li>
        </ul>
        
    </nav>
 
  )
}

export default Nav