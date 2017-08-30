import React from 'react'
import './AdItem.css'

const AdItem = ({ name, qty, price, onAdd, onRemove }) => {
  return (
    <tr>
      <td className="col nameCol">{name}</td>
      <td className="col qtyCol">
        <button className="qtyAdjustBtn remove" disabled={qty === 0} onClick={onRemove}>-</button>
        {qty}
        <button className="qtyAdjustBtn add" onClick={onAdd}>+</button>
      </td>
      <td className="col priceCol">${price}</td>
    </tr>
  )
}  

export default AdItem
