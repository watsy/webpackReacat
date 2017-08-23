
import { createStore, combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {  routerReducer } from 'react-router-redux'
import * as reducers from "../reducers"

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

export default (initState) => {
  const store = createStore(rootReducer,initState,applyMiddleware(thunk));
  return store
}
