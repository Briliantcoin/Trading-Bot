const Trader = artifacts.require("Trader");
const { uniswap: addresses } = require("../addresses/index");
const { WETH } = require("@uniswap/sdk");
const DAIAddress = '0xaD6D458402F60fD3Bd25163575031ACDce07538D';

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Trader, addresses.router, DAIAddress);
};
