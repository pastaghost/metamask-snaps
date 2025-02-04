import {
  BTCSignedMessage as LitecoinSignedMessage,
  BTCSignedTx as LitecoinSignedTransaction,
  BTCSignMessage as LitecoinSignMessage,
  BTCSignTx as LitecoinSignTransaction,
  BTCVerifyMessage as LitecoinVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../../lib/logger'
import { getProvider } from '../common'

const moduleLogger = logger.child({ namespace: ['utils', 'litecoin', 'LitecoinRPCRequests.ts'] })

/**
 * ? These helper functions could be moved into the snap itself, but providing these native methods would
 * violate the canonical RPC interface standard. Since we're using them here to make the interface simpler,
 * maybe it's prudent to export these (with typed parameters and returns) from the snap module alongside
 * the standard RPC methods.  */

export const LTCGetAddress = async (): Promise<string | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCGetAddress' }, `ltc_getAddress RPC call failed.`)
  }
  return undefined
}

export const LTCSignMessage = async (
  message: LitecoinSignMessage,
): Promise<LitecoinSignedMessage | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCSignMessage' }, `ltc_signMessage RPC call failed.`)
  }
  return undefined
}

export const LTCSignTransaction = async (
  transaction: LitecoinSignTransaction,
): Promise<LitecoinSignedTransaction | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCSignTransaction' }, `ltc_signTransaction RPC call failed.`)
  }
  return undefined
}

export const LTCVerifyMessage = async (
  message: LitecoinVerifyMessage,
): Promise<boolean | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCVerifyMessage' }, `ltc_verifyMessage RPC call failed.`)
    return undefined
  }
}
