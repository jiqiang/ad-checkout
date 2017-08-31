import React from 'react'
import PropTypes from 'prop-types'
import './DiscountInfo.css'

function DiscountInfo({ discounts }) {
  let discountInfo = (<li>N/A</li>)
  if (discounts.length > 0) {
    discountInfo = discounts.map(dc => {
      const key = dc.customer + '-' + dc.ad
      return (<li key={key}>{dc.description}</li>)
    })
  }
  return (
    <div className="discountInfo">
      <div>You are eligible for following discount(s):</div>
      <ul>{discountInfo}</ul>
    </div>
  )
}

DiscountInfo.propsTypes = { discounts: PropTypes.array.isRequired }
DiscountInfo.defaultProps = { discounts: [] }

export default DiscountInfo
