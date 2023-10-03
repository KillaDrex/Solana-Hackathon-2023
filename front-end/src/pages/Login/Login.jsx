import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Connection, PublicKey, clusterApiUrl  } from '@solana/web3.js';
import { Program, AnchorProvider, web3, } from '@project-serum/anchor';
import * as Web3 from '@solana/web3.js';


const rpcUrl = 'https://api.testnet.solana.com';

const opts = {
  preflightCommitment:"processed",
}

const network = clusterApiUrl("testnet") // for testnet

const getProvider = () => {
  const connection = new Connection(network, opts.preflightCommitment);
  const provider = new AnchorProvider(
    connection,
    window.solana,
    opts.preflightCommitment
  );
  return provider;
};




const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [solAdd, setsolAdd] = useState("");

  const connectWallet = async () => {
    if (!window.solana) {
      alert("Solana wallet not found. Please install Sollet or Phantom extension.");
      return;
    }
  
    try {
      await window.solana.connect();
      const provider = getProvider();
      const walletAddress = provider.wallet.publicKey.toString();
      console.log("Wallet Address:" ,walletAddress)
      setsolAdd(walletAddress);
    } catch (err) {
      console.error("Error connecting wallet:", err);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        credentials
      );
      const { token } = response.data;

      localStorage.setItem("token", token);

      navigate("/Home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
  
    <>

<form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>

    </form>


    <form onSubmit={connectWallet}>
   
      <button type="submit">Connect Wallet</button>
      <p>WalletAddress: {solAdd}</p>
    </form>
    </>
  );
};

export default Login;
