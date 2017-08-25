import React,{Component} from 'react'
import render from 'react-dom'
import {connect} from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { Icon,Menu } from 'antd'
const SubMenu = Menu.SubMenu;

export default class  extends Component{
	componentDidMount () {
			
	}
	getrouters (){
		let routers =  this.props.routes;
		const routes = routers.map((router,i)=><Menu.Item key={i}>
			<Link to={router.url} key={router.url} ><Icon type="file" /><span>{router.name}</span></Link>
            </Menu.Item>)
		return routes;
	}
	render(){
		return (
		<Menu theme="dark" defaultSelectedKeys={['0']} >
		{this.getrouters()}
        </Menu>)
	}
}


