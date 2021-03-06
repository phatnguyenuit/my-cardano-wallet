const Cardano = require('cardano-wallet');
const { generateMnemonic } = require('./utils');

const MNEMONICS = generateMnemonic(15);
const PASSWORD = 'Cardano Rust for the winners!';

// to connect the wallet to mainnet
let settings = Cardano.BlockchainSettings.mainnet();

// recover the entropy
let entropy = Cardano.Entropy.from_english_mnemonics(MNEMONICS);
// recover the wallet
let wallet = Cardano.Bip44RootPrivateKey.recover(entropy, PASSWORD);

// create a wallet account
let account = wallet.bip44_account(Cardano.AccountIndex.new(0 | 0x80000000));
let account_public = account.public();

// create an address
let chain_pub = account_public.bip44_chain(false);
let key_pub = chain_pub.address_key(Cardano.AddressKeyIndex.new(0));
let address = key_pub.bootstrap_era_address(settings);

console.log('MNEMONICS', MNEMONICS);
console.log("Address m/bip44/ada/'0/0/0", address.to_base58());
