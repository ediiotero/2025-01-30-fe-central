export const depositMoney = amount => {
    return {
        type: 'DEPOSIT',
        payload: amount
    }
}

export const withdrawMoney = amount => {
    return {
        type: 'WITHDRAW',
        payload: amount
    }
}