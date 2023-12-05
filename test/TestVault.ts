import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Vault } from "../typechain-types/contracts/Vault";
import { MintableERC20 } from "../typechain-types/contracts/mocks/MintableERC20";
import { parseEther } from "ethers";

describe("Vault", function () {
  let vault: Vault;
  let token: MintableERC20;
  let owner: SignerWithAddress;
  let user: SignerWithAddress;

  this.beforeAll(async function () {
    [owner, user] = await ethers.getSigners();

    const Vault = await ethers.getContractFactory("Vault");
    vault = await Vault.deploy();

    const Token = await ethers.getContractFactory("MintableERC20");
    token = await Token.deploy("MockERC20", "MockERC20", parseEther("10000"));
  });

  it("should allow only admin to whitelist tokens", async function () {
    expect(await vault.whitelistedTokens(token.getAddress())).to.be.false;
    await expect(vault.connect(user).addToWhiteList(token.getAddress())).to.be
      .reverted;

    await vault.connect(owner).addToWhiteList(token.getAddress());
    expect(await vault.whitelistedTokens(token.getAddress())).to.be.true;
  });

  it("should allow deposit and withdrawal", async function () {
    await token.transfer(user.address, 1000);
    await token.connect(user).approve(vault.getAddress(), 1000);
    await vault.connect(user).deposit(token.getAddress(), 1000);

    const userBalanceBefore = await vault
      .connect(user)
      .getDepositBalance(token.getAddress(), user.address);
    expect(userBalanceBefore).to.equal(1000);

    await vault.connect(user).withdraw(token.getAddress(), 250);

    const userBalanceAfter = await vault
      .connect(user)
      .getDepositBalance(token.getAddress(), user.address);
    expect(userBalanceAfter).to.equal(750);
  });

  it("should allow only admin to pause and unpause", async function () {
    expect(await vault.paused()).to.be.false;

    await expect(vault.connect(user).pause()).to.be.reverted;

    await vault.connect(owner).pause();
    expect(await vault.paused()).to.be.true;

    await expect(vault.connect(user).deposit(token.getAddress(), 500)).to.be
      .reverted;

    await expect(vault.connect(user).unpause()).to.be.reverted;

    await vault.connect(owner).unpause();
    expect(await vault.paused()).to.be.false;
  });
});
