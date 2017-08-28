import { combineReducers } from 'redux'

const cart = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      let itemIndex = state.map(item => item.adId).indexOf(action.adId)

      if (itemIndex < 0) {
        return [
          ...state,
          {
            adId: action.adId,
            qty: action.qty
          }
        ]
      }

      return [
        ...state.slice(0, itemIndex),
        Object.assign(
          {}, 
          state[itemIndex], 
          {qty: state[itemIndex].qty + action.qty}
        ),
        ...state.slice(itemIndex + 1)
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
    cart
})

export default adCheckoutApp