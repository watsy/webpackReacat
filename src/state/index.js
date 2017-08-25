import {fromJS} from 'immutable'
export default {
  header: fromJS({
    userData: JSON.parse(window._CURRENT_USER_ || '{}'),
    currentUser: {
      "name":"张三2"
    },
    nav:[
      {"name":"home",
        "url":"/home"
      },
      {
        "name":"list",
        "url":"/list"
      }

    ]
  })
}