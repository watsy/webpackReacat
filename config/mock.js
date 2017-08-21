/**
 * 请求出口配置
 */
var host = "http://10.30.128.239"

module.exports = {
  proxy: false,
  api: {
    '.*': {
      target: host,
      ajax:false,
      secure: false
    },
  }
}