require("dotenv").config();
const { ethers } = require("ethers");

const getStorageAt = async (provider, contractAddr) => {
  const message = await provider.getStorageAt(contractAddr, '0x0');
  return Number(message);
}

async function main() {
  const swissProvider = ethers.getDefaultProvider("https://json-rpc.testnet.swisstronik.com/");
  const mumbaiProvider = ethers.getDefaultProvider("https://polygon-mumbai-bor.publicnode.com");

  console.log("Value store in smart contract: ", 2);
  
  console.log("\nCalling getStorageAt on mumbai...");
    const mumbaiResponse = await getStorageAt(mumbaiProvider, "0xf8772993DB265e751e8BDbBDbDD13406603b1c5e");
    console.log("Decoded result: ", mumbaiResponse)
    
    console.log("\nCalling getStorageAt on swisstronik...");
  try {
    const swissResponse = await getStorageAt(swissProvider, "0x4999a9aCB86547a26A93E29572c019DFFbCCd98b");
    console.log("Decoded result: ", swissResponse);
  } catch (error) {
    console.error("Oops! error. Private varibales cannot be accessed on swisstronik");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});