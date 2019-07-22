const sumItemsCart = (cart) => {
  const sum = cart.map(item => item.price * item.quantity).reduce((acc, cur) => acc + cur, 0)
  return sum.toString().replace(/\.|-/g, '')
}

export {
  sumItemsCart
}