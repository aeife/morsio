import { SET_MESSAGE, SET_SETTINGS } from 'redux/actions/userMorseCode';
import { Map } from 'immutable';

const defaultState = Map({
  message: '',
  settings: Map({
    frequence: 440,
    wpm: 13
  })
});

export default function userMorseCode (state = defaultState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return state.set('message', action.payload.message);

    case SET_SETTINGS:
      return state.set('settings', state.get('settings').merge(action.payload.settings));

    default:
      return state;
  }
}
