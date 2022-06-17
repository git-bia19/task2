const { expect } = require("chai");
const { ethers } = require("hardhat");

function toWei(value) { return ethers.utils.parseUnits(value, 18) }

describe("Token Unit tests for ERC20 capped", () => {
  let token;
  let owner, user, accounts;


  beforeEach(async () => {
    [owner, user, ...accounts] = await ethers.getSigners();
    const args = [toWei("10000")];
    const Token = await ethers.getContractFactory("ERC20Capped");
    token = await Token.deploy(...args);
    token.deployed();
  });

  describe("#constructor", async () => { 
    it("has a name", async () => {
      const name = await token.name();
      expect(name).to.equal("ERC20Capped");
    });

    it("has a symbol", async () => {
      const symbol = await token.symbol();
      expect(symbol).to.equal("ERC20");
    });

  });
  describe("#cap  ", () => {
    it("cap tokens", async () => {
      await token.connect(user).cap();
      const totalSupply = await token.totalSupply();
      console.log(totalSupply);
      expect(totalSupply).to.equal(toWei("0"));
      });

    });

});

