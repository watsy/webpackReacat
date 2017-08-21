import React , {Component}from 'react'
import {connect} from 'react-redux'
import {Router, Route,IndexRoute} from 'react-router'
import {App, Home,List}from '../containers'
export default class extends Component {
	
	componentDidMount () {
		console.log(this.props);
		
	}

	render(){
		const props = this.props;
		console.log(props);
		return (
			<div>12</div>)
	}
}