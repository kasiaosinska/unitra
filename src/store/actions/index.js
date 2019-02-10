import { itemsRef } from '../../firebase/firebaseStore';
export const FETCH_ITEMS = 'fetchItems';

export const addItem = newItem => async dispatch => {
  itemsRef.push().set(newItem);
};

export const removeItem = item => async dispatch => {
  itemsRef.child(item).remove();
};

export const fetchItems = () => async dispatch => {
  itemsRef.on('value', snapshot => {
    dispatch({
      type: FETCH_ITEMS,
      payload: snapshot.val(),
    });
  });
};
