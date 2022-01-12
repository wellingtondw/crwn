import {types} from './types'

const { SET_CURRENT_USER } = types

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
})