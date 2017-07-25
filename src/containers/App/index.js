import React , {Component}from 'react'
import {toJS} from 'immutable'
import {connect} from 'react-redux'
import Header from '../../components/Header'
import styles from './index.less'
class Index extends Component {
	constructor (props){
		super(props);
	}
	componentDidMount () {
		
	}
	
	render(){
		return (<div><Header routes = {this.props.nav}/>
		     		<div>{this.props.children}</div></div>)
	}
}
const MainState = (state) => {
    return {
	   nav:state.header.get('nav').toJS()
  	}
}
export default connect(MainState)(Index)


