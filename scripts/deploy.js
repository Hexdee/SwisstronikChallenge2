const { ethers } = require("hardhat");

async function main() {
  const Storage = await ethers.deployContract("Storage", []);
  await Storage.deployed();

  console.log(`Storage Contract was deployed to ${Storage.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});