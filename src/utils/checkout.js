import _ from "lodash";
import Discount from "./Discount";

export default class Checkout {

  constructor(discountRules, adPriceData) {
    this.discountRules = discountRules;
    this.adPriceData = adPriceData;
    this.cart = [];
  }

  add(adId) {
    this._updateAdPriceList(adId, 1);
    this.updateCart();
  }

  remove(adId) {
    this._updateAdPriceList(adId, -1);
    this.updateCart();
  }

  _updateAdPriceList(adId, qty) {
    let idx = _.findIndex(this.adPriceList, ["id", adId]);
    let newQty = this.adPriceList[idx].qty + qty;
    if (newQty < 0) {
      return;
    }
    this.adPriceList = [
      ..._.slice(this.adPriceList, 0, idx),
      Object.assign({}, this.adPriceList[idx], {qty: newQty}),
      ..._.slice(this.adPriceList, idx + 1)
    ];
  }

  updateCart() {
    this.cart = [];
    _.each(this.adPriceList, (v, k) => {
      if (v.qty > 0) {
        let discountRule = _.find(this.discountRules, ["ad", v.id]);
        if (discountRule) {
          let params = _.concat([v.id, v.qty, v.price], discountRule.param);
          this.cart = _.concat(this.cart, Discount[discountRule.rule].apply(this, params));
        } else {
          this.cart = _.concat(this.cart, v);
        }
      }
    });
  }

  initAdPriceList() {
    this.adPriceList = this.adPriceData.map((ad) => {
      return {
        id: ad.id,
        name: ad.name,
        price: ad.price,
        qty: 0
      };
    });
  }

  setDiscountRules(discountRules) {
    this.discountRules = discountRules;
  }

  setAdPriceData(adPriceData) {
    this.adPriceData = adPriceData;
  }

  getAdPriceList() {
    return this.adPriceList;
  }

  getCart() {
    return [..._.slice(this.cart, 0)];
  }

  total() {
    let total = 0.0;
    _.each(this.cart, (v, k) => {
      total += v.price * v.qty;
    });
    return total;
  }
}