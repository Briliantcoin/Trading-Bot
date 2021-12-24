const Trader = artifacts.require("Trader");
const { uniswap: addresses } = require("../addresses/index");
const { WETH } = require("@uniswap/sdk");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Trader, addresses.factory, WETH[1].address);
};
