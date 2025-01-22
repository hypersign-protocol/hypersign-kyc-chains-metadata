const NibiruSupportedLocalnetChains = require('./cosmos/wallet/nibi/nibiru-localnet-0/chains.json')
const NibiruSupportedTestnetChains = require('./cosmos/wallet/nibi/nibiru-testnet-1/chains.json')
const OsmosisSupportedTestnetChains = require('./cosmos/wallet/osmo/osmo-test-5/chains.json')
const NibiruSupportedMainnetChains = require('./cosmos/wallet/nibi/cataclysm-1/chains.json')
const TerraSupportedTestnetChains = require('./cosmos/wallet/terra/rebel-2/chains.json')

const DiamSupportedTestnetChains = require('./stellar/wallet/diam/Diamante Testnet 2024/chains.json')
const DiamanteSupportedMainnetChains = require('./stellar/wallet/diam/Diamante Mainnet/chains.json')
function getCosmosSupportedChains() {
    return [
        ...NibiruSupportedLocalnetChains,
        ...NibiruSupportedTestnetChains,
        ...OsmosisSupportedTestnetChains,
        ...NibiruSupportedMainnetChains,
        ...TerraSupportedTestnetChains
    ]
}
function getStellarSupportedChains() {
    return [
        ...DiamSupportedTestnetChains,
        ...DiamanteSupportedMainnetChains

    ]
}
function getSupportedChains() {
    return {
        interchain: [...getCosmosSupportedChains()],
        stellar: [...getStellarSupportedChains()]
    }
}


module.exports = {
    getCosmosSupportedChains,
    getStellarSupportedChains,
    getSupportedChains

}
