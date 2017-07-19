import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {browserHistory,Router, Route} from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import initState from './state/'
import Index from './containers/Index'
import Home from './containers/Home'
import createStore from './store/'

const  store = createStore(initState);

const history = syncHistoryWithStore(browserHistory, store)

render(<Provider store = {store}>
	<Router history={history}>
      <Route path="/" component = {Index} >
        <Route path="home" component={Home}/>
      </Route>
    </Router>
	</Provider>,document.getElementById('content'));
