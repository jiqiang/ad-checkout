import React from 'react'
import PropTypes from 'prop-types'

const CartItemList = ({ children }) => (
  <div>
    {children}
  </div>
)

CartItemList.propTypes = {
  children: PropTypes.node
}

export default CartItemList