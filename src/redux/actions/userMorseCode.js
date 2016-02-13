export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_SETTINGS = 'SET_SETTINGS';
export const RECEIVE_URL_ID = 'RECEIVE_URL_ID';

export const setMessage = (message = '') => ({type: SET_MESSAGE, payload: {message}});

export const setSettings = (settings = {}) => ({type: SET_SETTINGS, payload: {settings}});

export const receiveUrlId = (response) => ({
  type: RECEIVE_URL_ID,
  payload: {
    urlId: response.urlId
  }
});

export const requestUrlId = (message, settings) => {
  return dispatch => {
    return fetch('/api/v1/morseCode', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message,
        settings
      })
    })
      .then(res => res.json())
      .then(res => dispatch(receiveUrlId(res)));
  };
};

export const actions = {
  setMessage,
  setSettings,
  receiveUrlId,
  requestUrlId
};
