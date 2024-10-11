import { SigningCosmWasmClient, CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { Uint53 } from "@cosmjs/math";
import {
    GasPrice, coins
} from "@cosmjs/stargate";
import ChainJSON  from '../schema/chains.json'

import { IChainJson, PluginWallet } from '../HypersignOnChainKYCPluginInterface';

export class NibiruTestnetPluginWallet extends PluginWallet{

    CHAIN_JSON: IChainJson;
    constructor(){
        super()
        this.CHAIN_JSON = ChainJSON[0]
    }

    async createClient(rpcUrl: string, offlineSigner: any) {
        const client = SigningCosmWasmClient.connectWithSigner(
            rpcUrl,
            offlineSigner
        )
        return client
    }
    
    async createNonSigningClient(rpcUrl: string) {
        const client = CosmWasmClient.connect(rpcUrl)
        return client
    }
    
    calculateFee(gasLimit: any, gasPrice: any) {
        const processedGasPrice = typeof gasPrice === "string" ? GasPrice.fromString(gasPrice) : gasPrice;
        const { denom, amount: gasPriceAmount } = processedGasPrice;
        // Note: Amount can exceed the safe integer range (https://github.com/cosmos/cosmjs/issues/1134),
        // which we handle by converting from Decimal to string without going through number.
        const t = gasPriceAmount.multiply(new Uint53(gasLimit))
        const amount = t.toString();
        return {
            amount: coins(amount, denom),
            gas: gasLimit.toString(),
        };
    }
    
    

}


