# useChain Hook

The `useChain` hook is a custom React hook designed to simplify the process of connecting to a blockchain network, such as Ethereum, and interacting with smart contracts. It provides easy access to the provider, signer, and contract objects, allowing developers to quickly integrate blockchain functionality into their React applications.

## Installation

To use the `useChain` hook in your React project, follow these simple steps:

1. Install the package via npm:

```javascript
npm i usechain
```

2. Import the hook into your React components:
```javascript
import useChain from 'usechain';

```
## Usage
Here's a basic example demonstrating how to use the useChain hook:
```javascript
import React from 'react';
import useChain from 'usechain';

const contractAddress = "0xa1D4f2Cd672ED6EcE465FE85f33DB9D48aC338ab"; // Example contract address
const contractABI = abi; // Example contract ABI , if you import the abi from the json then you can use like this also , here we just need the abi(const contractABI = abi.abi )

const ExampleComponent = () => {
  const { state, account } = useChain(contractAddress, contractABI);

  const handleConnectWallet = () => {
    console.log("Wallet connected!");
    console.log("Provider:", state.provider);
    console.log("Signer:", state.signer);
    console.log("Contract:", state.contract);
    console.log("Account:", account);
  };

  return (
    <div>
      <button onClick={handleConnectWallet}>Connect Wallet</button>
    </div>
  );
};

export default ExampleComponent;
```
In this example, we import the useChain hook and call it with the contract address and ABI. The hook returns the state object containing the provider, signer, and contract objects, as well as the current user account. We then use this data to connect the wallet and interact with the blockchain.

## Benefits
### Simplified Blockchain Integration: 
With the useChain hook, developers can easily connect their React applications to blockchain networks and interact with smart contracts without the need for complex setup or configuration.

### Time-Saving Development: 
By abstracting away the intricacies of blockchain development, the useChain hook allows developers to focus on building their applications rather than dealing with low-level blockchain interactions.

### Flexibility and Customization: 
The useChain hook provides flexibility to developers by allowing them to customize their blockchain integration according to their specific requirements. Developers can easily access the provider, signer, and contract objects and use them as needed.

## Conclusion
The useChain hook offers a simple and efficient solution for integrating blockchain functionality into React applications. By providing easy access to essential blockchain components, it empowers developers to build decentralized applications with ease. Try it out in your next project and experience the benefits of streamlined blockchain integration!

