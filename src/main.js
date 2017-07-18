import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {browserHistory,Router, Route} from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import { createStore,combineReducers } from 'redux'
import reducers from './reducers'
import Index from './containers/Index'
import Home from './containers/Home'

const  store = createStore(
	 combineReducers({
    reducers,
    routing: routerReducer
  })
	)
const history = syncHistoryWithStore(browserHistory, store)

render(<Provider store = {store}>
	<Router history={history}>
      <Route path="/" component={Index} />
      <Route path="/home" component={Home}/>
    </Router>
	</Provider>,document.getElementById('content'));
