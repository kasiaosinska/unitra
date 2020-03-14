import { FETCH_ITEMS, IS_USER_LOGGED } from '../actions/index';

const initialState = {
  loggedIn: false,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    case IS_USER_LOGGED:
      return { ...state, loggedIn: action.isLogged };
    default:
      return state;
  }
};
