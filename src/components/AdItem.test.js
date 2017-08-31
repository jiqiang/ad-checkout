import React from 'react'
import { shallow } from 'enzyme'
import AdItem from './AdItem'

describe('test AdItem', () => {
  it('AdItem should render properly', () =>{
    const adItem = shallow(<AdItem name="aname" qty={1} price={20} />)
    const test = [
      {selector: 'td.nameCol', text: 'aname'},
      {selector: 'td.priceCol', text: '$20'}
    ]
    test.forEach(t => {
      expect(adItem.find(t.selector).text()).toEqual(t.text)
    })
  })
})
