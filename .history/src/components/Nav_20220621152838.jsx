import React from 'react'
import logo from "../static/astria.jpg"
const Nav = () => {
  return (
    
    
<nav class="fixed top-0 w-full  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  ">
<div class="container mx-auto py-5 flex items-center justify-between" >
  <div class="flex gap-2">
  <img src={logo} alt="" className='h-40' />
  </div>
 <ul class="flex space-x-10">
   <li>home</li>
    <li>about</li>
     <li>contact</li>
 </ul>
  <span>y</span>
  <span>y</span>
</div>

</nav>
 
  )
}

export default Nav