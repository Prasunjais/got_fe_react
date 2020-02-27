import generateActionTypes from '../Utils/generateActionTypes'
//import axios from 'axios'

export const actionTypes = generateActionTypes('SCROLL_TO_TOP', 'LOCATION_LIST', 'BATTLE_DETAILS')

export function scrollToTop(clear = false) {
  return dispatch => {
    return dispatch({ type: actionTypes.SCROLL_TO_TOP, shouldBeScrolledToTop: !clear })
  }
}

export function storeLocationList(data) {
  return dispatch => {
    return dispatch({ type: actionTypes.LOCATION_LIST, data: data })
  }
}

export function battleDetails() {
  return dispatch => {
    return dispatch({ type: actionTypes.BATTLE_DETAILS })
  }
}


