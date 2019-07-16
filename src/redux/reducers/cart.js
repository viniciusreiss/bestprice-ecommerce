import { ADD_TO_CART, CLEAN_CART, REMOVE_ITEM } from '../actions/actionTypes'

const initialState = {
  cart: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case CLEAN_CART:
      return {
        ...state,
        cart: []
      }
    case REMOVE_ITEM:
     const newCart = []
      state.cart.forEach(item => {
        if (item.quantity >= 1 && item.productId === action.payload.id) {
            item.quantity--
        } if (item.quantity > 0) {
            newCart.push(item)
        }
      })
      return {
        ...state,
        cart: newCart
      }
    default:
      return state
  }
}
export default reducer