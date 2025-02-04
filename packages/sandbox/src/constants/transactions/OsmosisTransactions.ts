export const OsmosisTransactions: any = {
  delegate: {
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '18',
    fee: {
      amount: [
        {
          amount: '2800',
          denom: 'uatom',
        },
      ],
      gas: '290000',
    },
    memo: '',
    msg: [
      {
        type: 'cosmos-sdk/MsgDelegate',
        value: {
          delegator_address: 'cosmos15cenya0tr7nm3tz2wn3h3zwkht2rxrq7q7h3dj',
          validator_address: 'cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys',
          amount: {
            denom: 'uatom',
            amount: '1000',
          },
        },
      },
    ],
  },
  ibcTransfer: {
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '27',
    fee: {
      amount: [
        {
          amount: '2800',
          denom: 'uatom',
        },
      ],
      gas: '290000',
    },
    memo: '',
    msg: [
      {
        type: 'cosmos-sdk/MsgTransfer',
        value: {
          receiver: 'osmo15cenya0tr7nm3tz2wn3h3zwkht2rxrq7g9ypmq',
          sender: 'cosmos15cenya0tr7nm3tz2wn3h3zwkht2rxrq7q7h3dj',
          source_channel: 'channel-141',
          source_port: 'transfer',
          timeout_height: {
            revision_height: '9339851',
            revision_number: '1',
          },
          token: {
            amount: '100',
            denom: 'uatom',
          },
        },
      },
    ],
  },
  redelegate: {
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '19',
    fee: {
      amount: [
        {
          amount: '2800',
          denom: 'uosmo',
        },
      ],
      gas: '290000',
    },
    memo: '',
    msg: [
      {
        type: 'cosmos-sdk/MsgBeginRedelegate',
        value: {
          delegator_address: 'cosmos15cenya0tr7nm3tz2wn3h3zwkht2rxrq7q7h3dj',
          validator_src_address: 'cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys',
          validator_dst_address: 'cosmosvaloper1qs8tnw2t8l6amtzvdemnnsq9dzk0ag0z52uzay',
          amount: {
            denom: 'uosmo',
            amount: '100',
          },
        },
      },
    ],
  },
  rewards: {
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '19',
    fee: {
      amount: [
        {
          amount: '2800',
          denom: 'uatom',
        },
      ],
      gas: '290000',
    },
    memo: '',
    msg: [
      {
        type: 'cosmos-sdk/MsgWithdrawDelegatorReward',
        value: {
          delegator_address: 'cosmos15cenya0tr7nm3tz2wn3h3zwkht2rxrq7q7h3dj',
          validator_address: 'cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys',
          amount: {
            denom: 'uatom',
            amount: '100',
          },
        },
      },
    ],
  },
  transfer: {
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    fee: {
      amount: [
        {
          amount: '100',
          denom: 'uatom',
        },
      ],
      gas: '100000',
    },
    memo: '',
    msg: [
      {
        type: 'cosmos-sdk/MsgSend',
        value: {
          amount: [
            {
              amount: '1000',
              denom: 'uatom',
            },
          ],
          from_address: 'cosmos15cenya0tr7nm3tz2wn3h3zwkht2rxrq7q7h3dj',
          to_address: 'cosmos1qjwdyn56ecagk8rjf7crrzwcyz6775cj89njn3',
        },
      },
    ],
    sequence: '17',
  },
  undelegate: {
    account_number: '16359',
    chain_id: 'cosmoshub-4',
    sequence: '20',
    fee: {
      amount: [
        {
          denom: 'uatom',
          amount: '0',
        },
      ],
      gas: '250000',
    },
    memo: '',
    msg: [
      {
        type: 'cosmos-sdk/MsgUndelegate',
        value: {
          delegator_address: 'cosmos15cenya0tr7nm3tz2wn3h3zwkht2rxrq7q7h3dj',
          validator_address: 'cosmosvaloper1qwl879nx9t6kef4supyazayf7vjhennyh568ys',
          amount: {
            denom: 'uatom',
            amount: '3000',
          },
        },
      },
    ],
  },
}
