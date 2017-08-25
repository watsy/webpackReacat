import React , {Component}from 'react'
import {toJS} from 'immutable'
import {connect} from 'react-redux'
import styles from './index.less'
import Fetch from '../../common/fetch'
import LeftMenu from '../../components/leftMenu'
import Header from '../../components/Header'
import { Layout, Breadcrumb, Icon } from 'antd'
const {  Content, Footer, Sider } = Layout;

class Index extends Component {
	constructor (props){
		super(props);
		this.state = {
		    collapsed: false,
		 };
	}
	componentDidMount () {
		let actdata = {'num':'kys','sex':'nv'};

		// this.requset('/list',actdata);
	}
	onCollapse(collapsed){
	    console.log(collapsed);
	    this.setState({ collapsed });
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
		const {props} = this
		const nav = props.header.get('nav').toJS();
		const user = props.header.get('currentUser').toJS();
		return (<Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <LeftMenu routes = {nav} />
        </Sider>
        <Layout>
          <Header  user = {user} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>)
	}
}
const MainState = (state) => {
    return {
	   header:state.header
  	}
}
export default connect(MainState)(Index)

  



