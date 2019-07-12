const formatPrice = (price) => price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export {
  formatPrice
}