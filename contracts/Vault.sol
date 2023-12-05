// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract Vault is Ownable, Pausable {
    mapping(address => bool) public whitelistedTokens;
    mapping(address => uint256) private depositBalances;

    event Deposit(address indexed user, address indexed token, uint256 amount);
    event Withdrawal(address indexed user, address indexed token, uint256 amount);

    modifier onlyAdmin() {
        require(owner() == _msgSender(), "Vault: caller is not the owner");
        _;
    }

    modifier onlyWhitelistedToken(address _token) {
        require(whitelistedTokens[_token], "Vault: token is not whitelisted");
        _;
    }

    constructor() Ownable(msg.sender) {
    }

    function deposit(address _token, uint256 _amount) external whenNotPaused {

        require(_amount > 0, "Vault: deposit amount must be greater than zero");

        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        depositBalances[msg.sender] += _amount;

        emit Deposit(msg.sender, _token, _amount);
    }

    function withdraw(address _token, uint256 _amount) external onlyWhitelistedToken(_token) whenNotPaused {

        require(_amount > 0, "Vault: withdrawal amount must be greater than zero");

        IERC20(_token).transfer(msg.sender, _amount);
        depositBalances[msg.sender] -= _amount;

        emit Withdrawal(msg.sender, _token, _amount);
    }

    function getDepositBalance(address account) external view returns (uint256) {
        return depositBalances[account];
    }

    function pause() external onlyAdmin {
        _pause();
    }

    function unpause() external onlyAdmin {
        _unpause();
    }

    function whitelistToken(address _token) external onlyAdmin {
        require(_token != address(0), "Vault: token address cannot be zero");
        whitelistedTokens[_token] = true;
    }

    function removeTokenFromWhitelist(address _token) external onlyAdmin {
        whitelistedTokens[_token] = false;
    }
}