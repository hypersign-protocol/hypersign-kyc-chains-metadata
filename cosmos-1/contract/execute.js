export async function smartContractExecuteRPC(
    client,
    coinDenom,
    userAddress,
    contractAddress,
    executeMsg,
    fee
) {
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