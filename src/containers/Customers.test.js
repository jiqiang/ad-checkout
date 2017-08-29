import React from 'react'
import { shallow } from 'enzyme'
import { changeCustomer } from '../actions'
import { mapStateToProps, mapDispatchToProps } from './Customers'
import sinon from 'sinon'

describe('test Customers', () => {
  it('mapStateToProps should work properly', () => {
    const state = {customers: ['a', 'b'], selectedCustomer: 'a'}
    expect(mapStateToProps(state)).toEqual(state)
  })

  it('mapDispatchToProps should work properly', () => {
    let mockDispatch = sinon.stub()
    const f = mapDispatchToProps(mockDispatch)
    f.onClickCustomer('anid')
    expect(mockDispatch.calledOnce).toEqual(true)
  })
})