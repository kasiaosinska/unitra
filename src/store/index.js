import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'unitra' })
      : f => f
  )
)

export default store