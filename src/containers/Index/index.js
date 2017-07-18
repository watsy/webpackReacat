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
		console.log(12)
	}
	render(){
		
		return <div>this is the index{this.state.name}</div>
	}
}
const MainState = (state) => {
  return {
    
  }
}
export default connect(MainState)(Index)


