import React from 'react'
import { shallow } from 'enzyme'
import { updateAds, updateCart } from '../actions'
import { mapStateToProps, mapDispatchToProps } from './Ads'
import sinon from 'sinon'

describe('test Ads', () => {
  it('mapStateToProps should work properly', () => {
    const state = {ads: ['a', 'b']}
    expect(mapStateToProps(state)).toEqual(state)
  })

  it('mapDispatchToProps should work properly', () => {
    let mockDispatch = sinon.stub()
    const f = mapDispatchToProps(mockDispatch)
    f.onUpdateAdItemQty('anid', 2)
    expect(mockDispatch.calledTwice).toEqual(true)
  })
})