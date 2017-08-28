import React from 'react'
import PropTypes from 'prop-types'

const CustomerList = ({ children }) => (
  <div>
    <h1>Please select a customer:</h1>
    <div>{children}</div>
  </div>
)

CustomerList.propTypes = {
  children: PropTypes.node
}

export default CustomerList