import React from 'react'
import { shallow } from 'enzyme'
import AdItemList from './AdItemList'

describe('test AdItemList', () => {
  it('AdItemList should render properly', () => {
    const customer = shallow(<AdItemList />)
    expect(customer.find('tr.thead td').children().length).toEqual(3)
  })
})
