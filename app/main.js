import React from 'react'
import {render} from 'react-dom'
import {Switch ,Route} from 'react-router'
import {Index} from './containers/Index'
import Home from './containers/Home'
render(
	<Switch>
		<Route exact path="/" component = {Index} />
		<Route path="/home" component = {Home}/ >
	</Switch>,document.getElementById('content'));