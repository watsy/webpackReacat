import React from 'react'
import Fetch from '../common/fetch'
import {Modal ,Button} from 'antd'

const confirm = Modal.confirm;
export const actionInitList = (url) => (dispatch, getState) => {
  Fetch(url).then((res)=>{
    if(res.code == '1'){
      dispatch({
      	type:"getList",
      	data:res.date
      })
    }else{
      
    }
  },(req)=>{
        

  });
  
}


export const delect = (record)=>(dispatch,getState)=>{
	let name = record.name;
	confirm({
		title:'删除',
		content:'是否删除'+name,
		onOk(){

		},
		onCancel(){

		}
	})

}
