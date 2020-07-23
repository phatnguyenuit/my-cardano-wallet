const { generateMnemonic: _generateMnemonic } = require('bip39-light');

function generateMnemonic(wordCount) {
  wordCount = wordCount || 12;

  if (wordCount % 3 !== 0) {
    throw Error(`Invalid mnemonic word count supplied: ${wordCount}`);
  }

  return _generateMnemonic((32 * wordCount) / 3);
}

module.exports = {
  generateMnemonic,
};
