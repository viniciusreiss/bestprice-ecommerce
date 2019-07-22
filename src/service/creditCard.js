import pagarme from 'pagarme'
import { ENCRYPTION_KEY } from '../utils/keys'

const url = "https://api.pagar.me/1/transactions"

const generateCardHash = async (card) => {
  const hash = await pagarme.client.connect({ encryption_key: ENCRYPTION_KEY })
    .then(client => client.security.encrypt(card))

  return hash
}

const payment = async (body) => {

  const res = await fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())

  return res
}

export {
  generateCardHash,
  payment,
}