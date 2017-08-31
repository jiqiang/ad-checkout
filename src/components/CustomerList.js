import React from 'react'
import PropTypes from 'prop-types'

function CustomerList({ children }) {
  return (
    <div>
      <h3>Assume you are logged in as one of following customers:</h3>
      <div>{children}</div>
    </div>
  )
}

CustomerList.propTypes = { children: PropTypes.node }
CustomerList.defaultProps = { children: null }

export default CustomerList
