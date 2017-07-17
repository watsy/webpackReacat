import React from 'react'
import {render} from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore} from 'redux'
// import todoApp from './reducers'
// import App from './components/App'
// let store  =  createStore(todoApp)
// render(<Provider store = {store}></Provider>,document.getElementById('content'));




import {Router, Route, hashHistory} from 'react-router'
import Index from './containers/Index'
import Home from './containers/Home'
render((<Router history={hashHistory}>
        <Route path='/' component={Index}></Route>
        <Route path='/home' component={Home} />
    	</Router>),document.getElementById('content'));