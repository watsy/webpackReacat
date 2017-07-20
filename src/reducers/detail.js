import { List, fromJS } from 'immutable'
const initState = {
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
export default (state = initState, action) => {
  return state;
}