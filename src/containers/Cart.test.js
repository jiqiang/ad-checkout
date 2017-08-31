import React from 'react'
import { shallow } from 'enzyme'
import { mapStateToProps } from './Cart'
import sinon from 'sinon'

describe('test Cart', () => {
  it('mapStateToProps should work properly', () => {
    const state = {
      ads: ['a', 'b'],
      cart: [1,2],
      selectedCustomer: 'acustomer',
      discounts: [3,4]
    }
    expect(mapStateToProps(state)).toEqual(state)
  })
})
