import Head from 'next/head';
import abi from '../abi/Escrow.json';
import address from '../abi/address.json';
const ethers = require('ethers');

import React, { useState, useEffect, Fragment } from 'react';
import TransferList from '../components/TransferList';
function HomePage(props) {
  const [outSourcedJobs, setOutSourced] = useState([]);

  const connect = async() =>{
    const contractAddress = address.address
    console.log(contractAddress)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner(0)
    console.log(signer)
    const contract = new ethers.Contract(contractAddress, abi.abi, signer)
    const outSourced = await contract.currentContract(true);
    
    setOutSourced(outSourced)
  }

  useEffect(() => {
    
    connect();
    
  }, []);

    return (
      <Fragment>
        <div>
          <TransferList outSourced = {outSourcedJobs}/>
        </div>
        
      </Fragment>
    );
  }
  export default HomePage