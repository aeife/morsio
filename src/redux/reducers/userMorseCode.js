import { SET_MESSAGE } from 'redux/actions/userMorseCode';
import { Map } from 'immutable';

const defaultState = Map({message: ''});

export default function userMorseCode (state = defaultState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return state.set('message', action.payload.message);

    default:
      return state;
  }
}
