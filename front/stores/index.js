import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from 'reducers'
import thunk from 'redux-thunk'

function reduxStore (initialState = {}, middlewares = []) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, ...middlewares)
    )
  )

  return store
}

export default reduxStore
