const { expect } = require("chai");
const { ethers } = require("hardhat");

function toWei(value) { return ethers.utils.parseUnits(value, 18) }

describe("Token Unit tests for ERC20 Burnable", () => {
  let token;
  let owner, user, accounts;


  beforeEach(async () => {
    [owner, user, ...accounts] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("ERC20Burnable");
    token = await Token.deploy();
    token.deployed();
  });

  describe("#constructor", async () => { 
    it("has a name", async () => {
      const name = await token.name();
      expect(name).to.equal("ERC20Burnable");
    });

    it("has a symbol", async () => {
      const symbol = await token.symbol();
      expect(symbol).to.equal("ERC20");
    });

  });
  describe("#burn ", () => {
    it("burn 1000 tokens from the caller", async () => {
      
        await token.connect(user).mint(toWei("10000"))
        console.log(await token.balanceOf(user.address))
        await token.connect(user).burn(toWei("1000"));
        const totalSupply = await token.totalSupply();
        console.log(totalSupply);
        expect(totalSupply).to.equal(toWei("9000"));
      });

    });

});


  