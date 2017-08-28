import React from 'react'
import PropTypes from 'prop-types'

const AdItemList = ({ children }) => (
  <div>
    {children}
  </div>
)

AdItemList.propTypes = {
  children: PropTypes.node
}

export default AdItemList