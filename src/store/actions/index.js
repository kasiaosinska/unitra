import { itemsRef } from '../../firebase/firebaseStore'
export const ADD_ITEM = 'addItem'
export const FETCH_ITEMS = 'fetchItems'

export const addItem = newItem => async dispatch => {
  itemsRef.push().set(newItem)
}

export const removeItem = itemToRemove => async dispatch => {
  itemsRef.child(itemToRemove).remove()
}

export const fetchItems = () => async dispatch => {
  itemsRef.on('value', snapshot => {
    console.log('snapshot.val()', snapshot.val())
    dispatch({
      type: FETCH_ITEMS,
      payload: snapshot.val(),
    })
  })
}