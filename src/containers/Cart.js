import React from 'react'
import { connect } from 'react-redux'

import Discount from '../utils/discount'
import DiscountInfo from '../components/DiscountInfo'

export const calculateTotal = ({cart, ads, dcs}) => {
  let total = 0.0
  cart.forEach(item => {
    const price = ads.filter(ad => ad.id === item.id)[0].price
    const dc = dcs.filter(dc => dc.ad === item.id)
    if (dc.length === 0) {
      total += price * item.qty
    } else {
      const params = [item.id, item.qty, price].concat(dc[0].params)
      // discount rule function and its paramters are configurable
      total += Discount[dc[0].rule].apply(this, params)
    }
  })
  // fix javascript float number accuracy
  total = total.toFixed(2)
  return total
}

const Cart = ({ cart, ads, selectedCustomer, discounts }) => {
  
  let dcs = discounts.filter(dc => dc.customer === selectedCustomer)
  const total = calculateTotal({cart, ads, dcs})

  return (
    <div>
      <div>TOTAL: ${total}</div>
      <hr />
      <DiscountInfo discounts={dcs} />
    </div>
  )
}

export const mapStateToProps = state => ({
  cart: state.cart,
  ads: state.ads,
  selectedCustomer: state.selectedCustomer,
  discounts: state.discounts
})

export default connect(
  mapStateToProps
)(Cart)

