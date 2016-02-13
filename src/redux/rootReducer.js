import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import userMorseCode from 'redux/reducers/userMorseCode';
import sharedMorseCode from 'redux/reducers/sharedMorseCode';

export default combineReducers({
  userMorseCode,
  sharedMorseCode,
  router
});
