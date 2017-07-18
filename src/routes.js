
export default [
  {
    name:'首页',
    path: '/',
    chunk: ()=>System.import('containers/Index'),
  },{
    name:'Home',
    path: '/home',
    chunk: ()=>System.import('containers/Home'),
  }]