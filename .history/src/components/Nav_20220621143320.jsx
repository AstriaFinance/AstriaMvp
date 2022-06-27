import React from 'react'
import logo from "../static/astria.jpg"
const Nav = () => {
  return (
    <div className='flex items-center justify-between'>
        <nav className='bg-black'>
        <img src={logo} alt="" className='h-32 mt-3' />
       
        <ul className='text-white flex'>
            <li>about</li>
            <li>shop</li>
        </ul>
        
    </nav>
    </div>
  )
}

export default Nav