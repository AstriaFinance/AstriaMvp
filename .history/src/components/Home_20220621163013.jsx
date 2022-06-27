import React from 'react'

const Home = () => {
  return (
<div className="bg-black flex overflow-x-auto h-screen ">
<button className='bg-red-500'>Connect wallet</button> 
 <div className="bg-white h-72 w-64 rounded my-32 mx-7">
  
  <div className="container flex justify-center text-3xl">MINT</div>
  <div className="flex justify-between">
    <input type="text" placeholder='Mint Test Colleteral' className='my-20 ml-7' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Mint</button>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>Connected Wallet</li>
     <li>0x5d...90ou</li>
   </ul>
 </div>
 
 <div className="bg-white h-72 w-64 rounded mx-5 my-32">

  <div class="container flex justify-center text-3xl">Deposit Asset</div>
  <div className="flex justify-between">
    <input type="text" placeholder='Deposit test tokens' className='my-20 ml-1' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Deposit</button>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>Connected Wallet</li>
     <li>0x5d...90ou</li>
   </ul>
 </div>
 <div className="bg-white h-72 w-64 rounded mx-5 my-32">
 
  <div className="container flex justify-center text-3xl">Borrow</div>
  <div className="flex justify-between">
  <input type="text" placeholder='Deposit test tokens' className='my-20 ml-2' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Borrow</button>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>Connected Wallet</li>
     <li>0x5d...90ou</li>
   </ul>
 </div>
 
 <div className="bg-white h-72 w-64 rounded mx-5 my-32">
 
  <div className="container flex justify-center text-3xl">Borrow To</div>
  <div className="flex justify-between">
  <button className="bg-blue-500 rounded mx-5 w-20 ">connect</button>
   <button className="bg-red-500 rounded mx-5">Disconnect</button>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>hhh</li>
     <li>hhh</li>
   </ul>
 </div>
 
 
 
 </div>
  )
}

export default Home