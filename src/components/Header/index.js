import React,{Component} from 'react'
import render from 'react-dom'
import {connect} from 'react-redux'
import { Link, browserHistory } from 'react-router'
import styles from './index.less'

export default class  extends Component{
	componentDidMount () {
			
	}
	getrouters (){
		let routers =  this.props.routes;
		const routes = routers.map(router=><Link to={router.url} key={router.url} >{router.name}</Link>)
		return routes;
	}
	render(){
		return (
			<header>
			{this.getrouters()}
		     </header>)
	}
}

