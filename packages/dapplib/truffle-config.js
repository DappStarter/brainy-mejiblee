require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name repeat noble essay give glimpse flock genre'; 
let testAccounts = [
"0xf72b29bb197883fda72911ab94df2bd633710413488934003420269bfc3c0460",
"0x946323363c5416ba16986e88c102a375c65d737d3cd45b1535efa2dcd6c7fb05",
"0x00ad961400877eb75780683d2bd979e96762ef7499e7635666f31b4798974ee4",
"0x4fc762b2ffd95752b6fab8d4a5bbd7ea177570ed07427643232cbd810abe833b",
"0xf2961e87aeda85a9121273e79b61be1152e24abf2b638e45bcdd1b7fcd51d2c1",
"0x617a62930cfa4410cb4cb5d4a32fa990ad5a3fcb253ac72e7a50c0324b887927",
"0x36a49ea13c601fafafd12dd0b7621e850b507f80a00e3b760f1c9862584b84a9",
"0x61768f4e59c92ac51a1dd6c462a03ccdeb2815bde162fcfba414068855f104e0",
"0x5a967d237a19947f979309fdad99b84699bdd2552811912e264217b85f5ee37d",
"0xe817545962b84ff25f2080cbbf49b70bb329eba6a138340d90d11856d77e7bf9"
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
            version: '^0.5.11'
        }
    }
};
