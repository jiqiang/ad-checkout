import React from 'react'
import PropTypes from 'prop-types'
import './AdItemList.css'

function AdItemList({ children }) {
  const thead = ['AD', 'QTY', 'PRICE'].map((v, i) => <td key={i}>{v}</td>)
  return (
    <table>
      <tbody>
        <tr className="thead">{thead}</tr>
        {children}
      </tbody>
    </table>
  )
}

AdItemList.propTypes = { children: PropTypes.node }
AdItemList.defaultProps = { children: null }

export default AdItemList
