import { PluginContract } from '../HypersignOnChainKYCPluginInterface'

export class NibiruTestnetPluginContract extends PluginContract {
    constructor(){
        super()
    }

    async smartContractExecuteRPC(
        client: any,
        coinDenom: any,
        userAddress: any,
        contractAddress: any,
        executeMsg: any,
        fee: any = null,    
    ): Promise<any> {
        // Set the inital fee
        const fees = fee ? fee : {
            amount: [
                {
                    denom: coinDenom,
                    amount: "200000000",
                },
            ],
            gas: "200000000",
        };
    
        const txResult = await client.execute(
            userAddress,
            contractAddress,
            executeMsg,
            fees
        )
    
        return txResult
    }

    async smartContractQueryRPC(
        client: any,
        contractAddress: any,
        queryMsg: any,
    ): Promise<any>  {
        if (!client) {
            throw new Error('Connect your wallet to proceed')
        }
        // Exectute the contract message
        const queryResult = await client.queryContractSmart(
            contractAddress,
            queryMsg,
        );
        return queryResult;
    }
}