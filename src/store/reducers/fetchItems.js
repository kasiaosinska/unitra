import { FETCH_ITEMS } from '../actions/index'

export default (state = {}, action) => {
  console.log('action', action.payload)
  switch (action.type) {
    case FETCH_ITEMS: return action.payload
    default: return state
  }
}