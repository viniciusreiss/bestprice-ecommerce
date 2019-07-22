const formatPrice = (price) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const formatReal = (amount) => {
    let value = amount+''
    value = value.replace(/([0-9]{2})$/g, ",$1")
    if( value.length > 6 )
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
        return value
}

export {
  formatPrice,
  formatReal,
}