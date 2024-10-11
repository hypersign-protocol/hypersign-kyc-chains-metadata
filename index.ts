import { HypersignOnChainKYCPlugin, IChainInfo } from "./HypersignOnChainKYCPluginInterface";

// import tsConfig from './tsconfig.json'
export class HypersignOnChainMetadataPlugin {
    // cosmos:nibi:nibiru-testnet-1
    static async loadPlugin(blockchainLabel: string): Promise<HypersignOnChainKYCPlugin> {
        try{
            console.log({blockchainLabel})
            blockchainLabel = blockchainLabel.replace(':', "-").replace(':', "-")
            console.log(blockchainLabel)
            console.log(1)
            // const path = /`./plugins/${blockchainLabel}/src/index.js`
            // console.log({path})
            const plugin = await import(blockchainLabel);
            // const plugin = await import(blockchainLabel);
            console.log(2)
            if(!plugin){
                console.log(3)
                throw new Error(`Plugin for ${blockchainLabel} is not available`)
            }

            return new plugin.default();    
        }catch(e){
            console.log(e)
            throw new Error(`Failed to load plugin ${blockchainLabel}:`);
        }
    }   

    // static async listPlugins(): Promise<Array<IChainInfo>> {
    //     const allPaths = Object.keys(tsConfig.compilerOptions.paths)
    //     const pluginNames: IChainInfo[] = [];
    //     return new Promise((resolve) => {
    //         // Read all directories in the packages folder
    //         allPaths.forEach(async (dir) => {
    //                 dir = dir.replace("-", ":").replace("-", ":")
    //                 console.log(dir)
    //                 const loadedPlugin = await HypersignOnChainMetadataPlugin.loadPlugin(dir)   
    //                 const chainInfo = loadedPlugin.pluginWallet.getChainInfo()     
    //                 pluginNames.push({...chainInfo});
                
    //         });
    //         resolve(pluginNames);
    //     })  
    // }

    // static getSupportedChains()
}



// HypersignOnChainMetadataPlugin.listPlugins().then(x => {
//     console.log(x)
// })

// HypersignOnChainMetadataPlugin.loadPlugin('cosmos:nibi:nibiru-testnet-1').then((NibiruPlugin: HypersignOnChainKYCPlugin) => {
//     console.log(NibiruPlugin.pluginConfig.HYPERSIGN_KYC_FACTORY_CONTRACT_ADDRESS)
//     console.log(NibiruPlugin.pluginWallet.getChainEndpoints())
// })

HypersignOnChainMetadataPlugin.loadPlugin('cosmos:osmo:osmo-test-5').then((OsmosisPlugin: HypersignOnChainKYCPlugin) => {
    console.log(OsmosisPlugin.pluginConfig.HYPERSIGN_KYC_FACTORY_CONTRACT_ADDRESS)
    console.log(OsmosisPlugin.pluginWallet.getChainEndpoints())
})
