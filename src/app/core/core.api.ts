export const apiBase = 'api'

export const ApiAddress = {
  ACCOUNTS: 'accounts',
}

Object.keys(ApiAddress).forEach((key) => {
  ApiAddress[key] = `${apiBase}/${ApiAddress[key]}`
})
