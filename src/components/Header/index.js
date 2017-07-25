import React,{Component} from 'react'
import render from 'react-dom'
import {connect} from 'react-redux'
import { Link, browserHistory } from 'react-router'

export default class  extends Component{
	
	render(){
		return (
			<header>
		        <Link to="/home">Home</Link>
		        <Link to="/list">List</Link>
		     </header>)
	}
}

