import { HypersignOnChainKYCPlugin } from "./HypersignOnChainKYCPluginInterface";
export class HypersignOnChainMetadataPlugin {
    // cosmos:nibi:nibiru-testnet-1
    static async loadPlugin(blockchainLabel: string): Promise<HypersignOnChainKYCPlugin> {
        try{
            blockchainLabel = blockchainLabel.replace(':', "-").replace(':', "-")
            const plugin = await import(blockchainLabel);
            if(!plugin){
                throw new Error(`Plugin for ${blockchainLabel} is not available`)
            }
            return new plugin.default();    
        }catch(e){
            throw new Error(`Failed to load plugin ${blockchainLabel}:`);
        }
    }   
}


// HypersignOnChainMetadataPlugin.loadPlugin('cosmos:nibi:nibiru-testnet-1').then((NibiruPlugin: HypersignOnChainKYCPlugin) => {
//     console.log(NibiruPlugin.pluginConfig.HYPERSIGN_KYC_FACTORY_CONTRACT_ADDRESS)
// })
