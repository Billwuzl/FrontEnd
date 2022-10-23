import address from '../../abi/address.json';
import abi from '../../abi/Escrow.json';
const ethers = require('ethers');

export default function Profile() {

  async function giveOffer(){
    const contractAddress = address.address
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = provider.getSigner(0)

    const contract = new ethers.Contract(contractAddress, abi.abi, signer)
    await contract.extendOffer(signer.getAddress(), '0xd9f22B5558519D5c6A910deD0A7956C447C88040', ethers.utils.parseEther(`0.01`), ethers.utils.parseEther(`0.001`), ethers.utils.parseEther(`0.001`), {value: ethers.utils.parseEther(`0.011`)});
  }
  
  return (
    <div>
       <h1>Lens Based CV</h1>
      <button onClick={giveOffer}>Give Offer</button>
    </div>
   
  )
}
