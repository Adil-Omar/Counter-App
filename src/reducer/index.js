import { combineReducers } from 'redux';
import changeNumber from './changeNumber';

const mainReducer = combineReducers({
  changeNumber,
});

export default mainReducer;
