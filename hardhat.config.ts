import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
  },
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
  },
};

export default config;
