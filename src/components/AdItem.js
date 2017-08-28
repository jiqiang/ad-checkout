import React from 'react'

const AdItem = ({ name, qty, price, onAdd, onRemove }) => {
  
  return (
    <div>
      <span>{name}</span>
      <button disabled={qty === 0} onClick={onRemove}>-</button>
      {qty}
      <button onClick={onAdd}>+</button>
      <span>${price}</span>
    </div>
  )
}  

export default AdItem