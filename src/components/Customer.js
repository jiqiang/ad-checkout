import React from 'react'

const Customer = ({ name, selected, onClick }) => {
  const tick = selected ? 'V' : ''
  return (
    <div onClick={onClick}>{tick} {name}</div>
  )
}  

export default Customer