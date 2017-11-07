export const apiBase = 'api'

export const ApiAddress = {
  ACCOUNTS: 'accounts',
  OPEN_WALLET: 'open-wallet',
  CREATE_WALLET: 'create-wallet',
  CREATE_ACCOUNT: 'create-account',
  SAVE_PRIVATE_KEY: 'save-key'
}

Object.keys(ApiAddress).forEach((key) => {
  ApiAddress[key] = `${apiBase}/${ApiAddress[key]}`
})
