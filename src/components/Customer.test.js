import React from 'react'
import { shallow } from 'enzyme'
import Customer from './Customer'
import sinon from 'sinon'

describe('test Customer', () => {
  it('Customer should render properly', () => {
    
    const customer = shallow(
      <Customer name="aname" selected={true} />
    )
    const expected = "Assume you are logged in as one of following customers:"
    expect(customer.find('div.customer.selected').text()).toEqual("aname")
  })

  it('Customer onClick should be called when click', () => {
    const onClick = sinon.spy()
    const customer = shallow(
      (<Customer name="aname" onClick={onClick} />)
    )
    customer.simulate('click')
    expect(onClick.calledOnce).toEqual(true)
  })
})