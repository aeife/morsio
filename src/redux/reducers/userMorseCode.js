import { SET_MESSAGE, SET_SETTINGS, RECEIVE_URL_ID } from 'redux/actions/userMorseCode';
import { Map, fromJS } from 'immutable';
import { defaultSettings } from 'services/morseCode/morseCode';

const defaultState = Map({
  message: '',
  settings: fromJS(defaultSettings)
});

export default function userMorseCode (state = defaultState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return state.set('message', action.payload.message);

    case SET_SETTINGS:
      return state.set('settings', state.get('settings').merge(action.payload.settings));

    case RECEIVE_URL_ID:
      return state.set('urlId', action.payload.urlId);

    default:
      return state;
  }
}
