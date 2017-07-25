import {fromJS} from 'immutable'
export default {
  detail: fromJS({
    userData: JSON.parse(window._CURRENT_USER_ || '{}'),
    currentUser: {
    }
  }),
  list:fromJS({
    // 当前菜单项
    currentMenu:''
  })
}