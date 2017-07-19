import {push} from 'react-router-redux'
export const SET_LIST = 'SET_LIST'

export function getlist (loading) {
  return dispatch => {
    dispatch({
      type: types.SET_LIST,
      payload: {loading}
    })
  }
}

export function actserch (path) {
  return dispatch => {
    dispatch(push(path))
  }
}