import React from 'react'
import { connect } from 'react-redux'

import Discount from '../utils/discount'
import DiscountInfo from '../components/DiscountInfo'

const Cart = ({ cart, ads, selectedCustomer, discounts }) => {
  
  let dcs = discounts.filter(dc => dc.customer === selectedCustomer)
  let total = 0.0
  cart.forEach(c => {
    let price = ads.filter(ad => ad.id === c.id)[0].price
    let dc = dcs.filter(dc => dc.ad === c.id)
    if (dc.length === 0) {
      total += price * c.qty
    } else {
      let p = [c.id, c.qty, price].concat(dc[0].params)
      total += Discount[dc[0].rule].apply(this, p)
    }   
  })
  total = total.toFixed(2)

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

