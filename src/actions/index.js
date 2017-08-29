import { loadData } from '../utils/api'

export const changeCustomer = (selectedCustomer) => ({
  type: 'CHANGE_CUSTOMER',
  selectedCustomer
})

export const updateCart = (id, qty) => ({
  type: 'UPDATE_CART',
  id: id,
  qty: qty
})

export const updateAds = (id, qty) => ({
  type: 'UPDATE_ADS',
  id: id,
  qty: qty
})

export const receiveCustomers = (customers) => ({
  type: 'RECEIVE_CUSTOMERS',
  customers
})

export const receiveAds = (ads) => ({
  type: 'RECEIVE_ADS',
  ads
})

export const receiveDiscounts = (discounts) => ({
  type: 'RECEIVE_DISCOUNTS',
  discounts
})

export const fetchData = () => {
  return (dispatch) => {
    return loadData().then(data => {
      dispatch(receiveCustomers(data.customers))
      dispatch(receiveAds(data.ads.map(ad => 
        Object.assign(
          {}, 
          ad, 
          {qty: 0}
        )
      )))
      dispatch(receiveDiscounts(data.discounts))
    })
  }
}