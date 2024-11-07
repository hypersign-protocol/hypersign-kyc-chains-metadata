import NibiruSupportedLocalnetChains from './cosmos/wallet/nibi/nibiru-localnet-0/chains.json'
import NibiruSupportedTestnetChains from './cosmos/wallet/nibi/nibiru-testnet-1/chains.json'
import OsmosisSupportedTestnetChains from './cosmos/wallet/osmo/osmo-test-5/chains.json'
import NibiruSupportedMainnetChains from './cosmos/wallet/nibi/cataclysm-1/chains.json'


export function getCosmosSupportedChains() {
    return [
        ...NibiruSupportedLocalnetChains,
        ...NibiruSupportedTestnetChains,
        ...OsmosisSupportedTestnetChains,
        ...NibiruSupportedMainnetChains
    ]
}

export function getSupportedChains() {
    return {
        interchain: [...getCosmosSupportedChains()],
    }
}

