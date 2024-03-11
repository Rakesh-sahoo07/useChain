import { useState} from 'react';
import { ethers } from 'ethers';

const useChain = (contractAddress, contractABI) => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("");

  const login = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const userAccount = accounts[0];
        setAccount(userAccount);
        setState({ provider, signer, contract });
      } else {
        throw new Error("Please install MetaMask");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { state, account, login };
};

export default useChain;