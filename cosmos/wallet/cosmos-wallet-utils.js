// import { getCosmosSupportedChains } from '../../blockchain';
const { getCosmosSupportedChains } = require('../../blockchain');
async function getUserAddressFromOfflineSigner(offlineSigner) {
    const accounts = await offlineSigner.getAccounts();
    const userAddress = accounts[0].address;
    return userAddress
}

// blockchainLabel
// cosmos:<bech32PrefixAccAddr>:<chainid>
function getCosmosBlockchainLabel(chain) {
    return 'cosmos:' + chain.bech32Config.bech32PrefixAccAddr + ':' + chain.chainId
}

function getCosmosChainConfig(blockchainLabel) {
    const splits = blockchainLabel.split(':')
    const bech32PrefixAccAddr = splits[1];
    const chainId = splits[2];
    return getCosmosSupportedChains().find(x => (x.chainId === chainId) && (x.bech32Config.bech32PrefixAccAddr === bech32PrefixAccAddr))
}

function getCosmosCoinLogo(blockchainLabel) {
    const slectedChain = getCosmosChainConfig(blockchainLabel)
    return slectedChain.stakeCurrency.coinImageUrl;
    // const { default: SupportedChains } = await import(`../../../blockchains-metadata/${this.ecosystem}/wallet/${this.blockchain}/chains`)
}

function getCosmosBlockchainBech32Prefix(chain) {
    return chain.bech32Config.bech32PrefixAccAddr
}

const HYPERSIGN_PROOF_TYPES = Object.freeze({
    zkProofOfPersonHood: {
        type: "zk_proof_of_personhood",
        description: "Confirms you are a unique individual, not a bot, enabling secure, privacy-preserving interactions with DApps without sharing personal information.",
        bgColor: "rgb(187 122 245 / 29%)",
        sbtCode: "HST:T1",
        image: "face-id.png",
        credentialType: ["PersonhoodCredential"]
    },
    zkProofOfKYC: {
        type: "zk_proof_of_k_y_c",
        description: "Proves you've completed KYC using zero-knowledge cryptography, enabling identity verification with DApps while keeping your personal information private",
        bgColor: "rgb(88 198 134 / 29%)",
        sbtCode: "HST:T2",
        image: "kyc.png",
        credentialType: ["PassportCredential", "GovernmentIdCredential"]
    },
    // ProofOfCitizenship: {
    //     type: "proof_of_citizenship",
    //     description: "",
    //     bgColor: "E5FFCC",
    //     sbtCode: "T3"

    // },
    // ProofOfDateofBirth: {
    //     type: "proof_of_dateof_birth",
    //     description: "",
    //     bgColor: "E5FFCC",
    //     sbtCode: "T4"

    // },
    zkProofOfAge: {
        type: "zk_proof_of_age",
        description: "Verifies that you meets a minimum age requirement without disclosing your exact age or any personal information.",
        bgColor: "rgb(255 195 0 / 29%)",
        sbtCode: "HST:T5",
        image: "calendar.png",
        credentialType: ["PassportCredential", "GovernmentIdCredential"]

    },
    // ProofOfNonMembershipCountry: {
    //     type: "proof_of_non_membership_country",
    //     description: "",
    //     bgColor: "#9bf1f5",
    //     sbtCode: "T6"

    // },
    // ProofOfOnchainAML: {
    //     type: "proof_of_onchain_a_m_l",
    //     description: "",
    //     bgColor: "E5FFCC",
    //     sbtCode: "T7"

    // },
    // ProofOfUSAccrediatedInvestor: {
    //     type: "proof_of_u_s_accrediated_investor",
    //     description: "",
    //     bgColor: "E5FFCC",
    //     sbtCode: "T8"

    // },
    // ProofOfTransaction: {
    //     type: "proof_of_transaction",
    //     description: "",
    //     bgColor: "E5FFCC",
    //     sbtCode: "T9"

    // },
    // ProofOfNonPEP: {
    //     type: "proof_of_non_p_e_p",
    //     description: "",
    //     bgColor: "E5FFCC",
    //     sbtCode: "T10"

    // },
})


module.exports = {
    HYPERSIGN_PROOF_TYPES, getCosmosBlockchainBech32Prefix, getCosmosCoinLogo, getCosmosChainConfig, getCosmosBlockchainLabel, getUserAddressFromOfflineSigner
}