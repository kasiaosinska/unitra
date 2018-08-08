import { combineReducers } from 'redux'
import addItem from './addItem'
import fetchItems from './fetchItems'

export default combineReducers({
  addItem,
  fetchItems,
})