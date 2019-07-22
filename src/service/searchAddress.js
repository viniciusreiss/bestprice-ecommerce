const url = zipCode => `https://viacep.com.br/ws/${zipCode}/json/`

const getAddressByZipCode = (zipCode) => {
  const address = fetch(url(zipCode.replace(/\D+/g, ''))).then(res => res.json())
  return address
}

export default getAddressByZipCode