import { combineReducers } from 'redux'

import application from './application'
import user from './user'

export default combineReducers({
    application, user
});