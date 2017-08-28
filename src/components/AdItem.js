import React from 'react'

const AdItem = ({ name, qty, onAdd, onRemove }) => {
  
  return (
    <div>
      <span>{name}</span>
      <button onClick={onRemove}>-</button>
      {qty}
      <button onClick={onAdd}>+</button>
    </div>
  )
}  

export default AdItem