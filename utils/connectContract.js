import abiJSON from "../utils/Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x0D4Fa8A491F6B4a8D8d3494026e7544c0e508096";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;
  
        if (ethereum) {
          //checking for eth object in the window, see if they have wallet connected to Mumbai network
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          console.log("contractABI", contractABI);
          rsvpContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); // instantiating new connection to the contract
        } else {
          throw new Error('Please connect to the Polygon Mumbai network.')
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return rsvpContract;
  }
  
  export default connectContract;
  