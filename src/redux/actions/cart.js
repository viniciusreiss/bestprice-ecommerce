import { ADD_TO_CART, CLEAN_CART, REMOVE_ITEM } from './actionTypes'

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const cleanCart = () => {
  return {
    type: CLEAN_CART,
  }
}

export const removeItem = product => {
  return {
    type: REMOVE_ITEM,
    payload: product,
  }
}