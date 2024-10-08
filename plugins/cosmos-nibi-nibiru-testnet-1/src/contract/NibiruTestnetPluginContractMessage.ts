import { PluginContractMessage } from '../HypersignOnChainKYCPluginInterface'

export class NibiruTestnetPluginContractMessage extends PluginContractMessage {
    constructor(){
        super()
    }
    // Prepares a message for `create_entry` RPC method
    constructSBTMintMsg(owner: any, nftTokenId: any, nftTokenUri: any) {
        return {
            "mint": {
                "owner": owner,
                "token_id": nftTokenId,
                "token_uri": nftTokenUri,
            }
        }
    }

    constructKYCSBTMintMsg({ hypersign_proof }: any) {
        return {
            "mint": {
                hypersign_proof
            }
        }
    }

    constructOnBoardIssuer({ did_doc, did_doc_proof, signature }: any) {
        return {
            "onboard_issuer": {
                "did_doc": JSON.stringify(did_doc),
                "did_doc_proof": JSON.stringify(did_doc_proof),
                "signature": signature,
                // "issuer_did": issuer_did,
                // "issuer_kyc_code_id": issuer_kyc_code_id,
            }
        }
    }

    constructGetRegistredIssuerMsg(issuer_did: string) {
        return {
            "get_registered_issuer": {
                issuer_did
            }
        }
    }

    constructGetRegistredSBTContractAddressMsg() {
        return {
            "s_b_t_contract_address": {

            }
        }
    }

    // Message to get the list of SBT tokens for a user
    constructQuerySBTTokensMsg() {
        return {
            "all_tokens": {
                "limit": 90,
            }
        }
    }

    constructQueryTokensByOwner(owner: string) {
        return {
            "tokens": {
                "owner": owner
            }
        }
    }

    // Message to get the details of an SBT token 
    constructQuerySBTTokenDetailsMsg(tokenId: any) {
        return {
            "all_nft_info": {
                "token_id": tokenId
            }
        }
    }

    // Return owner for a token
    constructQuerySBTTokenOwnerMsg(tokenId: any) {
        return {
            "owner_of": {
                "token_id": tokenId
            }
        }
    }

    constructInitSbtMsg(token_code_id: any) {
        return {
            "init":
            {
                token_code_id
            }
        }
    }

    // Execute SBT Transfer to new owner
    constructExecuteSBTTransfer(nftTokenId: any, newOwner: any) {
        return {
            "transfer_nft": {
                "recipient": newOwner,
                "token_id": nftTokenId
            }
        }
    }

    // Query the top-level Smart Contract metadata
    constructQuerySBTContractMetadata() {
        return {
            "contract_info": {}
        }
    }


}