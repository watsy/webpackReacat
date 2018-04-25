import { createStore, combineReducers ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import * as reducers from "../reducers"

const rootReducer = combineReducers({
  ...reducers
})

export default (initState) => {
  const store = createStore(rootReducer,initState,applyMiddleware(thunk));
  return store
}
