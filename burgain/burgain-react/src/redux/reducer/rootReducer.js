import authReducer from './authReducer';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  item: itemReducer,
  errors: errorReducer,
})

export default rootReducer
