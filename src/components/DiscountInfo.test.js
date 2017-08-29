import React from 'react'
import { shallow } from 'enzyme'
import DiscountInfo from './DiscountInfo'

describe('test DiscountInfo', () => {
  it('DiscountInfo should render properly', () => {
    const ds = [{
      "customer": "nike",
      "ad": "premium",
      "rule": "pay_less_price_when_buy_more",
      "params": [
          4,
          379.99
      ],
      "description": "Premium Ad: Buy 4 or more, drop price to $379.99 per ad."
    }]
    const discountInfo = shallow(
      <DiscountInfo discounts={ds} />
    )
    const expected = discountInfo.find('div.discountInfo ul li').at(0).text()
    expect(expected).toEqual(ds[0].description)
  })
})