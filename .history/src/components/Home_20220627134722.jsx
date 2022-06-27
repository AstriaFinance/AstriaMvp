import React, { useEffect, useState } from "react";
import astriaPorta_abi from "../contracts/astriaPorta_abi.json";
import testEth_abi from "../contracts/testEth_abi";
import xap_abi from "../contracts/xap_abi.json";
import { ethers } from "ethers";
import { shortenAddress } from "./ShortenAddress";

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
      setErrorMessage("Please install metamask");
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
    <div>
      <div className=" bg-black">
        <div className="rounded bg-white w-1/2 ">
          <div className="mx-2">TestCollteral Balance</div>
          <div className="mx-2">{TestBalance}</div>
        </div>
        <div className="rounded bg-white m2-2">
          <div className="mx-2  ">TAUSD Balance</div>
          <div className="mx-2 break-normal ">{TausdBalance}</div>
        </div>
      </div>
      <p>{errorMessage}</p>
      <div className="bg-black flex overflow-x-auto h-screen ">
        <button className="bg-red-500" onClick={connectWalletHandler}>
          {conButtonText}
        </button>
        <form onSubmit={mintHandler}>
          <div className="bg-white h-72 w-64 rounded my-32 mx-7">
            <div className="container flex justify-center text-3xl">MINT</div>
            <div className="flex justify-between">
              <input
                id="mintAmount"
                type="number"
                placeholder="Mint Test Colleteral"
                className="my-20 ml-7 hover:bg-red-500"
              />
              <button className="bg-blue-500 rounded mx-5 w-20  ">Mint</button>
            </div>
            <ul className="mx-5 my-3 flex gap-6">
              <li>Connected Wallet</li>

              <li></li>
            </ul>
          </div>
        </form>

        <div className="bg-white h-72 w-64 rounded mx-5 my-32">
          <form onSubmit={depositHandler}>
            <div class="container flex justify-center text-3xl">
              Collaterize
            </div>
            <div className="flex justify-between">
              <input
                id="depositAmount"
                type="text"
                placeholder="Deposit test tokens"
                className="my-20 ml-1 hover:bg-red-500"
              />
              <button className="bg-blue-500 rounded mx-0 w-20  ">
                collaterize
              </button>
            </div>
          </form>
          <form onSubmit={approveTestEth}>
            <button className="bg-red-500 rounded mx-5 w-50 ">
              Approve Token Transfer
            </button>
          </form>
        </div>

        <form onSubmit={borrowHandler}>
          <div className="bg-white h-72 w-64 rounded mx-5 my-32">
            <div className="container flex justify-center text-3xl">Borrow</div>
            <div className="flex justify-between">
              <input
                id="borrowAmount"
                type="text"
                placeholder="Deposit test tokens"
                className="my-20 ml-2 rounded hover:bg-red-500"
              />
              <button className="bg-blue-500 rounded mx-5 w-20  ">
                Borrow
              </button>
            </div>
            <ul className="mx-5 my-3 flex gap-6">
              <li>{defaultAccount}</li>
              <li></li>
            </ul>
          </div>
        </form>
        <form onSubmit={sendTokenHandler}>
          <div className="bg-white h-72 w-64 rounded mx-5 my-32">
            <div className="container flex justify-center text-3xl">To BSC</div>
            <div className="flex justify-between">
              <input
                id="qty"
                type="text"
                placeholder="amount"
                className="my-20 ml-2 rounded hover:bg-red-500"
              />
              <button className="bg-blue-500 rounded mx-10 w-20  ">
                To BSC
              </button>
            </div>
            <ul className="mx-5 my-3 flex gap-6">
              <li>Connected Wallet</li>
              <li></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
