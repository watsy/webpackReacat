import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import initState from './state/'
import {App}from './containers'
import createStore from './store/'
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'
const  store = createStore(initState);

render(<Provider store = {store}>
	<BrowserRouter>
    	<App/>
    </BrowserRouter>
	</Provider>,document.getElementById('root'));


