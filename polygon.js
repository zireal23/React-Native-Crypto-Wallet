const { ethers } = require('ethers');

async function importPolygonWallet(privateKey) {
  try {
    // Connect to the Mumbai Testnet
    const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.matic.today');

    // Create a wallet from the private key
    const wallet = new ethers.Wallet(privateKey, provider);

    // Get the address of the wallet
    const address = await wallet.getAddress();
    
    console.log('Successfully imported Polygon wallet.');
    console.log('Address:', address);
    console.log('Private Key:', privateKey);
  } catch (error) {
    console.error('Failed to import Polygon wallet:', error.message);
  }
}

// Usage:
const privateKey = '0x832635be00cc2b762edd56b73389dccf23369d96c135dda58ba48d358b9e9b39'; // Replace with your private key
importPolygonWallet(privateKey);