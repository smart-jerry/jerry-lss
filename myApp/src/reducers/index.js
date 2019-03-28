import { combineReducers } from 'redux'
import counter from './index/counter'
import hwary from './demo/hwary'
import getImg from './demo/getImg'
import categoryList from './category/index'

export default combineReducers({
  counter,
  hwary,
  getImg,
  categoryList
})
