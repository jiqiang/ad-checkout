import React from 'react'
import { connect } from 'react-redux'

import { changeCustomer } from '../actions'
import CustomerList from '../components/CustomerList'
import Customer from '../components/Customer'

const Customers = ({ customers, selectedCustomer, onClickCustomer }) => (
  <CustomerList>
    {customers.map(customer =>
      <Customer 
        key={customer.id} 
        name={customer.name}
        selected={customer.id === selectedCustomer}
        onClick={() => onClickCustomer(customer.id)} />
    )}
  </CustomerList>
)

const mapStateToProps = state => ({
  customers: state.customers,
  selectedCustomer: state.selectedCustomer
})

const mapDispatchToProps = dispatch => ({
  onClickCustomer: id => {
    dispatch(changeCustomer(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers)

