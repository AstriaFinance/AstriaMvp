import React, { useState } from 'react'
import astriaPorta_abi from "../contracts/astriaPorta_abi.json"
import { ethers } from 'ethers'
const Home = () => {
    const[conButtonText, setConButtonText]=useState("connect wallet")
    const [errorMessage, setErrorMessage]=useState(null)
    const[defaultAccount, setDefaultAccount]= useState(null)
    const connectWalletHandler =()=>{
      if (window.ethereum ){
        window.ethereum.request({method:"eth_requestAccounts"})
        .then(result=>{
          accountChangedHandler(result[0])
          setConButtonText ("Wallet connected")
        })
        .catch(error=>{
          setErrorMessage(error.message) 
        })
      }else{
        console.log("Install Metamask")
        setErrorMessage("Please install metamask")
      }
    }

    const accountChangedHandler=(newAddress)=>{
      setDefaultAccount(newAddress)
    }
  return (
    <div>
    <p>{errorMessage}</p>
<div className="bg-black flex overflow-x-auto h-screen ">
<button className='bg-red-500' onClick={connectWalletHandler}>{conButtonText}</button> 

 <div className="bg-white h-72 w-64 rounded my-32 mx-7">
  
  <div className="container flex justify-center text-3xl">MINT</div>
  <div className="flex justify-between">
    <input type="text" placeholder='Mint Test Colleteral' className='my-20 ml-7 hover:bg-red-500' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Mint</button>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>Connected Wallet</li>
     <li>{defaultAccount}</li>
   </ul>
 </div>
 
 <div className="bg-white h-72 w-64 rounded mx-5 my-32">

  <div class="container flex justify-center text-3xl">Deposit Asset</div>
  <div className="flex justify-between">
    <input type="text" placeholder='Deposit test tokens' className='my-20 ml-1 hover:bg-red-500' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Deposit</button>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>Connected Wallet</li>
     <li>{defaultAccount}</li>
   </ul>
 </div>
 <div className="bg-white h-72 w-64 rounded mx-5 my-32">
 
  <div className="container flex justify-center text-3xl">Borrow</div>
  <div className="flex justify-between">
  <input type="text" placeholder='Deposit test tokens' className='my-20 ml-2 rounded hover:bg-red-500' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Borrow</button>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>Connected Wallet</li>
     <li>{defaultAccount}</li>
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
 </div>
  )
}

export default Home