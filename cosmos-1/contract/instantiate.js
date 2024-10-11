export async function smartContractCodeInstantiateRPC(
    client,
    coinDenom,
    userAddress,
    codeId,
    instantiateMsg,
    smartContractlabel,
    fee,
) {
    // Set the inital fee
    const fees = fee ? fee : {
        amount: [
            {
                denom: coinDenom,
                amount: "4000",
            },
        ],
        gas: "200000",
    };

    // Instantitate the smart contract code
    try {
        const txResult = await client.instantiate(
            userAddress,
            parseInt(codeId),
            instantiateMsg,
            smartContractlabel,
            fees
        )
        alert("Transaction Successful: " + txResult["transactionHash"]);
        const contractAddress = txResult["contractAddress"]
        return contractAddress
    } catch (err) {
        alert("Transaction has failed, Error Log below \n\n " + err.message)
        return null
    }
}

