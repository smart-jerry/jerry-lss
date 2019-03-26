import { combineReducers } from 'redux'
import counter from './index/counter'
import hwary from './demo/hwary'
import getImg from './demo/getImg'

export default combineReducers({
  counter,
  hwary,
  getImg
})
