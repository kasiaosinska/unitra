import { ADD_ITEM } from '../actions/index'

const initialState = {
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: return { ...state, items: [ ...state.items, action.payload]}
    default: return state
  }
}