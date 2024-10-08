import NibiruSupportedLocalnetChains from './cosmos/wallet/nibi/nibiru-localnet-0/chains.json'
import NibiruSupportedTestnetChains from './cosmos/wallet/nibi/nibiru-testnet-1/chains.json'
import OsmosisSupportedTestnetChains from './cosmos/wallet/osmo/osmo-test-5/chains.json'


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

