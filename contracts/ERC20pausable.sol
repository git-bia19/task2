// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/ERC20Pausable.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @dev ERC20 token with pausable token transfers, minting and burning.
 *
 * Useful for scenarios such as preventing trades until the end of an evaluation
 * period, or having an emergency switch for freezing all token transfers in the
 * event of a large bug.
 */
 contract ERC20Pausable is ERC20, Pausable {
    
     address owner;
     constructor () ERC20("ERC20Pause","ERC20"){
   
     }

     modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }
     function pause() external virtual  onlyOwner returns (bool) {
        return _pause;
    }

    function unpause() external virtual onlyOwner returns (bool) {
        return _unpause;ssh-add ~/.ssh/id_ed25519
    }


    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, amount);

        require(!paused(), "ERC20Pausable: token transfer while paused");
    }
}