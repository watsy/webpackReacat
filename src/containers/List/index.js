import React ,{Component} from 'react'
import {connect} from 'react-redux'

class List extends Component{
	render () {
		return <div className="color">this is the list {this.props.nav}</div>
	}

}

const MainState = (state) => {
	
    return {
	   
  	}
}
export default connect(MainState)(List)
