export interface RippleAccount {
  sequence: number
  xrpBalance: string
  ownerCount: number
  previousAffectingTransactionID: string
  previousAffectingTransactionLedgerVersion: number
}
