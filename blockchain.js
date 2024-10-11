import NibiruSupportedLocalnetChains from './cosmos-1/wallet/nibi/nibiru-localnet-0/chains.json'
import NibiruSupportedTestnetChains from './cosmos-1/wallet/nibi/nibiru-testnet-1/chains.json'
import OsmosisSupportedTestnetChains from './cosmos-1/wallet/osmo/osmo-test-5/chains.json'

export function getCosmosSupportedChains() {
    return [
        ...NibiruSupportedLocalnetChains,
        ...NibiruSupportedTestnetChains,
        ...OsmosisSupportedTestnetChains
    ]
}

export function getSupportedChains() {
    return {
        interchain: [...getCosmosSupportedChains()],
    }
}

export function getCosmosChainConfig(blockchainLabel) {
    const splits = blockchainLabel.split(':')
    const bech32PrefixAccAddr = splits[1];
    const chainId = splits[2];
    return getCosmosSupportedChains().find(x => (x.chainId === chainId) && (x.bech32Config.bech32PrefixAccAddr === bech32PrefixAccAddr))
}

export function getCosmosCoinLogo(blockchainLabel) {
    const slectedChain = getCosmosChainConfig(blockchainLabel)
    return slectedChain?.stakeCurrency.coinImageUrl;
    // const { default: SupportedChains } = await import(`../../../blockchains-metadata/${this.ecosystem}/wallet/${this.blockchain}/chains`)
}

