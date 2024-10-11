import { HypersignOnChainKYCPlugin } from "./HypersignOnChainKYCPluginInterface";
import { NibiruTestnetPluginConfig } from "./contract/NibiruTestnetPluginConfig";
import { NibiruTestnetPluginContract } from "./contract/NibiruTestnetPluginContract";
import { NibiruTestnetPluginContractMessage } from "./contract/NibiruTestnetPluginContractMessage";
import { NibiruTestnetPluginWallet } from "./wallet/NibiruTestnetPluginWallet";

export default  class NibiruTestnetPlugin extends HypersignOnChainKYCPlugin {
    pluginWallet: NibiruTestnetPluginWallet;
    pluginContract: NibiruTestnetPluginContract;
    pluginConfig: NibiruTestnetPluginConfig;
    pluginContractMessage: NibiruTestnetPluginContractMessage;
    constructor(){
        super()
        this.pluginWallet = new NibiruTestnetPluginWallet()
        this.pluginContract = new NibiruTestnetPluginContract()
        this.pluginConfig = new NibiruTestnetPluginConfig()
        this.pluginContractMessage = new NibiruTestnetPluginContractMessage()
    }
}

// export {
//     NibiruTestnetPlugin
// }


