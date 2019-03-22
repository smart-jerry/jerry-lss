import { combineReducers } from 'redux'
import counter from './index/counter'
import hwary from './demo/hwary'

export default combineReducers({
  counter,
  hwary
})
