import React , {Component}from 'react'
import {connect} from 'react-redux'
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
		
		return <div>this is the index{this.props.nav}</div>
	}
}
const MainState = (state) => {
	console.log(state)
    return {
	   nav:state.detail.nav.get('currentMenu')
  	}
}
export default connect(MainState)(Index)


