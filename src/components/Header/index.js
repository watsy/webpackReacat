import React,{Component} from 'react'
import render from 'react-dom'
import {connect} from 'react-redux'
import { Link, browserHistory } from 'react-router'
import styles from './index.less'

export default class  extends Component{
	componentDidMount () {
			
	}
	render(){
		return (
			<div className="header">
				<div className="left"><span>你好：{this.props.user.name}</span> | <a href="/logout">登出</a></div>
		    </div>)
	}
}

