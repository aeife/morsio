import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import userMorseCode from 'redux/reducers/userMorseCode';

export default combineReducers({
  userMorseCode,
  router
});
