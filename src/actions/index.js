import {push} from 'react-router-redux'
export const SET_LOADING = 'SET_LOADING'

export function acLoading (loading) {
  return dispatch => {
    dispatch({
      type: types.SET_LOADING,
      payload: {loading}
    })
  }
}

export function acChangeRouter (path) {
  return dispatch => {
    dispatch(push(path))
  }
}