import React , {Component}from 'react'
import {connect} from 'react-redux'
import { Link, browserHistory } from 'react-router'
import styles from './index.less'
class Index extends Component {
	constructor (props){
		super(props);
		this.state = {
			name:'hello'
		}
	}
	componentDidMount () {
		
	}
	render(){
		return (<div>
			<header>
		        <Link to="/home">Home</Link>
		        <Link to="/list">List</Link>
		     </header>
		     <div>{this.props.children}</div>
		</div>)
	}
}
const MainState = (state) => {
    return {
	   nav:state.detail.nav.get('currentMenu')
  	}
}
export default connect(MainState)(Index)


