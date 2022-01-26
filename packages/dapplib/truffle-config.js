require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note pizza minor idea depth fresh genius'; 
let testAccounts = [
"0x4cab9e79ddf046fa8950bddeac4b7826319738ccfd1746b19bd54164628c6e09",
"0xfb8e28f50deab7a8a5a65a6e9fecc54352523989d82b80a8639273e3487baf21",
"0x8b889ed314a90f6144291a661f68e78a40aba83a12d15115d06f422a5c612c87",
"0xa77002c2c8aa89f385d8654a4e2edbf8a3c293cf2d49c7c433937f96cb1684f1",
"0xed47a01958e7330e637504269fe4bf3a80a41b13c0ea110d069b845d5ce6165a",
"0x670ef95083596443de0a8e17230d083d604c90bd706bb800553e8690972217ea",
"0x36545e5ac2b888d9a5db67f69177c6a4526454cabf57535c9afd81c8af751bc6",
"0x6555a314fc69e43f142ed60585b55e8a9202d5c7b9bb8019b3e03a7843b83a21",
"0x6b3733d8fd0d2cc851425b214454c22d288b8e579dfc3d98a17e4a502413d2db",
"0x960b7c8c4faaf8e7df3384029f41da29cb6c36931ec1d7102d7cece3950f0fe5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

