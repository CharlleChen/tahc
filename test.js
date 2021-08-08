const {Conflux, Drip} = require('js-conflux-sdk');

const cfx = new Conflux({
  url: 'https://test.confluxrpc.com',
  defaultGasPrice: 100, // The default gas price of your following transactions
  defaultGas: 1000000, // The default gas of your following transactions
  logger: console,
  networkId: 1,
});

const PRIVATE_KEY = '0x89234C9E3D7C3E3EB1E18A2B8F0C1C1FE89A7BE67CF8F82759EE47A1F66DAC96';
const account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance
const receiver = 'cfxtest:aarc9abycue0hhzgyrr53m6cxedgccrmmy8m50bu1p'

let txParams = {
  from: account, // from account instance and will by sign by account.privateKey
  // nonce
  // gasPrice
  // gas
  to: receiver, // accept address string or account instance
  value: Drip.fromCFX(0.125), // use the conversion utility function
  // storageLimit
  // epochHeight
  // data
};

async function main() {
  const txHash = await cfx.sendTransaction(txParams);
  console.log(txHash);
}

main().catch(e => console.error(e));
