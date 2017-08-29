import React from 'react'
import { shallow } from 'enzyme'
import CustomerList from './CustomerList'

describe('test CustomerList', () => {
  it('CustomerList should render properly', () => {
    
    const customerList = shallow(
      <CustomerList />
    )
    const expected = "Assume you are logged in as one of following customers:"
    expect(customerList.find('h3').text()).toEqual(expected)
  })
})