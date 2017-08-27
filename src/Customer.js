import React, { Component } from 'react';

class Customer extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    return (
      <div>
        <label>
          <input
            readOnly 
            type="radio" 
            value={this.props.customer.id} 
            checked={this.props.checked}
            onClick={() => this.props.onClick()}
            name="customers" /> 
          {this.props.customer.name}
        </label>
      </div>
    );    
  }
}

export default Customer;