import React from 'react'
import logo from "../static/astria.jpg"
const Nav = () => {
  return (
    
        <nav className='bg-black'>
        <img src={logo} alt="" className='h-32 mt-3' />
        <div class>
        <ul>
            <li>about</li>
            <li>shop</li>
        </ul>
        </div>
    </nav>
  )
}

export default Nav