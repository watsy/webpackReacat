import Immutable from 'immutable'
var  initState = {
	list:[],
	pageSize:10,
	pageNum:1,
	total:100
}
export default function(state =Immutable.fromJS(initState) ,action){
	switch(action.type){
		case 'getList':
			return state.merge({list: action.data})
		default:
			return state;
	}
		
}
