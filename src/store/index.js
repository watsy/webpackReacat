
import { createStore, combineReducers } from 'redux'
import {  routerReducer } from 'react-router-redux'
import * as reducers from "../reducers"

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

export default (initState) => {
  const store = createStore(rootReducer,initState);
  return store
}
