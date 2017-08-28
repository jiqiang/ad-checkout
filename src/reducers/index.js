import { combineReducers } from 'redux'

const cart = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      let idx = state.map(ad => ad.id).indexOf(action.id)

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

const customers = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CUSTOMERS':
      return [...action.customers]
    default:
      return state
  }
}

const ads = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_ADS':
      return [...action.ads]
    case 'UPDATE_ADS':
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

const discounts = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_DISCOUNTS':
      return [...action.discounts]
    default:
      return state
  }
}

const selectedCustomer = (state = 'default', action) => {
  switch (action.type) {
    case 'CHANGE_CUSTOMER':
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