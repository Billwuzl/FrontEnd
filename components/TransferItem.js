import { useRouter} from 'next/router';
import {useEffect, useState } from 'react'
import Card from './Card';
import classes from './TransferItem.module.css';
import address from '../abi/address.json';
import abi from '../abi/Escrow.json';

const ethers = require('ethers');

function TransferItem(props) {
  const router = useRouter();

  const [user, setUser] = useState()

  useEffect(() => {
    const fetchData = async () => {
      
      const provider = new ethers.providers.Web3Provider(window.ethereum)

      const signer = provider.getSigner(0)
      setUser(await signer.getAddress())
    }
    fetchData()

    
  })
 
  async function accept(){
    const contractAddress = address.address
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = provider.getSigner(0)

    const contract = new ethers.Contract(contractAddress, abi.abi, signer)
    await contract.acceptOffer(0, {value: ethers.utils.parseEther('0.001')});
  }
  async function approve(){
    const contractAddress = address.address
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = provider.getSigner(0)

    const contract = new ethers.Contract(contractAddress, abi.abi, signer)
    await contract.approve(props.description.ID);
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  const signer = provider.getSigner(0)
  if(props.description.status == 2){
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h3>{props.description.employer}</h3>
          </div>
          <div className={classes.content}>
            <h3>{props.description.employee}</h3>
          </div>
          <div className={classes.content}>
            <h3>0.01</h3>
          </div>
          <div className={classes.content}>
            <h3>Completed</h3>
          </div>
        </Card>
      </li>
    )
  }
  else if(props.description.status == 1){
    if(props.description.employer == user){
      return (
        <li className={classes.item}>
          <Card>
            <div className={classes.content}>
              <h3>{props.description.employer}</h3>
            </div>
            <div className={classes.content}>
              <h3>{props.description.employee}</h3>
            </div>
            <div className={classes.content}>
              <h3>0.01</h3>
            </div>
            <div className={classes.content}>
              <h3>In Progress</h3>
            </div>
            <div className={classes.actions}>
              <button onClick={approve}>Approve</button>
            </div>
          </Card>
        </li>
      )
    }
    else{
      return (
        <li className={classes.item}>
          <Card>
            <div className={classes.content}>
              <h3>{props.description.employer}</h3>
            </div>
            <div className={classes.content}>
              <h3>{props.description.employee}</h3>
            </div>
            <div className={classes.content}>
              <h3>0.01</h3>
            </div>
            <div className={classes.content}>
              <h3>In Progress</h3>
            </div>
          </Card>
        </li>
      )
    }
  }
  else{
    console.log(user)
    if(props.description.employer == user){
      return (
        <li className={classes.item}>
          <Card>
            <div className={classes.content}>
              <h3>{props.description.employer}</h3>
            </div>
            <div className={classes.content}>
              <h3>{props.description.employee}</h3>
            </div>
            <div className={classes.content}>
              <h3>0.01</h3>
            </div>
            <div className={classes.content}>
              <h3>Waiting for Reply</h3>
            </div>
          </Card>
        </li>
      )
    }
    else{
      return (
        <li className={classes.item}>
          <Card>
            <div className={classes.content}>
              <h3>{props.description.employer}</h3>
            </div>
            <div className={classes.content}>
              <h3>{props.description.employee}</h3>
            </div>
            <div className={classes.content}>
              <h3>0.01</h3>
            </div>
            <div className={classes.content}>
              <h3>Offered</h3>
            </div>
            <div className={classes.actions}>
              <button onClick={accept}>Accept</button>
            </div>
          </Card>
        </li>
      )
    }
  }
}

export default TransferItem;
