import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {browserHistory,Router, Route} from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import initState from './state/'
import {App, Home,List}from './containers'
import createStore from './store/'

const  store = createStore();
const history = syncHistoryWithStore(browserHistory, store)

render(<Provider store = {store}>
  
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="list" component={List}/>
      </Route>
    </Router>
	</Provider>,document.getElementById('content'));
