import { RECEIVE_SHARED_CODE } from 'redux/actions/sharedMorseCode';
import { Map, fromJS } from 'immutable';

const defaultState = Map({
  message: '',
  urlId: '',
  settings: Map()
});

export default function sharedMorseCode (state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_SHARED_CODE:
      return state.set('message', action.payload.message).set('urlId', action.payload.urlId).set('settings', fromJS(action.payload.settings));

    default:
      return state;
  }
}
