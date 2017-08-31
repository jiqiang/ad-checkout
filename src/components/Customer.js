import React from 'react'
import PropTypes from 'prop-types'
import './Customer.css'

function Customer({ name, selected, onClick }) {
  const className = selected ? 'customer selected' : 'customer'
  return (<div className={className} onClick={onClick}>{name}</div>)
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
Customer.defaultProps = {
  name: '',
  selected: false,
  onClick: () => {}
}

export default Customer
