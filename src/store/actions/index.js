export const FETCH_ITEMS = 'fetchItems';
export const IS_USER_LOGGED = 'isUserLogged';

export const isUserLogged = isLogged => {
  return {
    type: IS_USER_LOGGED,
    isLogged,
  };
};

export const addItem = newItem => async dispatch => {};

export const removeItem = item => async dispatch => {};

export const fetchItems = () => async dispatch => {};
