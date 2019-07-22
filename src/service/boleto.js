const url = 'https://api.pagar.me/1/transactions'

const generateBoleto = async (body) => {
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
  generateBoleto,
}