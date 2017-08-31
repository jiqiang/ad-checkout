import React from 'react'
import PropTypes from 'prop-types'
import './AdItem.css'

function AdItem({ name, qty, price, onAdd, onRemove }) {
  return (
    <tr>
      <td className="col nameCol">{name}</td>
      <td className="col qtyCol">
        <button className="qtyAdjustBtn remove" disabled={qty === 0} onClick={onRemove}>
          -
        </button>
          {qty}
        <button className="qtyAdjustBtn add" onClick={onAdd}>
          +
        </button>
      </td>
      <td className="col priceCol">${price}</td>
    </tr>
  )
}

AdItem.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}
AdItem.defaultProps = {
  name: '',
  qty: 0,
  price: 0.00,
  onAdd: () => {},
  onRemove: () => {}
}

export default AdItem
