import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

const useChain = (contractAbi, contractBytecode, network) => {
  const [ethersObject, setEthersObject] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const init = async () => {
      // Detect the MetaMask provider
      const detectedProvider = await detectEthereumProvider();

      // Set up the ethers.js provider
      let ethersProvider;
      if (detectedProvider) {
        ethersProvider = new ethers.providers.Web3Provider(detectedProvider);
      } else {
        // If MetaMask not detected, use Hardhat provider for local development
        ethersProvider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
      }

      // Use specified network if provided
      if (network) {
        ethersProvider = new ethers.providers.JsonRpcProvider(network);
      }

      // Set the provider and ethers object in state
      setProvider(ethersProvider);
      setEthersObject(new ethers.ContractFactory(contractAbi, contractBytecode, ethersProvider.getSigner()));
    };

    init();
  }, []);

  const connectWallet = async () => {
    try {
      await provider.request({ method: 'eth_requestAccounts' });
      alert('Wallet connected successfully!');
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const deployContract = async (param1, param2, ...) => {
    try {
      const contract = await ethersObject.deploy(param1, param2, ...);
      alert('Smart contract deployed successfully:', contract.address);
    } catch (error) {
      console.error('Error deploying smart contract:', error);
    }
  };

  return {
    connectWallet,
    deployContract,
  };
};

export default useChain;
