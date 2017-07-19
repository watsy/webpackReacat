/**
 * 所有状态维护的地方
 */
import {fromJS} from 'immutable'
export default {
  headerData: fromJS({
    userData: JSON.parse(window._CURRENT_USER_ || '{}'),
    currentUser: {
    }
  }),
  nav:fromJS({
    // 当前菜单项
    currentMenu:''
  })
}