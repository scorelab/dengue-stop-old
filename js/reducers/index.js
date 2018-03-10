import { combineReducers } from 'redux';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  home: homeReducer
});

export default rootReducer;
