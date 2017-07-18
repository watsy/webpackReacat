import Immutable from 'immutable'
import * as types from '../actions/index'

export default (state = Immutable.Map({}), action) => {
  const {payload} = action

  switch (action.type) {
    case types.SET_LOADING:
      return state.set('loading', payload.loading)
    default:
      return state
  }
}