import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes'

export function cart(state = [], action) {
  switch (action.type) {
    case actionTypes.UPDATE_CART:
      let idx = state.map(ad => ad.id).indexOf(action.id)

      // create new cart item if it doesn't exist
      if (idx < 0) {
        return [
          ...state,
          {
            id: action.id,
            qty: action.qty
          }
        ]
      }

      // remove item from cart if its quantitiy is 0
      if (state[idx].qty + action.qty === 0) {
        state.splice(idx, 1)
        return [...state]
      }

      // update existing cart item qty
      return [
        ...state.slice(0, idx),
        Object.assign(
          {},
          state[idx],
          {qty: state[idx].qty + action.qty}
        ),
        ...state.slice(idx + 1)
      ]
    default:
      return state
  }
}

export function customers(state = [], action) {
  switch (action.type) {
    case actionTypes.RECEIVE_CUSTOMERS:
      return [...action.customers]
    default:
      return state
  }
}

export function ads(state = [], action) {
  switch (action.type) {
    case actionTypes.RECEIVE_ADS:
      return [...action.ads]
    case actionTypes.UPDATE_ADS:
      const idx = state.map(ad => ad.id).indexOf(action.id)
      return [
        ...state.slice(0, idx),
        Object.assign({}, state[idx], {qty: state[idx].qty + action.qty}),
        ...state.slice(idx + 1)
      ]
    default:
      return state
  }
}

export function discounts(state = [], action) {
  switch (action.type) {
    case actionTypes.RECEIVE_DISCOUNTS:
      return [...action.discounts]
    default:
      return state
  }
}

export function selectedCustomer(state = 'default', action) {
  switch (action.type) {
    case actionTypes.CHANGE_CUSTOMER:
      return action.selectedCustomer
    default:
      return state
  }
}

const adCheckoutApp = combineReducers({
    selectedCustomer,
    customers,
    cart,
    ads,
    discounts
})

export default adCheckoutApp
