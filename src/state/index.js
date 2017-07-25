import {fromJS} from 'immutable'
export default {
  header: fromJS({
    userData: JSON.parse(window._CURRENT_USER_ || '{}'),
    currentUser: {
      "name":"12"
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