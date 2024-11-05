import { getCosmosSupportedChains } from '../../blockchain';
export async function getUserAddressFromOfflineSigner(offlineSigner) {
    const accounts = await offlineSigner.getAccounts();
    const userAddress = accounts[0].address;
    return userAddress
}

// blockchainLabel
// cosmos:<bech32PrefixAccAddr>:<chainid>
export function getCosmosBlockchainLabel(chain) {
    return 'cosmos:' + chain.bech32Config.bech32PrefixAccAddr + ':' + chain.chainId
}

export function getCosmosChainConfig(blockchainLabel) {
    const splits = blockchainLabel.split(':')
    const bech32PrefixAccAddr = splits[1];
    const chainId = splits[2];
    return getCosmosSupportedChains().find(x => (x.chainId === chainId) && (x.bech32Config.bech32PrefixAccAddr === bech32PrefixAccAddr))
}

export function getCosmosCoinLogo(blockchainLabel) {
    const slectedChain = getCosmosChainConfig(blockchainLabel)
    return slectedChain.stakeCurrency.coinImageUrl;
    // const { default: SupportedChains } = await import(`../../../blockchains-metadata/${this.ecosystem}/wallet/${this.blockchain}/chains`)
}

export function getCosmosBlockchainBech32Prefix(chain) {
    return chain.bech32Config.bech32PrefixAccAddr
}

export const HYPERSIGN_PROOF_TYPES = Object.freeze({
    zkProofOfPersonHood: {
        type: "zk_proof_of_personhood",
        description: "Confirms you are a unique individual, not a bot, enabling secure, privacy-preserving interactions with DApps without sharing personal information.",
        bgColor: "rgb(187 122 245 / 29%)",
        sbtCode: "T1",
        image: "face-id.png",
        credentialType: ["PersonhoodCredential"]
    },
    zkProofOfKYC: {
        type: "zk_proof_of_k_y_c",
        description: "Proves you've completed KYC using zero-knowledge cryptography, enabling identity verification with DApps while keeping your personal information private",
        bgColor: "rgb(88 198 134 / 29%)",
        sbtCode: "T2",
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
        sbtCode: "T5",
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

// export const HYPERSIGN_PROOF_TYPES_DESCRIPTION = Object.freeze({
//     ProofOfPersonhood: "Proves that user is not a bot",
//     ProofOfKYC: "Proves that user has finished his/her KYC",
//     ProofOfCitizenship: "Proves user is citizen of a country",
//     ProofOfDateofBirth: "Proves user's date of birth",
//     ProofOfAge: "Proves user is above or below certain age",
//     ProofOfNonMembershipCountry: "Proves user are not citizen of non member country",
//     ProofOfOnchainAML: "Proves that the user's transactions and activities on a blockchain are compliant with anti-money laundering regulations and standards",
//     ProofOfTransaction: "Proves that a user has done transactions on a specific blockchain ",
//     ProofOfUSAccrediatedInvestor: "Proves that user met criteria set by US security exchange (SEC) to qualify as an accredited investor",
//     ProofOfNonPEP: "Proves that user is not on any international sanction list or is not classified as PEP",
// });

// export const HYPERSIGN_PROOF_TYPES_SBT_CODE_BG_COLOR = Object.freeze({
//     ProofOfPersonhood: "E5FFCC",
//     ProofOfKYC: "CCE5FF",
//     ProofOfCitizenship: "CCCCFF",
//     ProofOfDateofBirth: "CCFFE5",
//     ProofOfAge: "E5FFCC",
//     ProofOfNonMembershipCountry: "FFCCCC",
//     ProofOfOnchainAML: "FFCCE5",
//     ProofOfTransaction: "FFFFFF",
//     ProofOfUSAccrediatedInvestor: "E5FFCC",
//     ProofOfNonPEP: "FFCCCC",
// });

// export const HYPERSIGN_PROOF_TYPES_SBT_CODE = Object.freeze({
//     ProofOfPersonhood: "T1",
//     ProofOfKYC: "T2",
//     ProofOfCitizenship: "T3",
//     ProofOfDateofBirth: "T4",
//     ProofOfAge: "T5",
//     ProofOfNonMembershipCountry: "T6",
//     ProofOfOnchainAML: "T7",
//     ProofOfTransaction: "T8",
//     ProofOfUSAccrediatedInvestor: "T9",
//     ProofOfNonPEP: "T10",
// });





// HYPERSIGN_PROOF_TYPES, HYPERSIGN_PROOF_TYPES_DESCRIPTION, HYPERSIGN_PROOF_TYPES_SBT_CODE_BG_COLOR, HYPERSIGN_PROOF_TYPES_SBT_CODE
