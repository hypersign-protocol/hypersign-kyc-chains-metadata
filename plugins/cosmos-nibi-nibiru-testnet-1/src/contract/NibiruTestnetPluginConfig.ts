import { PluginConfig } from "../HypersignOnChainKYCPluginInterface"

export class NibiruTestnetPluginConfig extends PluginConfig {
    HYPERSIGN_KYC_FACTORY_CODE_ID: number;
    ISSUER_KYC_CODE_ID: number;
    SBT_TOKEN_CODE_ID: number;
    HYPERSIGN_KYC_FACTORY_CONTRACT_ADDRESS: string;
    constructor(){
        super()
        this.HYPERSIGN_KYC_FACTORY_CODE_ID  = 1312
        this.ISSUER_KYC_CODE_ID = 1311
        this.SBT_TOKEN_CODE_ID = 1313
        this.HYPERSIGN_KYC_FACTORY_CONTRACT_ADDRESS ="nibi19c3tpkj9dr3wakehywh8mxkua56d0l5nrkzx35uyt6jxuy686yrqlr6q2u" 
    }
}
