/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const secret = require('./secret.json')
const mnemonic = secret.mnemonics

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1:',
      port: '7545',
      network_id: '*' //match to any network
    },

    testnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://speedy-nodes-nyc.moralis.io/e08fb68a1637d6b08550068d/bsc/testnet"),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, secret.url),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  contracts_directory: "/contracts/",
  contracts_build_directory: "/contracts/abi/",
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // optimizer: {
      //   enabled: true,
      //   runs: 200
      // },

    },
  },
};
