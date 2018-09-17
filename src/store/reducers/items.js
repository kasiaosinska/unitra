import { FETCH_ITEMS } from '../actions/index'

const initialState = {
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload }
    default:
      return state
  }
}