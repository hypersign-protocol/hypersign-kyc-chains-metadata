export abstract class PluginConfig {
    abstract HYPERSIGN_KYC_FACTORY_CODE_ID: number;
    abstract ISSUER_KYC_CODE_ID: number;
    abstract SBT_TOKEN_CODE_ID: number;
    abstract HYPERSIGN_KYC_FACTORY_CONTRACT_ADDRESS: string;
    HYPERSIGN_PROOF_TYPES = Object.freeze({
        zkProofOfPersonhood: {
            type: "proof_of_personhood",
            description: "Proves that user is not a bot",
            bgColor: "#E5FFCC",
            sbtCode: "T1",
            image: "https://cdn-icons-png.flaticon.com/128/1077/1077114.png",
        },
        zkProofOfKYC: {
            type: "proof_of_k_y_c",
            description: "Proves that user has finished his/her KYC",
            bgColor: "#CCE5FF",
            sbtCode: "T2",
            image: "https://cdn-icons-png.flaticon.com/128/17442/17442784.png"
        },
    })

    getConfig() {
        return {
            HYPERSIGN_KYC_FACTORY_CODE_ID: this.HYPERSIGN_KYC_FACTORY_CODE_ID,
            ISSUER_KYC_CODE_ID: this.ISSUER_KYC_CODE_ID,
            SBT_TOKEN_CODE_ID: this.SBT_TOKEN_CODE_ID,
            HYPERSIGN_KYC_FACTORY_CONTRACT_ADDRESS: this.HYPERSIGN_KYC_FACTORY_CONTRACT_ADDRESS,
            HYPERSIGN_PROOF_TYPES: this.HYPERSIGN_PROOF_TYPES

        }
    }
}

export abstract class PluginContract {
    abstract smartContractExecuteRPC(
        client: any,
        coinDenom: any,
        userAddress: any,
        contractAddress: any,
        executeMsg: any,
        fee?: any,
    ): Promise<any>;

    abstract smartContractQueryRPC(
        client: any,
        contractAddress: any,
        queryMsg: any,
    ): Promise<any>;
}

export abstract class PluginContractMessage {
    abstract constructSBTMintMsg(owner: any, nftTokenId: any, nftTokenUri: any): object;
    abstract constructKYCSBTMintMsg({ hypersign_proof }: any): object;
    abstract constructOnBoardIssuer({ did_doc, did_doc_proof, signature }: any): object;
    abstract constructGetRegistredIssuerMsg(issuer_did: string): object;
    abstract constructGetRegistredSBTContractAddressMsg(): object;
    abstract constructQuerySBTTokensMsg(): object;
    abstract constructQueryTokensByOwner(owner: string): object;
    abstract constructQuerySBTTokenDetailsMsg(tokenId: any): object;
    abstract constructQuerySBTTokenOwnerMsg(tokenId: any): object;
    abstract constructInitSbtMsg(token_code_id: any): object;
    abstract constructExecuteSBTTransfer(nftTokenId: any, newOwner: any): object;
    abstract constructQuerySBTContractMetadata(): object;
}



export interface IStakeCurrency {
    coinDenom: string; 
    coinMinimalDenom: string; 
    coinDecimals: number; 
    coinGeckoId: string; 
    coinImageUrl: string; 
}
export interface IBech32Config {
    bech32PrefixAccAddr: string;
    bech32PrefixAccPub: string;
    bech32PrefixValAddr: string;
    bech32PrefixValPub: string;
    bech32PrefixConsAddr: string;
    bech32PrefixConsPub: string;
}
export interface IChainJson {
    chainId: string;
    chainName: string;
    rpc: string;
    rest: string;
    stakeCurrency: IStakeCurrency; 
    bip44: object; 
    bech32Config: IBech32Config;
    currencies: Array<object>;
    feeCurrencies: Array<object>;
    gasPriceStep: object; 
    coinType: number; 
    features: Array<string>;
    txExplorer: Object;
}
export interface IChainInfo {
    logo: string;
    chainName: string; 
    chainId: string;
    chainLabel: string;
}

export abstract class PluginWallet {
    abstract CHAIN_JSON: IChainJson;
    abstract createClient(rpcUrl: string, offlineSigner: any): Promise<any>;
    abstract createNonSigningClient(rpcUrl: string): Promise<any>;
    abstract calculateFee(gasLimit: any, gasPrice: any): any;

    getChainInfo(): IChainInfo{
        return {
            logo: this.CHAIN_JSON.stakeCurrency.coinImageUrl,
            chainName: this.CHAIN_JSON.chainName,
            chainId: this.CHAIN_JSON.chainId,
            chainLabel: this.getCosmosBlockchainLabel()
        }
    }

    getChainEndpoints(): Object{
        return {
            rest: this.CHAIN_JSON.rest,
            rpc: this.CHAIN_JSON.rpc,
        }
    }

    async getUserAddressFromOfflineSigner(offlineSigner: any): Promise<any> {
        const accounts = await offlineSigner.getAccounts();
        const userAddress = accounts[0].address;
        return userAddress
    }

    // blockchainLabel
    // cosmos:<bech32PrefixAccAddr>:<chainid>
    getCosmosBlockchainLabel(): string {
        return 'cosmos:' + this.CHAIN_JSON.bech32Config.bech32PrefixAccAddr + ':' + this.CHAIN_JSON.chainId
    }

    getCosmosBlockchainBech32Prefix(): string {
        return this.CHAIN_JSON.bech32Config.bech32PrefixAccAddr
    }
}

export abstract class HypersignOnChainKYCPlugin {
    abstract pluginWallet: PluginWallet;
    abstract pluginContract: PluginContract;
    abstract pluginConfig: PluginConfig;
    abstract pluginContractMessage: PluginContractMessage;
}