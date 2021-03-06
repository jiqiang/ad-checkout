import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeCustomer } from '../actions'
import CustomerList from '../components/CustomerList'
import Customer from '../components/Customer'

export class Customers extends React.Component {
  render() {
    return (
      <CustomerList>
        {this.props.customers.map(customer =>
          <Customer
            key={customer.id}
            name={customer.name}
            selected={customer.id === this.props.selectedCustomer}
            onClick={() => this.props.onClickCustomer(customer.id)} />
        )}
      </CustomerList>
    )
  }
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired,
  selectedCustomer: PropTypes.string.isRequired,
  onClickCustomer: PropTypes.func
}
Customers.defaultProps = {
  customers: [],
  selectedCustomer: ''
}

export function mapStateToProps(state) {
  return {
    customers: state.customers,
    selectedCustomer: state.selectedCustomer
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onClickCustomer: id => {
      dispatch(changeCustomer(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers)

