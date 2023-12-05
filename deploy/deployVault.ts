import { ethers } from 'hardhat';
import { Vault } from "../typechain-types/contracts/Vault";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const VaultFactory = await ethers.getContractFactory('Vault');
  const vault: Vault = await VaultFactory.deploy();

  console.log(`Vault address: ${vault.getAddress()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });