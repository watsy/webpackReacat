import React ,{Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../../actions/list'

import {Table} from 'antd'
class List extends Component{
	componentDidMount () {	
		this.props.actionInitList('/get/getuser')
	}
	render () {
		const {state,props} = this;
		const dataSource = props.data.get('list').toJS();
		const columns = [{
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '年龄',
		  dataIndex: 'age',
		  key: 'age',
		}, {
		  title: '住址',
		  dataIndex: 'address',
		  key: 'address',
		},{
			title:'操作',
	        render: (text,record) =>{
	        	return (
        		<span>
	                <a href="#">详情 </a>
	                <span className="ant-divider" />
	                <a href="javascript:;" onClick={props.delect.bind(this,record)}>删除</a>
	             </span>)
	        }
		}];
		return (<Table dataSource={dataSource} columns={columns} />)
	}
}

const MainState = (state) => {
    return {
	   data: state.List
  	}
}
export default connect(MainState,action)(List)
