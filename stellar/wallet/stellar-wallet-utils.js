import { getStellarSupportedChains } from '../../blockchain';
export async function getUserAddressFromOfflineSigner(offlineSigner) {
    const accounts = await offlineSigner.getAccounts();
    const userAddress = accounts[0].address;
    return userAddress
}

export function getStellarBlockchainLabel(chain) {
    return 'stellar:' + chain.bech32Config.bech32PrefixAccAddr + ':' + chain.chainId
}

export function getStellarChainConfig(blockchainLabel) {
    const splits = blockchainLabel.split(':')
    const bech32PrefixAccAddr = splits[1];
    const chainId = splits[2];
    return getStellarSupportedChains().find(x => (x.chainId === chainId) && (x.bech32Config.bech32PrefixAccAddr === bech32PrefixAccAddr))
}

export function getStellarCoinLogo(blockchainLabel) {
    const slectedChain = getStellarChainConfig(blockchainLabel)
    return slectedChain.stakeCurrency.coinImageUrl;
}

export function getStellarBlockchainBech32Prefix(chain) {
    return chain.bech32Config.bech32PrefixAccAddr
}
