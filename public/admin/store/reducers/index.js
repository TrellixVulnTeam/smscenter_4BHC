import {combineReducers} from 'redux'
import {userStatus} from './userStatus'
import {nonanswered} from './nonanswered'
import {answered} from './answered'
import admmessage from './admmessage'
import adminReducer from './adminreducer'
export default combineReducers ({
  adminReducer,
  admmessage,
  nonanswered: nonanswered,
  answered: answered,
  userStatus: userStatus,
})
