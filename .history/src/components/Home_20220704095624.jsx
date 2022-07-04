import React, { useEffect, useState } from "react";
import astriaPorta_abi from "../contracts/astriaPorta_abi.json";
import testEth_abi from "../contracts/testEth_abi";
import xap_abi from "../contracts/xap_abi.json";
import logo from "../static/astria2.jpg";
import { ethers } from "ethers";

const Home = () => {
  const contractAddress = "0x1b3781eA482113695622EF6C31Fb38c4e02C95A0";
  const testEthContractAddress = "0x8c5696f345827C2d5A7a2e48F815A428eCC87437";
  const xapContractAddress = "0x5272c7F5eA6E5F9bb88f20B9f47Bd0f29e5921EC";
  const [conButtonText, setConButtonText] = useState("connect wallet");
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [transferHash, setTransferHah] = useState(null);
  const [depositHash, setDepositHash] = useState(null);
  const [testEthContract, setTestEthContract] = useState(null);
  const [borrowHash, setBorrowHash] = useState(null);
  const [sendHash, setSendHash] = useState(null);
  const [xapContract, setxapContract] = useState(null);
  const [TausdBalance, setTausdBalance] = useState(null);
  const [TestBalance, setTestBalance] = useState(null);

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConButtonText("Wallet connected");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Install Metamask");
      setErrorMessage("Please Install Metamask");
    }
    TausdbalanceHandler();
    testColleteralHandler();
  };

  const accountChangedHandler = (newAddress) => {
    setDefaultAccount(newAddress);
    updateEthers();
  };

  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
    let tempContract = new ethers.Contract(
      contractAddress,
      astriaPorta_abi,
      tempSigner
    );
    let testEthContract = new ethers.Contract(
      testEthContractAddress,
      testEth_abi,
      tempSigner
    );
    let xapContract = new ethers.Contract(
      xapContractAddress,
      xap_abi,
      tempSigner
    );
    setProvider(tempProvider);
    setSigner(tempSigner);
    setContract(tempContract);
    setTestEthContract(testEthContract);
    setxapContract(xapContract);
  };

  const mintHandler = async (e) => {
    e.preventDefault();
    let mintAmount = e.target.mintAmount.value;

    let txn = await contract.Mint(mintAmount);
    setTransferHah(txn);
  };

  const depositHandler = async (e) => {
    e.preventDefault();
    let depositAmount = e.target.depositAmount.value;

    let depositTxn = await contract.deposit(depositAmount);
    setDepositHash(depositTxn);
  };

  const borrowHandler = async (e) => {
    e.preventDefault();
    let borrowAmount = e.target.borrowAmount.value;
    let borrowtxn = await contract.borrow(borrowAmount);
    setBorrowHash(borrowtxn);
  };

  const sendTokenHandler = async (e) => {
    e.preventDefault();
    let messageFee = ethers.utils.parseEther("0.025");
    let tempSigner = signer.getAddress();
    let dstChainId = 10002;
    let to = tempSigner;
    let qty = e.target.qty.value;
    let zeroPaymentAddress = tempSigner;
    let adapterParam = "0x";
    let sendTokenTransaction = await xapContract.sendTokens(
      dstChainId,
      to,
      qty,
      zeroPaymentAddress,
      adapterParam,
      { value: ethers.utils.parseEther("0.01") }
    );
    setSendHash(sendTokenTransaction);
  };

  const approveTestEth = async (e) => {
    e.preventDefault();
    await testEthContract.approve(contractAddress, "9007199254740990");
  };

  const TausdbalanceHandler = async () => {
    let balanceTausdToken = await xapContract.balanceOf(defaultAccount);
    let balanceTausdNum = balanceTausdToken.toNumber();
    let decimals = await xapContract.decimals();
    let tokenBalance = balanceTausdNum / Math.pow(10, decimals);
    setTausdBalance(toFixed(tokenBalance));
  };

  const testColleteralHandler = async () => {
    let balanceTestToken = await testEthContract.balanceOf(defaultAccount);
    let balanceTestTokenNum = balanceTestToken.toNumber();
    let decimals = await testEthContract.decimals();
    let tokenBalance = balanceTestTokenNum / Math.pow(10, decimals);

    setTestBalance(toFixed(tokenBalance));
  };

  function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split("e-")[1]);
      if (e) {
        x *= Math.pow(10, e - 1);
        x = "0." + new Array(e).join("0") + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split("+")[1]);
      if (e > 20) {
        e -= 20;
        x /= Math.pow(10, e);
        x += new Array(e + 1).join("0");
      }
    }
    return x;
  }
  useEffect(() => {
    if (contract != null) {
    }
  }, []);
  return (
    <div className="bg-gray-900 h-screen">
      <div className="flex justify-between">
        <img src={logo} alt="" className="h-20 mt-5 mx-10 rounded-full" />

        <button
          onClick={connectWalletHandler}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-64 h-10 mt-3 mr-2"
        >
          {conButtonText}
        </button>
      </div>
      <div className="bg-gray-600 rounded-xl h-1/2 mx-3 p-3">
        <h2 className="text-white font-bold ">Choose Chain</h2>
        <div className="flex ">
          <div className="bg-gray-300 rounded-md w-24">ETH</div>
          <div className="bg-gray-300 rounded-xl">BSC</div>
          <div className="bg-gray-300 rounded-xl">FTM</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
