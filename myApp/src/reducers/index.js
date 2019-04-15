import { combineReducers } from 'redux'
import counter from './index/counter'
import hwAry from './demo/hwary'
import getImg from './demo/getImg'
import categoryList from './category/index'
import cartList from './carts/cartList'

export default combineReducers({
  counter,
  hwAry,
  getImg,
  categoryList,
  cartList
})
