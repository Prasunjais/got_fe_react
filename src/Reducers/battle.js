import { actionTypes } from 'Actions/test'
const {
  SCROLL_TO_TOP, LOCATION_LIST, BATTLE_DETAILS
} = actionTypes;

const initialState = {
  "_id": "",
  "name": "",
  "summer": true,
  "year": 0,
  "location": "",
  "region": "",
  "note": "",
  "battleNumber": 0,
  "attackerKing": "",
  "defenderKing": "",
  "attackerOutcome": "",
  "battleType": "",
  "majorDeath": 0,
  "majorCapture": 0,
  "attackerSize": 0,
  "defenderSize": 0,
  "attackerCommander": "",
  "defenderCommander": "",
  "attackers": [],
  "defenders": []
}

export default function test(state = initialState, action) {
  switch (action.type) {
    case SCROLL_TO_TOP:
      return { ...state, scrollToTop: action.shouldBeScrolledToTop }
    case LOCATION_LIST:
      return { ...state, locationList: action.data };
    case BATTLE_DETAILS:
      return { ...state, battleDetails: action.data };
    default:
      return state
  }
}