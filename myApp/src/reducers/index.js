import { combineReducers } from 'redux'
import counter from './index/counter'
import hwary from './demo/hwary'
import  textInput from './demo/textInput'

export default combineReducers({
  counter,
  hwary,
  textInput
})
