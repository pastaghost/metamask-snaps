export const BinanceTransactions: any = {
  transfer: {
    account_number: '34',
    chain_id: 'Binance-Chain-Nile',
    data: null,
    memo: 'test',
    msgs: [
      {
        inputs: [
          {
            address: 'tbnb1hgm0p7khfk85zpz5v0j8wnej3a90w709zzlffd',
            coins: [
              {
                amount: '1000000000',
                denom: 'BNB',
              },
            ],
          },
        ],
        outputs: [
          {
            address: 'tbnb1ss57e8sa7xnwq030k2ctr775uac9gjzglqhvpy',
            coins: [
              {
                amount: '1000000000',
                denom: 'BNB',
              },
            ],
          },
        ],
      },
    ],
    sequence: '31',
    source: '1',
  },
}
