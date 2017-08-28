import React from 'react'
import { connect } from 'react-redux'

import CartItemList from '../components/CartItemList'
import Discount from '../utils/discount'

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

  let discountInfo = (<li>N/A</li>)
  if (dcs.length > 0) {
    discountInfo = dcs.map(dc => {
      let key = dc.customer + '-' + dc.ad
      return (<li key={key}>{dc.description}</li>)
    })
  }

  return (
    <div>
      <CartItemList>
        {cart.map(item => {
          if (item.qty > 0) {
            return (<div key={item.id}>{item.id} {item.qty}</div>)
          }
          return ""
        })}
      </CartItemList>
      <div>Total: ${total}</div>
      <div>
        <div>You are eligible for following discount(s):</div>
        <ul>{discountInfo}</ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
  ads: state.ads,
  selectedCustomer: state.selectedCustomer,
  discounts: state.discounts
})

export default connect(
  mapStateToProps
)(Cart)

