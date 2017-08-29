import React from 'react'

import './DiscountInfo.css'

const DiscountInfo = ({ discounts }) => {
    
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

export default DiscountInfo