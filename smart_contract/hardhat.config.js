require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/kr_mS4copgyFVdgEts_NJal7FxnR9LtF',
      accounts: ['7b397b12262c4f0523e89a7bb51e6395329ad288474e93c756780b135b3c67a7'],
    },
  },
};