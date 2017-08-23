import React , {Component}from 'react'
import {toJS} from 'immutable'
import {connect} from 'react-redux'
import Header from '../../components/Header'
import styles from './index.less'
import Fetch from '../../common/fetch'
class Index extends Component {
	constructor (props){
		super(props);
	}
	componentDidMount () {
		let actdata = {'num':'kys','sex':'nv'};

		// this.requset('/list',actdata);
	}
	requset (url,datas){
	    Fetch(url,datas).then((res)=>{
	    	console.log(res)
	    	if(res.code == '1'){
	    		console.log(2)
	    	}else{
	    		console.log(3)
	    	}
	    },(req)=>{
	    	

	    });
	}
	render(){
		return (<div ><Header routes = {this.props.nav}/>
		     		<div className="content">{this.props.children}</div></div>)
	}
}
const MainState = (state) => {
    return {
	   nav:state.header.get('nav').toJS()
  	}
}
export default connect(MainState)(Index)


