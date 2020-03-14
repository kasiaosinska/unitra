export const FETCH_ITEMS = 'fetchItems';
export const IS_USER_LOGGED = 'isUserLogged';
export const ADD_ITEM = 'addItem';

export const isUserLogged = isLogged => {
  return {
    type: IS_USER_LOGGED,
    isLogged,
  };
};

export const fetchItems = items => {
  return {
    type: FETCH_ITEMS,
    items,
  };
};

export const addItem = newItem => {
  return {
    type: ADD_ITEM,
    newItem,
  };
};

export const removeItem = item => async dispatch => {};
