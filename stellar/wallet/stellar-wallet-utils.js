const { getStellarSupportedChains } = require('../../blockchain');
async function getUserAddressFromOfflineSigner(offlineSigner) {
    const accounts = await offlineSigner.getAccounts();
    const userAddress = accounts[0].address;
    return userAddress
}

function getStellarBlockchainLabel(chain) {
    return 'stellar:' + chain.bech32Config.bech32PrefixAccAddr + ':' + chain.chainId
}

function getStellarChainConfig(blockchainLabel) {
    const splits = blockchainLabel.split(':')
    const bech32PrefixAccAddr = splits[1];
    const chainId = splits[2];
    return getStellarSupportedChains().find(x => (x.chainId === chainId) && (x.bech32Config.bech32PrefixAccAddr === bech32PrefixAccAddr))
}

function getStellarCoinLogo(blockchainLabel) {
    const slectedChain = getStellarChainConfig(blockchainLabel)
    return slectedChain.stakeCurrency.coinImageUrl;
}

function getStellarBlockchainBech32Prefix(chain) {
    return chain.bech32Config.bech32PrefixAccAddr
}


module.exports = {
    getStellarBlockchainBech32Prefix, getStellarCoinLogo, getStellarChainConfig, getStellarBlockchainLabel, getUserAddressFromOfflineSigner
}