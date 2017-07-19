
import { createStore, combineReducers } from 'redux'
import {  routerReducer } from 'react-router-redux'

import detail from "../reducers/detail"
import list from '../reducers/list'



const rootReducer = combineReducers({
  detail,
  list,
  routing: routerReducer
})


export default initState => {
  const store = createStore(
    rootReducer,
    initState
  )
  return store
}
