const sumItemsCart = (cart) => {
  const sum = cart.map(item => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0)
  const formattedSum = sum.toFixed(2)
  return formattedSum.toString().replace(/\.|-/g, '')
}

export {
  sumItemsCart
}