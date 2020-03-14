import { FETCH_ITEMS, IS_USER_LOGGED, ADD_ITEM } from '../actions/index';
import { getToken } from '../../utils/common';

const token = getToken();

const initialState = {
  loggedIn: token && true,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    case IS_USER_LOGGED:
      return { ...state, loggedIn: action.isLogged };
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.newItem] };
    default:
      return state;
  }
};
