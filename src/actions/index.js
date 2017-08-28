export const changeCustomer = (selectedCustomer) => ({
  type: 'CHANGE_CUSTOMER',
  selectedCustomer
})

export const updateCart = (item) => ({
  type: 'UPDATE_CART',
  adId: item.adId,
  qty: item.qty
})

export const receiveCustomers = (customers) => ({
  type: 'RECEIVE_CUSTOMERS',
  customers
})

export const receiveAds = (ads) => ({
  type: 'RECEIVE_ADS',
  ads
})

export const fetchData = () => {
  return (dispatch) => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        
        dispatch(receiveCustomers(data.customers))
        dispatch(receiveAds(data.ads.map(ad => 
          Object.assign(
            {}, 
            ad, 
            {qty: 0}
          )
        )))
      })
  }
}