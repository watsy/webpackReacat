/**
 * 所有状态维护的地方
 */
import {fromJS} from 'immutable'
export default {
  headerData: fromJS({
    userData: {},
    currentUser: {
    }
  }),
  nav:fromJS({
    // 当前菜单项
    currentMenu:'hehhe'
  })
}