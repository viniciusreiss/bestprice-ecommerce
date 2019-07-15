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
      const cartItems = state.cart.filter(item => item.productId !== action.payload)
      return {
        ...state,
        cart: cartItems
      }
    default:
      return state
  }
}
export default reducer