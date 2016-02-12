export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_SETTINGS = 'SET_SETTINGS';

export const setMessage = (message = '') => ({type: SET_MESSAGE, payload: {message}});

export const setSettings = (settings = {}) => ({type: SET_SETTINGS, payload: {settings}});

export const actions = {
  setMessage,
  setSettings
};
