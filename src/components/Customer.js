import React from 'react'

import './Customer.css'

const Customer = ({ name, selected, onClick }) => {
  const className = selected ? 'customer selected' : 'customer'
  return (
    <div className={className} onClick={onClick}>{name}</div>
  )
}  

export default Customer