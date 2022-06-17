const { expect } = require("chai");
const { ethers } = require("hardhat");

function toWei(value) { return ethers.utils.parseUnits(value, 18) }

describe("Token Unit tests for ERC20 Pausable", () => {
  let token;
  let owner, user, accounts;


  beforeEach(async () => {
    [owner, user, ...accounts] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("ERC20Pausable");
    token = await Token.deploy();
    token.deployed();
  });

  describe("#constructor", async () => { 
    it("has a name", async () => {
      const name = await token.name();
      expect(name).to.equal("ERC20Pause");
    });

    it("has a symbol", async () => {
      const symbol = await token.symbol();
      expect(symbol).to.equal("ERC20");
    });

  });
  describe("#pause ", () => {
    it("pause contract", async () => {
      
        const pause = await token.connect(user).paused()
        expect(pause).to.equal(false);
        console.log(pause)
      });

    });

});


  