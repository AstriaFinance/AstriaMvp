import React, { useEffect, useState } from 'react'
import astriaPorta_abi from "../contracts/astriaPorta_abi.json"
import tausd_abi from "../contracts/tausd_abi"
import { ethers } from 'ethers'
import bigInt from 'big-integer'
const Home = () => {
    const contractAddress="0x4eCeF62f1974173106d7296306073eD286Df6904"
    const tausdContractAddress="0xCf0289459570e65702C9231E6050f88313551F59"
    const[conButtonText, setConButtonText]=useState("connect wallet")
    const [errorMessage, setErrorMessage]=useState(null)
    const[defaultAccount, setDefaultAccount]= useState(null)
    const[provider, setProvider]=useState(null)
    const [signer, setSigner]=useState(null)
    const [contract, setContract]=useState(null)
    const [transferHash, setTransferHah]=useState(null)
    const [depositHash, setDepositHash]=useState(null)
    const [tausdContract, setTausdContract]=useState(null)
    const [borrowHash, setBorrowHash]=useState(null)

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
      updateEthers()
    }

    const updateEthers=()=>{
      let tempProvider= new ethers.providers.Web3Provider(window.ethereum)
      let tempSigner=tempProvider.getSigner()
      let tempContract= new ethers.Contract(contractAddress, astriaPorta_abi, tempSigner)
      let tausdContract=new ethers.Contract(tausdContractAddress, tausd_abi, tempSigner)
      setProvider(tempProvider)
      setSigner(tempSigner)
      setContract(tempContract)
      setTausdContract(tausdContract)

    }

    const mintHandler=async (e)=>{
      e.preventDefault()
      let mintAmount=e.target.mintAmount.value

      let txn=await contract.Mint(mintAmount)
      setTransferHah(txn)

    }

    const approveHandler=async(e)=>{
      e.preventDefault()
    

    }

    const depositHandler=async (e)=>{
      e.preventDefault()
      let depositAmount=e.target.depositAmount.value
    
      let depositTxn=await contract.deposit(depositAmount)
      setDepositHash(depositTxn)
    }

    const borrowHandler= async(e)=>{
      e.preventDefault()
      let borrowAmount= e.target.borrowAmount.value
      let borrowtxn=await contract.borrow(borrowAmount)
      setBorrowHash(borrowtxn)
    }

    useEffect(()=>{
      if(contract!=null){

      }
    },[])
  return (
    <div>
    <p>{errorMessage}</p>
<div className="bg-black flex overflow-x-auto h-screen ">
<button className='bg-red-500' onClick={connectWalletHandler}>{conButtonText}</button> 

 <div className="bg-white h-72 w-64 rounded my-32 mx-7">
  
  <div className="container flex justify-center text-3xl">MINT</div>
  <div className="flex justify-between">
    <form onSubmit={mintHandler}>
    <input id="mintAmount" type="number" placeholder='Mint Test Colleteral' className='my-20 ml-7 hover:bg-red-500' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Mint</button></form>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>Connected Wallet</li>
     <li>{defaultAccount}</li>
   </ul>
 </div>
 
 <div className="bg-white h-72 w-64 rounded mx-5 my-32">

  <div class="container flex justify-center text-3xl">Deposit Asset</div>
  <div className="flex justify-between">
    <form onSubmit={depositHandler}>
    <input id="depositAmount" type="text" placeholder='Deposit test tokens' className='my-20 ml-1 hover:bg-red-500' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Deposit</button></form>
  </div>
   <ul className="mx-5 my-3 flex gap-6">
     <li>Connected Wallet{transferHash}</li>
     <li>{defaultAccount}</li>
   </ul>
 </div>
 <div className="bg-white h-72 w-64 rounded mx-5 my-32">
 
  <div className="container flex justify-center text-3xl">Borrow</div>
  <div className="flex justify-between">
    <form onSubmit={borrowHandler}>
  <input id="borrowAmount" type="text" placeholder='Deposit test tokens' className='my-20 ml-2 rounded hover:bg-red-500' />
    <button className="bg-blue-500 rounded mx-5 w-20  ">Borrow</button></form>
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