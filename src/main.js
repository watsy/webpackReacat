import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {browserHistory,Router, Route,IndexRoute} from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import initState from './state/'
import {App, Home,List}from './containers'
import createStore from './store/'
import 'antd/dist/antd.less'

const  store = createStore(initState);

const history = syncHistoryWithStore(browserHistory, store)
render(<Provider store = {store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="list" component={List}/>
      </Route>
    </Router>
	</Provider>,document.getElementById('root'));
