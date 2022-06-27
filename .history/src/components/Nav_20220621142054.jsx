import React from 'react'
import logo from "../static/astria.jpg"
const Nav = () => {
  return (
    <div>
        <img src={logo} alt="" />
        <h1>logo</h1>
        <ul>
            <li>about</li>
            <li>shop</li>
        </ul>
    </div>
  )
}

export default Nav