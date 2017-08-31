import { loadData } from '../utils/api'
import * as actionTypes from './actionTypes'

// all action creators are self-explained
export function changeCustomer(selectedCustomer) {
  return {
    type: actionTypes.CHANGE_CUSTOMER,
    selectedCustomer
  }
}

export function updateCart(id, qty) {
  return {
    type: actionTypes.UPDATE_CART,
    id,
    qty
  }
}

export function updateAds(id, qty) {
  return {
    type: actionTypes.UPDATE_ADS,
    id,
    qty
  }
}

export function receiveCustomers(customers) {
  return {
    type: actionTypes.RECEIVE_CUSTOMERS,
    customers
  }
}

export function receiveAds(ads) {
  return {
    type: actionTypes.RECEIVE_ADS,
    ads
  }
}

export function receiveDiscounts(discounts) {
  return {
    type: actionTypes.RECEIVE_DISCOUNTS,
    discounts
  }
}

export function fetchData() {
  return (dispatch) => {
    return loadData().then(data => {
      dispatch(receiveCustomers(data.customers))
      dispatch(
        receiveAds(
          data.ads.map(ad =>({...ad, qty: 0}))
        )
      )
      dispatch(receiveDiscounts(data.discounts))
    })
  }
}
